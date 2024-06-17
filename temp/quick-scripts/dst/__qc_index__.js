
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/begin/prefab/settingpeople');
require('./assets/begin/script/begin');
require('./assets/game/prefab/ezidan');
require('./assets/game/prefab/mzidan');
require('./assets/game/scripts/enemy');
require('./assets/game/scripts/game');
require('./assets/game/scripts/myself');
require('./assets/tools/conststring');
require('./assets/tools/datanode');
require('./assets/tools/localStorageHelper');
require('./assets/tools/tianfu');
require('./assets/tools/tools');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();