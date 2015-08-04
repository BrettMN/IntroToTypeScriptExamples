module Paths {
    var rootPath: string = "www.wipdeveloper.com/",
        defaultController = "home",
        defaultAction = "index";


    interface GetPath {
        (id: number, controller: string, action?: string): string
    }

    export var getPath: GetPath;
    getPath = function (id: number, controller: string, action: string) {

        if (!controller) {
            controller = defaultController;
        }
        if (!action) {
            action = defaultAction;
        }

        return rootPath + controller + '/' + action + '/' + id;
    }
}

Paths.getPath(1, 'home', 'index');