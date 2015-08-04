var Paths;
(function (Paths) {
    //Api path
    Paths.getApiPath;
    Paths.getApiPath = function (id, controller, action) {
        if (!controller) {
            controller = defaultController;
        }
        if (!action) {
            action = defaultAction;
        }
        return rootPath + 'api/' + controller + '/' + action + '/' + id;
    };
})(Paths || (Paths = {}));
