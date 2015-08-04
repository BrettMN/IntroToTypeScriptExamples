var paths = require('externalModules/Paths');
exports.getPath = paths.getPath;
exports.getApiPath;
exports.getApiPath = function (id, controller, action) {
    if (!controller) {
        controller = defaultController;
    }
    if (!action) {
        action = defaultAction;
    }
    return rootPath + 'api/' + controller + '/' + action + '/' + id;
};
//# sourceMappingURL=PathsExtended.js.map