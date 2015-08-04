var Paths;
(function (Paths) {
    var rootPath = "www.wipdeveloper.com/", defaultController = "home", defaultAction = "index";
    Paths.getPath;
    Paths.getPath = function (id, controller, action) {
        if (!controller) {
            controller = defaultController;
        }
        if (!action) {
            action = defaultAction;
        }
        return rootPath + controller + '/' + action + '/' + id;
    };
})(Paths || (Paths = {}));
Paths.getPath(1, 'home', 'index');
