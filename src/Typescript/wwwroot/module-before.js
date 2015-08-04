var rootPath = "www.wipdeveloper.com/", defaultController = "home", defaultAction = "index";
var getPath;
getPath = function (id, controller, action) {
    if (!controller) {
        controller = defaultController;
    }
    if (!action) {
        action = defaultAction;
    }
    return rootPath + controller + '/' + action + '/' + id;
};
