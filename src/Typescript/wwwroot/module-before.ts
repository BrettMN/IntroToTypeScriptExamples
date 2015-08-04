var rootPath: string = "www.wipdeveloper.com/",
    defaultController = "home",
    defaultAction = "index";


interface GetPath {
    (id: number, controller: string, action?: string): string
}

var getPath: GetPath;
getPath = function (id: number, controller: string, action: string) {

    if (!controller) {
        controller = defaultController;
    }
    if (!action) {
        action = defaultAction;
    }

    return rootPath + controller + '/' + action + '/' + id;
}