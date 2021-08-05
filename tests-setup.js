/* eslint-disable @typescript-eslint/no-var-requires */
const { configure } = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

configure({ adapter: new Adapter() });

module.exports = {
    resolveSnapshotPath: (testPath, snapshotExtension) => testPath + snapshotExtension,
    resolveTestPath: (snapshotFilePath, snapshotExtension) => snapshotFilePath.slice(0, -snapshotExtension.length),
    testPathForConsistencyCheck: "",
};
