import AxiosService from "../../services/api/AxiosService";
import { ScmBucket, ScmStatus, ScmTaskGroup } from "../../types/scm";
import { AxiosResponse } from "axios";
import { ScmTaskTypeDto } from "../../types/scm/ScmTaskTypeDto";
import { ScmTaskStatusDto } from "../../types/scm/ScmTaskStatusDto";
import { ScmTaskSource } from "../../types/scm/ScmTaskSource";

class CommonApiNew {

    static readonly BASE_PATH = "/common";

    public getScmBuckets(): Promise<AxiosResponse<Array<ScmBucket>>> {
        return AxiosService.post<Array<ScmBucket>>(`${CommonApiNew.BASE_PATH}/scm-bucket/load`);
    }

    public getScmTaskTypes(): Promise<AxiosResponse<Array<ScmTaskTypeDto>>> {
        return AxiosService.post<Array<ScmTaskTypeDto>>(`${CommonApiNew.BASE_PATH}/scm-task-type/load`);
    }

    public getScmTaskStatuses(): Promise<AxiosResponse<Array<ScmTaskStatusDto>>> {
        return AxiosService.post<Array<ScmTaskStatusDto>>(`${CommonApiNew.BASE_PATH}/scm-task-status/load`);
    }

    public getScmStatuses(): Promise<AxiosResponse<Array<ScmStatus>>> {
        return AxiosService.post(`${CommonApiNew.BASE_PATH}/scm-status/load`);
    }

    public getScmTaskSources(): Promise<AxiosResponse<Array<ScmTaskSource>>> {
        return AxiosService.post(`${CommonApiNew.BASE_PATH}/scm-task-source/load`);
    }

    public getScmTaskGroups(): Promise<AxiosResponse<Array<ScmTaskGroup>>> {
        return AxiosService.post(`${CommonApiNew.BASE_PATH}/scm-task-group/load`);
    }
}

export default new CommonApiNew();
