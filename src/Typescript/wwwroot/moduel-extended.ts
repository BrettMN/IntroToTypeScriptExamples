module Paths {

    //Api path
    export var getApiPath: GetPath;
    getApiPath = function (id: number, controller: string, action: string) {

        if (!controller) {
            controller = defaultController;
        }
        if (!action) {
            action = defaultAction;
        }

        return rootPath +'api/' + controller + '/' + action + '/' + id;
    }
}