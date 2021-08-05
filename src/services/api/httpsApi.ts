/* eslint-disable no-console */
import https from "https-browserify";
import {
    APPLICATION_JSON,
    ENCODING_UTF8,
    POST,
    HOSTNAME,
    PORT,
} from "../../properties/properties";
import project from "../../../project.config";
import { HttpStatus } from "../../types/common/HttpStatus";

export const apiCall = (pathMethod: string, body: any, method = POST, hostname = HOSTNAME, port = PORT) => {
    const postData = JSON.stringify({
        username: body.username,
        password: body.password,
    });

    const options = {
        hostname: project.env === "development" ? hostname : window.location.hostname,
        port: project.env === "development" ? port : window.location.port,
        path: pathMethod,
        method,
        headers: {
            "Content-Type": APPLICATION_JSON,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type,x-requested-with,Authorization,Access-Control-Allow-Origin",
            "Access-Control-Allow-Methods": "GET,OPTIONS,POST,DELETE,PUT,HEAD",
            "Access-Control-Max-Age": "3600",
        },
        rejectUnauthorized: false,
        agent: false,
        requestCert: false,
    };

    return new Promise((resolve, reject) => {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        const req = https.request(options, (res) => {
            res.setEncoding(ENCODING_UTF8);

            console.log("statusCode:", res.statusCode);
            if (res.statusCode === HttpStatus.INTERNAL_SERVER_ERROR) {
                resolve(resolve({
                    httpStatus: HttpStatus.INTERNAL_SERVER_ERROR,
                }));
            }

            res.on("data", (result) => {

                try {
                    //console.log("result = ", result)
                    const obj = JSON.parse(result);
                    const { identity } = obj;
                    localStorage.setItem("identity", identity);
                    resolve({
                        httpStatus: HttpStatus.OK,
                        result: obj,
                    });
                } catch (error) {
                    console.error(error);
                    resolve(resolve({
                        httpStatus:
                        HttpStatus.INTERNAL_SERVER_ERROR,
                    }));
                }

            });

            res.on("end", () => {
                console.log("No more data in response.");
            });
        });

        req.on("error", (err) => {
            console.log(`problem with request: ${err.message}`);
            reject(err);
        });

        if (postData) {
            req.write(postData);
        }

        req.end();
    });
};
