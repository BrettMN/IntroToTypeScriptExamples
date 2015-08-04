
import paths = require('externalModules/Paths');
import extendedPaths = require('externalModules/PathsExtended');


var homePath = paths.getPath(1, 'home');
var homePath2 = extendedPaths.getPath(1, 'home', 'index');
var apiPath = extendedPaths.getApiPath(1, 'home');



import paths2 = require('externalModules/Paths2');
var homePath3 = paths2(1, 'home', 'index');