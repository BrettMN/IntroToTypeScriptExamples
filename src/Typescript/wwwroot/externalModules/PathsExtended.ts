import paths = require('externalModules/Paths');

export var getPath = paths.getPath;

export var getApiPath: GetPath;
getApiPath = function (id: number, controller: string, action: string) {

    if (!controller) {
        controller = defaultController;
    }
    if (!action) {
        action = defaultAction;
    }

    return rootPath + 'api/' + controller + '/' + action + '/' + id;
}