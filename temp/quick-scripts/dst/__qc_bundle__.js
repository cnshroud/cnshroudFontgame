
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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/tools/localStorageHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57542QhOTdHL5HEnQ/OF7di', 'localStorageHelper');
// tools/localStorageHelper.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var localstorageHelper = /** @class */ (function (_super) {
    __extends(localstorageHelper, _super);
    function localstorageHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //这个类用将json数据保存到浏览器
    localstorageHelper.setbykv = function (key, value) {
        cc.sys.localStorage.setItem(key, value);
    };
    localstorageHelper.getvalue = function (key) {
        var a = cc.sys.localStorage.getItem(key);
        if (a != null && a != undefined) {
            return a;
        }
        else {
            return "";
        }
    };
    localstorageHelper.getkey = function () {
    };
    localstorageHelper.prototype.start = function () {
    };
    localstorageHelper = __decorate([
        ccclass
    ], localstorageHelper);
    return localstorageHelper;
}(cc.Component));
exports.default = localstorageHelper;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcdG9vbHNcXGxvY2FsU3RvcmFnZUhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnRCxzQ0FBWTtJQUE1RDs7SUF5QkEsQ0FBQztJQXhCRyxtQkFBbUI7SUFDWiwwQkFBTyxHQUFkLFVBQWUsR0FBRyxFQUFFLEtBQUs7UUFDckIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBQ00sMkJBQVEsR0FBZixVQUFnQixHQUFHO1FBQ2YsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksU0FBUyxFQUFFO1lBRTdCLE9BQU8sQ0FBQyxDQUFBO1NBQ1g7YUFBTTtZQUNILE9BQU8sRUFBRSxDQUFBO1NBQ1o7SUFFTCxDQUFDO0lBRU0seUJBQU0sR0FBYjtJQUVBLENBQUM7SUFFRCxrQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQXRCZ0Isa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0F5QnRDO0lBQUQseUJBQUM7Q0F6QkQsQUF5QkMsQ0F6QitDLEVBQUUsQ0FBQyxTQUFTLEdBeUIzRDtrQkF6Qm9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbG9jYWxzdG9yYWdlSGVscGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICAvL+i/meS4quexu+eUqOWwhmpzb27mlbDmja7kv53lrZjliLDmtY/op4jlmahcbiAgICBzdGF0aWMgc2V0YnlrdihrZXksIHZhbHVlKSB7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKVxuICAgIH1cbiAgICBzdGF0aWMgZ2V0dmFsdWUoa2V5KSB7XG4gICAgICAgIGxldCBhID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcbiAgICAgICAgaWYgKGEgIT0gbnVsbCAmJiBhICE9IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICByZXR1cm4gYVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc3RhdGljIGdldGtleSgpIHtcblxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb150ihMZFEcLnRiFRI11cP', 'game');
// game/scripts/game.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var conststring_1 = require("../../tools/conststring");
var datanode_1 = require("../../tools/datanode");
var localStorageHelper_1 = require("../../tools/localStorageHelper");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.people = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        // this.people.getComponent(cc.Label).string = datanode.showpeople()
        var userinfo = localStorageHelper_1.default.getvalue(conststring_1.default.USERINFO);
        //反序列号
        datanode_1.default.person = JSON.parse(userinfo);
        console.log(datanode_1.default.person);
        this.people.getComponent(cc.Label).string = datanode_1.default.showpeople();
    };
    NewClass.prototype.onbtnrehall = function () {
        cc.director.preloadScene("begin");
        cc.director.loadScene("begin");
    };
    NewClass.prototype.start = function () {
    };
    __decorate([
        property({
            displayName: " 属性",
            type: cc.Node,
        })
    ], NewClass.prototype, "people", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBa0Q7QUFDbEQsaURBQTRDO0FBQzVDLHFFQUFnRTtBQUcxRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWtDQztRQTVCRyxZQUFNLEdBQVksSUFBSSxDQUFDOztRQTJCdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUF6QkcseUJBQU0sR0FBTjtRQUNJLG9FQUFvRTtRQUdwRSxJQUFJLFFBQVEsR0FBRyw0QkFBa0IsQ0FBQyxRQUFRLENBQUMscUJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNoRSxNQUFNO1FBQ04sa0JBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxrQkFBUSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBRXJFLENBQUM7SUFFRCw4QkFBVyxHQUFYO1FBRUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDakMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUE7SUFFbEMsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBekJEO1FBSkMsUUFBUSxDQUFDO1lBQ04sV0FBVyxFQUFFLEtBQUs7WUFDbEIsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJO1NBQ2hCLENBQUM7NENBQ3FCO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWtDNUI7SUFBRCxlQUFDO0NBbENELEFBa0NDLENBbENxQyxFQUFFLENBQUMsU0FBUyxHQWtDakQ7a0JBbENvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnN0c3RyaW5nIGZyb20gXCIuLi8uLi90b29scy9jb25zdHN0cmluZ1wiO1xuaW1wb3J0IGRhdGFub2RlIGZyb20gXCIuLi8uLi90b29scy9kYXRhbm9kZVwiO1xuaW1wb3J0IGxvY2Fsc3RvcmFnZUhlbHBlciBmcm9tIFwiLi4vLi4vdG9vbHMvbG9jYWxTdG9yYWdlSGVscGVyXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIiDlsZ7mgKdcIixcbiAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICB9KVxuICAgIHBlb3BsZTogY2MuTm9kZSA9IG51bGw7XG5cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8gdGhpcy5wZW9wbGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBkYXRhbm9kZS5zaG93cGVvcGxlKClcblxuXG4gICAgICAgIGxldCB1c2VyaW5mbyA9IGxvY2Fsc3RvcmFnZUhlbHBlci5nZXR2YWx1ZShjb25zdHN0cmluZy5VU0VSSU5GTylcbiAgICAgICAgLy/lj43luo/liJflj7dcbiAgICAgICAgZGF0YW5vZGUucGVyc29uID0gSlNPTi5wYXJzZSh1c2VyaW5mbylcbiAgICAgICAgY29uc29sZS5sb2coZGF0YW5vZGUucGVyc29uKTtcblxuICAgICAgICB0aGlzLnBlb3BsZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGRhdGFub2RlLnNob3dwZW9wbGUoKVxuXG4gICAgfVxuXG4gICAgb25idG5yZWhhbGwoKSB7XG5cbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiYmVnaW5cIilcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiYmVnaW5cIilcblxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/begin/script/begin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97343u0vgZJG4s70RJiwYAz', 'begin');
// begin/script/begin.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.settingpeople = null;
        _this.startbtn = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onbtnstart = function () {
        var sp = cc.instantiate(this.settingpeople);
        this.node.addChild(sp);
    };
    NewClass.prototype.start = function () {
    };
    __decorate([
        property({
            displayName: "设置属性预制体",
            type: cc.Prefab
        })
    ], NewClass.prototype, "settingpeople", void 0);
    __decorate([
        property({
            displayName: "开始按钮",
            type: cc.Node
        })
    ], NewClass.prototype, "startbtn", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYmVnaW5cXHNjcmlwdFxcYmVnaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF5QkM7UUF0QkcsZUFBZTtRQUtmLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBS2hDLGNBQVEsR0FBWSxJQUFJLENBQUM7O1FBV3pCLGlCQUFpQjtJQUNyQixDQUFDO0lBVEcsNkJBQVUsR0FBVjtRQUNJLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFDRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQWREO1FBSkMsUUFBUSxDQUFDO1lBQ04sV0FBVyxFQUFFLFNBQVM7WUFDdEIsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNO1NBQ2xCLENBQUM7bURBQzhCO0lBS2hDO1FBSkMsUUFBUSxDQUFDO1lBQ04sV0FBVyxFQUFFLE1BQU07WUFDbkIsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJO1NBQ2hCLENBQUM7OENBQ3VCO0lBYlIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXlCNUI7SUFBRCxlQUFDO0NBekJELEFBeUJDLENBekJxQyxFQUFFLENBQUMsU0FBUyxHQXlCakQ7a0JBekJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuiuvue9ruWxnuaAp+mihOWItuS9k1wiLFxuICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICB9KVxuICAgIHNldHRpbmdwZW9wbGU6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5byA5aeL5oyJ6ZKuXCIsXG4gICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICB9KVxuICAgIHN0YXJ0YnRuOiBjYy5Ob2RlID0gbnVsbDtcblxuXG4gICAgb25idG5zdGFydCgpIHtcbiAgICAgICAgbGV0IHNwID0gY2MuaW5zdGFudGlhdGUodGhpcy5zZXR0aW5ncGVvcGxlKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHNwKVxuICAgIH1cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/begin/prefab/settingpeople.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '04e09u5U7dP1Yv8M7jWZxij', 'settingpeople');
// begin/prefab/settingpeople.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var conststring_1 = require("../../tools/conststring");
var datanode_1 = require("../../tools/datanode");
var localStorageHelper_1 = require("../../tools/localStorageHelper");
var tools_1 = require("../../tools/tools");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var settingpeople = /** @class */ (function (_super) {
    __extends(settingpeople, _super);
    function settingpeople() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.username = null;
        _this.shuxindian = 0;
        _this.usenode = null;
        _this.shengming = null;
        _this.gongji = null;
        _this.fashu = null;
        _this.fangyu = null;
        _this.tf1 = null;
        _this.tf2 = null;
        _this.tf3 = null;
        _this.tf4 = null;
        _this.c = 0;
        _this.b = 0;
        _this.tflist = datanode_1.default.tianfu; // 获取天赋列表
        return _this;
    }
    settingpeople.prototype.start = function () {
    };
    settingpeople.prototype.onLoad = function () {
        this.usenode.string = this.shuxindian.toString();
        // console.log(this.usenode.string);
        this.c = this.shuxindian;
        this.suijitianfu();
        cc.director.preloadScene("game");
    };
    //属性修改按钮
    settingpeople.prototype.onaddsmbtn = function () {
        if (parseInt(this.shengming.string) + tools_1.default.labeltonum(this.gongji) + tools_1.default.labeltonum(this.fashu) + tools_1.default.labeltonum(this.fangyu) < this.c) {
            var a = tools_1.default.labeltonum(this.shengming) + 1;
            this.shengming.string = a.toString();
            this.shuxindian = this.shuxindian - 1;
            // console.log(this.shuxindian);
            this.usenode.string = this.shuxindian.toString();
            // console.log(this.usenode.string);
        }
    };
    settingpeople.prototype.ondelsmbtn = function () {
        if (tools_1.default.labeltonum(this.shengming) > 0) {
            var a = tools_1.default.labeltonum(this.shengming) - 1;
            this.shengming.string = a.toString();
            this.shuxindian = this.shuxindian + 1;
            // console.log(this.shuxindian);
            this.usenode.string = this.shuxindian.toString();
        }
    };
    settingpeople.prototype.onaddgjbtn = function () {
        if (parseInt(this.shengming.string) + tools_1.default.labeltonum(this.gongji) + tools_1.default.labeltonum(this.fashu) + tools_1.default.labeltonum(this.fangyu) < this.c) {
            var a = tools_1.default.labeltonum(this.gongji) + 1;
            this.gongji.string = a.toString();
            this.shuxindian = this.shuxindian - 1;
            this.usenode.string = this.shuxindian.toString();
        }
    };
    settingpeople.prototype.ondelgjbtn = function () {
        if (tools_1.default.labeltonum(this.gongji) > 0) {
            var a = tools_1.default.labeltonum(this.gongji) - 1;
            this.gongji.string = a.toString();
            this.shuxindian = this.shuxindian + 1;
            this.usenode.string = this.shuxindian.toString();
        }
    };
    settingpeople.prototype.onaddfsbtn = function () {
        if (parseInt(this.shengming.string) + tools_1.default.labeltonum(this.gongji) + tools_1.default.labeltonum(this.fashu) + tools_1.default.labeltonum(this.fangyu) < this.c) {
            var a = tools_1.default.labeltonum(this.fashu) + 1;
            this.fashu.string = a.toString();
            this.shuxindian = this.shuxindian - 1;
            this.usenode.string = this.shuxindian.toString();
        }
    };
    settingpeople.prototype.ondelfsbtn = function () {
        if (tools_1.default.labeltonum(this.fashu) > 0) {
            var a = tools_1.default.labeltonum(this.fashu) - 1;
            this.fashu.string = a.toString();
            this.shuxindian = this.shuxindian + 1;
            this.usenode.string = this.shuxindian.toString();
        }
    };
    settingpeople.prototype.onaddfybtn = function () {
        if (parseInt(this.shengming.string) + tools_1.default.labeltonum(this.gongji) + tools_1.default.labeltonum(this.fashu) + tools_1.default.labeltonum(this.fangyu) < this.c) {
            var a = tools_1.default.labeltonum(this.fangyu) + 1;
            this.fangyu.string = a.toString(); //防御文本数字修改
            this.shuxindian = this.shuxindian - 1;
            this.usenode.string = this.shuxindian.toString(); //可用属性点数字修改
        }
    };
    settingpeople.prototype.ondelfybtn = function () {
        if (tools_1.default.labeltonum(this.fangyu) > 0) {
            var a = tools_1.default.labeltonum(this.fangyu) - 1;
            this.fangyu.string = a.toString(); //防御文本数字修改
            this.shuxindian = this.shuxindian = 1;
            this.usenode.string = this.shuxindian.toString(); //可用属性点数字修改
        }
    };
    settingpeople.prototype.onbtnold = function () {
        console.log(cc.sys.localStorage.getItem(conststring_1.default.USERINFO));
        cc.director.loadScene("game");
    };
    settingpeople.prototype.onbtnnew = function () {
        if (this.username.getComponent(cc.EditBox).string && this.username.getComponent(cc.EditBox).string != null) {
            // console.log(this.username.getComponent(cc.EditBox).string);
            // console.log('111');
            datanode_1.default.person.username = this.username.getComponent(cc.EditBox).string;
        }
        else {
            datanode_1.default.person.username = "张三";
        }
        datanode_1.default.person.gongji = tools_1.default.labeltonum(this.gongji);
        datanode_1.default.person.shengming = tools_1.default.labeltonum(this.shengming);
        datanode_1.default.person.fangyu = tools_1.default.labeltonum(this.fangyu);
        datanode_1.default.person.fashu = tools_1.default.labeltonum(this.fashu);
        datanode_1.default.person.gongsu = 1.00;
        datanode_1.default.showpeople();
        this.suijitianfu();
        //把datanode对象转化为字符串，序列化
        var json = JSON.stringify(datanode_1.default.person);
        //调用保存方法
        localStorageHelper_1.default.setbykv(conststring_1.default.USERINFO, json);
        console.log(localStorageHelper_1.default.getvalue(conststring_1.default.USERINFO));
        // console.log(tools.labeltonum(this.gongji));
        cc.director.loadScene("game");
    };
    settingpeople.prototype.onbtnpjb = function () {
        datanode_1.default.person.username = this.username.getComponent(cc.EditBox).string;
        // datanode.person.level = 100
        datanode_1.default.person.gongji = 10000;
        datanode_1.default.person.shengming = 10000;
        datanode_1.default.person.fangyu = 10000;
        datanode_1.default.person.fashu = 10000;
        datanode_1.default.showpeople();
        // console.log(tools.labeltonum(this.gongji));
        cc.director.loadScene("game");
    };
    settingpeople.prototype.onbtnclose = function () {
        this.node.active = false;
    };
    settingpeople.prototype.suijitianfu = function () {
        var tfnum = datanode_1.default.tianfu.length;
        // console.log(tfnum);
        var tffontlist = [
            this.tf1, this.tf2, this.tf3, this.tf4
        ];
        for (var i = 0; i < tffontlist.length; i++) {
            //随机天赋
            var b = Math.floor(Math.random() * tfnum);
            // console.log(b);
            //获取天赋文本
            tffontlist[i].getComponent(cc.Label).string = this.tflist[b][0];
            // console.log(this.tflist[b][2]);
            //调用方法增加天赋数值
            datanode_1.default.addtf(this.tflist[b][1], this.tflist[b][2]);
        }
    };
    __decorate([
        property({
            displayName: " 名字",
            type: cc.Node,
        })
    ], settingpeople.prototype, "username", void 0);
    __decorate([
        property({
            displayName: " 属性点",
            type: cc.Integer,
        })
    ], settingpeople.prototype, "shuxindian", void 0);
    __decorate([
        property({
            displayName: " 可用属性点",
            type: cc.Label,
        })
    ], settingpeople.prototype, "usenode", void 0);
    __decorate([
        property({
            displayName: " 生命",
            type: cc.Label,
        })
    ], settingpeople.prototype, "shengming", void 0);
    __decorate([
        property({
            displayName: " 攻击",
            type: cc.Label,
        })
    ], settingpeople.prototype, "gongji", void 0);
    __decorate([
        property({
            displayName: " 法术",
            type: cc.Label,
        })
    ], settingpeople.prototype, "fashu", void 0);
    __decorate([
        property({
            displayName: " 防御",
            type: cc.Label,
        })
    ], settingpeople.prototype, "fangyu", void 0);
    __decorate([
        property({
            displayName: " 天赋1",
            type: cc.Node,
        })
    ], settingpeople.prototype, "tf1", void 0);
    __decorate([
        property({
            displayName: " 天赋2",
            type: cc.Node,
        })
    ], settingpeople.prototype, "tf2", void 0);
    __decorate([
        property({
            displayName: " 天赋3",
            type: cc.Node,
        })
    ], settingpeople.prototype, "tf3", void 0);
    __decorate([
        property({
            displayName: " 天赋4",
            type: cc.Node,
        })
    ], settingpeople.prototype, "tf4", void 0);
    settingpeople = __decorate([
        ccclass
    ], settingpeople);
    return settingpeople;
}(cc.Component));
exports.default = settingpeople;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYmVnaW5cXHByZWZhYlxcc2V0dGluZ3Blb3BsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBa0Q7QUFDbEQsaURBQTRDO0FBQzVDLHFFQUFnRTtBQUVoRSwyQ0FBc0M7QUFFaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUFnUkM7UUExUUcsY0FBUSxHQUFZLElBQUksQ0FBQztRQUt6QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQU12QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBTXpCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFNM0IsWUFBTSxHQUFhLElBQUksQ0FBQztRQU14QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBTXZCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFNeEIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUtwQixTQUFHLEdBQVksSUFBSSxDQUFDO1FBS3BCLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFLcEIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixPQUFDLEdBQVcsQ0FBQyxDQUFDO1FBQ2QsT0FBQyxHQUFXLENBQUMsQ0FBQztRQUVkLFlBQU0sR0FBRyxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFHLFNBQVM7O0lBNk16QyxDQUFDO0lBNU1HLDZCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDaEQsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQTtRQUV4QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDbEIsRUFBRSxDQUFDLFFB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cG9ydCBjb25zdHN0cmluZyBmcm9tIFwiLi4vLi4vdG9vbHMvY29uc3RzdHJpbmdcIjtcbmltcG9ydCBkYXRhbm9kZSBmcm9tIFwiLi4vLi4vdG9vbHMvZGF0YW5vZGVcIjtcbmltcG9ydCBsb2NhbHN0b3JhZ2VIZWxwZXIgZnJvbSBcIi4uLy4uL3Rvb2xzL2xvY2FsU3RvcmFnZUhlbHBlclwiO1xuXG5pbXBvcnQgdG9vbHMgZnJvbSBcIi4uLy4uL3Rvb2xzL3Rvb2xzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzZXR0aW5ncGVvcGxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIiDlkI3lrZdcIixcbiAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICB9KVxuICAgIHVzZXJuYW1lOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCIg5bGe5oCn54K5XCIsXG4gICAgICAgIHR5cGU6IGNjLkludGVnZXIsXG4gICAgfSlcbiAgICBzaHV4aW5kaWFuOiBudW1iZXIgPSAwO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiIOWPr+eUqOWxnuaAp+eCuVwiLFxuICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICB9KVxuICAgIHVzZW5vZGU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIiDnlJ/lkb1cIixcbiAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgfSlcbiAgICBzaGVuZ21pbmc6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIiDmlLvlh7tcIixcbiAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgfSlcbiAgICBnb25namk6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIiDms5XmnK9cIixcbiAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgfSlcbiAgICBmYXNodTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiIOmYsuW+oVwiLFxuICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICB9KVxuICAgIGZhbmd5dTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiIOWkqei1izFcIixcbiAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICB9KVxuICAgIHRmMTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiIOWkqei1izJcIixcbiAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICB9KVxuICAgIHRmMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiIOWkqei1izNcIixcbiAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICB9KVxuICAgIHRmMzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiIOWkqei1izRcIixcbiAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICB9KVxuICAgIHRmNDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBjOiBudW1iZXIgPSAwO1xuICAgIGI6IG51bWJlciA9IDA7XG5cbiAgICB0Zmxpc3QgPSBkYXRhbm9kZS50aWFuZnU7ICAgLy8g6I635Y+W5aSp6LWL5YiX6KGoXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG5cbiAgICAgICAgdGhpcy51c2Vub2RlLnN0cmluZyA9IHRoaXMuc2h1eGluZGlhbi50b1N0cmluZygpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudXNlbm9kZS5zdHJpbmcpO1xuICAgICAgICB0aGlzLmMgPSB0aGlzLnNodXhpbmRpYW5cblxuICAgICAgICB0aGlzLnN1aWppdGlhbmZ1KClcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiZ2FtZVwiKVxuXG4gICAgfVxuXG4gICAgLy/lsZ7mgKfkv67mlLnmjInpkq5cbiAgICBvbmFkZHNtYnRuKCkge1xuXG5cbiAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMuc2hlbmdtaW5nLnN0cmluZykgKyB0b29scy5sYWJlbHRvbnVtKHRoaXMuZ29uZ2ppKSArIHRvb2xzLmxhYmVsdG9udW0odGhpcy5mYXNodSkgKyB0b29scy5sYWJlbHRvbnVtKHRoaXMuZmFuZ3l1KSA8IHRoaXMuYykge1xuXG5cbiAgICAgICAgICAgIGxldCBhID0gdG9vbHMubGFiZWx0b251bSh0aGlzLnNoZW5nbWluZykgKyAxXG4gICAgICAgICAgICB0aGlzLnNoZW5nbWluZy5zdHJpbmcgPSBhLnRvU3RyaW5nKClcbiAgICAgICAgICAgIHRoaXMuc2h1eGluZGlhbiA9IHRoaXMuc2h1eGluZGlhbiAtIDFcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2h1eGluZGlhbik7XG5cbiAgICAgICAgICAgIHRoaXMudXNlbm9kZS5zdHJpbmcgPSB0aGlzLnNodXhpbmRpYW4udG9TdHJpbmcoKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy51c2Vub2RlLnN0cmluZyk7XG5cblxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgb25kZWxzbWJ0bigpIHtcbiAgICAgICAgaWYgKHRvb2xzLmxhYmVsdG9udW0odGhpcy5zaGVuZ21pbmcpID4gMCkge1xuXG5cbiAgICAgICAgICAgIGxldCBhID0gdG9vbHMubGFiZWx0b251bSh0aGlzLnNoZW5nbWluZykgLSAxXG4gICAgICAgICAgICB0aGlzLnNoZW5nbWluZy5zdHJpbmcgPSBhLnRvU3RyaW5nKClcbiAgICAgICAgICAgIHRoaXMuc2h1eGluZGlhbiA9IHRoaXMuc2h1eGluZGlhbiArIDFcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2h1eGluZGlhbik7XG5cbiAgICAgICAgICAgIHRoaXMudXNlbm9kZS5zdHJpbmcgPSB0aGlzLnNodXhpbmRpYW4udG9TdHJpbmcoKVxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgb25hZGRnamJ0bigpIHtcblxuXG4gICAgICAgIGlmIChwYXJzZUludCh0aGlzLnNoZW5nbWluZy5zdHJpbmcpICsgdG9vbHMubGFiZWx0b251bSh0aGlzLmdvbmdqaSkgKyB0b29scy5sYWJlbHRvbnVtKHRoaXMuZmFzaHUpICsgdG9vbHMubGFiZWx0b251bSh0aGlzLmZhbmd5dSkgPCB0aGlzLmMpIHtcblxuICAgICAgICAgICAgbGV0IGEgPSB0b29scy5sYWJlbHRvbnVtKHRoaXMuZ29uZ2ppKSArIDFcbiAgICAgICAgICAgIHRoaXMuZ29uZ2ppLnN0cmluZyA9IGEudG9TdHJpbmcoKVxuICAgICAgICAgICAgdGhpcy5zaHV4aW5kaWFuID0gdGhpcy5zaHV4aW5kaWFuIC0gMVxuICAgICAgICAgICAgdGhpcy51c2Vub2RlLnN0cmluZyA9IHRoaXMuc2h1eGluZGlhbi50b1N0cmluZygpXG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBvbmRlbGdqYnRuKCkge1xuICAgICAgICBpZiAodG9vbHMubGFiZWx0b251bSh0aGlzLmdvbmdqaSkgPiAwKSB7XG5cblxuICAgICAgICAgICAgbGV0IGEgPSB0b29scy5sYWJlbHRvbnVtKHRoaXMuZ29uZ2ppKSAtIDFcbiAgICAgICAgICAgIHRoaXMuZ29uZ2ppLnN0cmluZyA9IGEudG9TdHJpbmcoKVxuICAgICAgICAgICAgdGhpcy5zaHV4aW5kaWFuID0gdGhpcy5zaHV4aW5kaWFuICsgMVxuICAgICAgICAgICAgdGhpcy51c2Vub2RlLnN0cmluZyA9IHRoaXMuc2h1eGluZGlhbi50b1N0cmluZygpXG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBvbmFkZGZzYnRuKCkge1xuXG5cbiAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMuc2hlbmdtaW5nLnN0cmluZykgKyB0b29scy5sYWJlbHRvbnVtKHRoaXMuZ29uZ2ppKSArIHRvb2xzLmxhYmVsdG9udW0odGhpcy5mYXNodSkgKyB0b29scy5sYWJlbHRvbnVtKHRoaXMuZmFuZ3l1KSA8IHRoaXMuYykge1xuXG5cbiAgICAgICAgICAgIGxldCBhID0gdG9vbHMubGFiZWx0b251bSh0aGlzLmZhc2h1KSArIDFcbiAgICAgICAgICAgIHRoaXMuZmFzaHUuc3RyaW5nID0gYS50b1N0cmluZygpXG4gICAgICAgICAgICB0aGlzLnNodXhpbmRpYW4gPSB0aGlzLnNodXhpbmRpYW4gLSAxXG4gICAgICAgICAgICB0aGlzLnVzZW5vZGUuc3RyaW5nID0gdGhpcy5zaHV4aW5kaWFuLnRvU3RyaW5nKClcblxuICAgICAgICB9XG4gICAgfVxuICAgIG9uZGVsZnNidG4oKSB7XG4gICAgICAgIGlmICh0b29scy5sYWJlbHRvbnVtKHRoaXMuZmFzaHUpID4gMCkge1xuXG5cbiAgICAgICAgICAgIGxldCBhID0gdG9vbHMubGFiZWx0b251bSh0aGlzLmZhc2h1KSAtIDFcbiAgICAgICAgICAgIHRoaXMuZmFzaHUuc3RyaW5nID0gYS50b1N0cmluZygpXG4gICAgICAgICAgICB0aGlzLnNodXhpbmRpYW4gPSB0aGlzLnNodXhpbmRpYW4gKyAxXG4gICAgICAgICAgICB0aGlzLnVzZW5vZGUuc3RyaW5nID0gdGhpcy5zaHV4aW5kaWFuLnRvU3RyaW5nKClcblxuICAgICAgICB9XG4gICAgfVxuICAgIG9uYWRkZnlidG4oKSB7XG5cblxuICAgICAgICBpZiAocGFyc2VJbnQodGhpcy5zaGVuZ21pbmcuc3RyaW5nKSArIHRvb2xzLmxhYmVsdG9udW0odGhpcy5nb25namkpICsgdG9vbHMubGFiZWx0b251bSh0aGlzLmZhc2h1KSArIHRvb2xzLmxhYmVsdG9udW0odGhpcy5mYW5neXUpIDwgdGhpcy5jKSB7XG5cblxuICAgICAgICAgICAgbGV0IGEgPSB0b29scy5sYWJlbHRvbnVtKHRoaXMuZmFuZ3l1KSArIDFcbiAgICAgICAgICAgIHRoaXMuZmFuZ3l1LnN0cmluZyA9IGEudG9TdHJpbmcoKSAgICAgICAgICAgLy/pmLLlvqHmlofmnKzmlbDlrZfkv67mlLlcbiAgICAgICAgICAgIHRoaXMuc2h1eGluZGlhbiA9IHRoaXMuc2h1eGluZGlhbiAtIDFcbiAgICAgICAgICAgIHRoaXMudXNlbm9kZS5zdHJpbmcgPSB0aGlzLnNodXhpbmRpYW4udG9TdHJpbmcoKSAgICAvL+WPr+eUqOWxnuaAp+eCueaVsOWtl+S/ruaUuVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbmRlbGZ5YnRuKCkge1xuICAgICAgICBpZiAodG9vbHMubGFiZWx0b251bSh0aGlzLmZhbmd5dSkgPiAwKSB7XG5cblxuICAgICAgICAgICAgbGV0IGEgPSB0b29scy5sYWJlbHRvbnVtKHRoaXMuZmFuZ3l1KSAtIDFcbiAgICAgICAgICAgIHRoaXMuZmFuZ3l1LnN0cmluZyA9IGEudG9TdHJpbmcoKSAgICAgICAgICAgLy/pmLLlvqHmlofmnKzmlbDlrZfkv67mlLlcbiAgICAgICAgICAgIHRoaXMuc2h1eGluZGlhbiA9IHRoaXMuc2h1eGluZGlhbiA9IDFcbiAgICAgICAgICAgIHRoaXMudXNlbm9kZS5zdHJpbmcgPSB0aGlzLnNodXhpbmRpYW4udG9TdHJpbmcoKSAgICAvL+WPr+eUqOWxnuaAp+eCueaVsOWtl+S/ruaUuVxuXG5cbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBvbmJ0bm9sZCgpIHsgICAgLy/kuIrlsYDlsZ7mgKdcblxuICAgICAgICBjb25zb2xlLmxvZyhjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oY29uc3RzdHJpbmcuVVNFUklORk8pKTtcblxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpXG5cblxuICAgIH1cbiAgICBvbmJ0bm5ldygpIHsgICAgLy/mlrDlsZ7mgKfmjInpkq5cbiAgICAgICAgaWYgKHRoaXMudXNlcm5hbWUuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZyAmJiB0aGlzLnVzZXJuYW1lLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy51c2VybmFtZS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCcxMTEnKTtcblxuICAgICAgICAgICAgZGF0YW5vZGUucGVyc29uLnVzZXJuYW1lID0gdGhpcy51c2VybmFtZS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhbm9kZS5wZXJzb24udXNlcm5hbWUgPSBcIuW8oOS4iVwiXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhbm9kZS5wZXJzb24uZ29uZ2ppID0gdG9vbHMubGFiZWx0b251bSh0aGlzLmdvbmdqaSlcbiAgICAgICAgZGF0YW5vZGUucGVyc29uLnNoZW5nbWluZyA9IHRvb2xzLmxhYmVsdG9udW0odGhpcy5zaGVuZ21pbmcpXG4gICAgICAgIGRhdGFub2RlLnBlcnNvbi5mYW5neXUgPSB0b29scy5sYWJlbHRvbnVtKHRoaXMuZmFuZ3l1KVxuICAgICAgICBkYXRhbm9kZS5wZXJzb24uZmFzaHUgPSB0b29scy5sYWJlbHRvbnVtKHRoaXMuZmFzaHUpXG4gICAgICAgIGRhdGFub2RlLnBlcnNvbi5nb25nc3UgPSAxLjAwXG5cbiAgICAgICAgZGF0YW5vZGUuc2hvd3Blb3BsZSgpXG4gICAgICAgIHRoaXMuc3Vpaml0aWFuZnUoKVxuXG4gICAgICAgIC8v5oqKZGF0YW5vZGXlr7nosaHovazljJbkuLrlrZfnrKbkuLLvvIzluo/liJfljJZcblxuICAgICAgICBsZXQganNvbiA9IEpTT04uc3RyaW5naWZ5KGRhdGFub2RlLnBlcnNvbilcbiAgICAgICAgLy/osIPnlKjkv53lrZjmlrnms5VcbiAgICAgICAgbG9jYWxzdG9yYWdlSGVscGVyLnNldGJ5a3YoY29uc3RzdHJpbmcuVVNFUklORk8sIGpzb24pXG5cbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxzdG9yYWdlSGVscGVyLmdldHZhbHVlKGNvbnN0c3RyaW5nLlVTRVJJTkZPKSk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codG9vbHMubGFiZWx0b251bSh0aGlzLmdvbmdqaSkpO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpXG5cbiAgICB9XG5cbiAgICBvbmJ0bnBqYigpIHsgICAgLy/noLTop6PniYhcbiAgICAgICAgZGF0YW5vZGUucGVyc29uLnVzZXJuYW1lID0gdGhpcy51c2VybmFtZS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nXG4gICAgICAgIC8vIGRhdGFub2RlLnBlcnNvbi5sZXZlbCA9IDEwMFxuICAgICAgICBkYXRhbm9kZS5wZXJzb24uZ29uZ2ppID0gMTAwMDBcbiAgICAgICAgZGF0YW5vZGUucGVyc29uLnNoZW5nbWluZyA9IDEwMDAwXG4gICAgICAgIGRhdGFub2RlLnBlcnNvbi5mYW5neXUgPSAxMDAwMFxuICAgICAgICBkYXRhbm9kZS5wZXJzb24uZmFzaHUgPSAxMDAwMFxuXG4gICAgICAgIGRhdGFub2RlLnNob3dwZW9wbGUoKVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRvb2xzLmxhYmVsdG9udW0odGhpcy5nb25namkpKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKVxuICAgIH1cblxuICAgIG9uYnRuY2xvc2UoKSB7ICAgIC8v5YWz6Zet5oyJ6ZKuXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxuICAgIH1cblxuXG4gICAgc3Vpaml0aWFuZnUoKSB7IC8v6ZqP5py65aSp6LWLXG4gICAgICAgIGxldCB0Zm51bTogbnVtYmVyID0gZGF0YW5vZGUudGlhbmZ1Lmxlbmd0aFxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0Zm51bSk7XG5cbiAgICAgICAgbGV0IHRmZm9udGxpc3QgPSBbXG4gICAgICAgICAgICB0aGlzLnRmMSwgdGhpcy50ZjIsIHRoaXMudGYzLCB0aGlzLnRmNFxuICAgICAgICBdXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGZmb250bGlzdC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAvL+maj+acuuWkqei1i1xuICAgICAgICAgICAgbGV0IGIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0Zm51bSlcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGIpO1xuICAgICAgICAgICAgLy/ojrflj5blpKnotYvmlofmnKxcbiAgICAgICAgICAgIHRmZm9udGxpc3RbaV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnRmbGlzdFtiXVswXVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy50Zmxpc3RbYl1bMl0pO1xuICAgICAgICAgICAgLy/osIPnlKjmlrnms5Xlop7liqDlpKnotYvmlbDlgLxcbiAgICAgICAgICAgIGRhdGFub2RlLmFkZHRmKHRoaXMudGZsaXN0W2JdWzFdLCB0aGlzLnRmbGlzdFtiXVsyXSlcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/prefab/ezidan.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a70bcv2r6VLSa5w43y8AGEQ', 'ezidan');
// game/prefab/ezidan.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var mzidan = /** @class */ (function (_super) {
    __extends(mzidan, _super);
    function mzidan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // srcHeight: number = 640;
        _this.speed = 100;
        return _this;
    }
    mzidan.prototype.start = function () {
        cc.director.getCollisionManager().enabled = true;
    };
    mzidan.prototype.update = function (dt) {
        // console.log("画布高度：" + this.srcHeight);
        this.node.y -= this.speed * dt;
        // console.log();
        // //超过画布直接销毁
        // if (this.node.y < -this.srcHeight) {
        //     this.node.removeFromParent(true)    //删除节点
        //     this.destroy()      //销毁
        //     console.log("已被销毁");
        // }
    };
    //碰撞事件,产生碰撞调用一次
    mzidan.prototype.onCollisionEnteron = function (other) {
        if (other.tag == 1) {
            console.log("碰到障碍物");
            this.node.removeFromParent(true); //删除节点
            this.destroy(); //销毁
        }
    };
    mzidan = __decorate([
        ccclass
    ], mzidan);
    return mzidan;
}(cc.Component));
exports.default = mzidan;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxccHJlZmFiXFxlemlkYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFrQ0M7UUFoQ0csMkJBQTJCO1FBQzNCLFdBQUssR0FBVyxHQUFHLENBQUE7O0lBK0J2QixDQUFDO0lBN0JHLHNCQUFLLEdBQUw7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyRCxDQUFDO0lBRUQsdUJBQU0sR0FBTixVQUFPLEVBQVU7UUFDYix5Q0FBeUM7UUFFekMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUE7UUFDOUIsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYix1Q0FBdUM7UUFDdkMsaURBQWlEO1FBQ2pELCtCQUErQjtRQUMvQiwyQkFBMkI7UUFFM0IsSUFBSTtJQUtSLENBQUM7SUFDRCxlQUFlO0lBQ2YsbUNBQWtCLEdBQWxCLFVBQW1CLEtBQUs7UUFDcEIsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBSSxNQUFNO1lBQzFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQSxDQUFNLElBQUk7U0FDM0I7SUFDTCxDQUFDO0lBakNnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBa0MxQjtJQUFELGFBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQ21DLEVBQUUsQ0FBQyxTQUFTLEdBa0MvQztrQkFsQ29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG16aWRhbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvLyBzcmNIZWlnaHQ6IG51bWJlciA9IDY0MDtcbiAgICBzcGVlZDogbnVtYmVyID0gMTAwXG5cbiAgICBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi55S75biD6auY5bqm77yaXCIgKyB0aGlzLnNyY0hlaWdodCk7XG5cbiAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5zcGVlZCAqIGR0XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCk7XG4gICAgICAgIC8vIC8v6LaF6L+H55S75biD55u05o6l6ZSA5q+BXG4gICAgICAgIC8vIGlmICh0aGlzLm5vZGUueSA8IC10aGlzLnNyY0hlaWdodCkge1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSkgICAgLy/liKDpmaToioLngrlcbiAgICAgICAgLy8gICAgIHRoaXMuZGVzdHJveSgpICAgICAgLy/plIDmr4FcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwi5bey6KKr6ZSA5q+BXCIpO1xuXG4gICAgICAgIC8vIH1cblxuXG5cblxuICAgIH1cbiAgICAvL+eisOaSnuS6i+S7tizkuqfnlJ/norDmkp7osIPnlKjkuIDmrKFcbiAgICBvbkNvbGxpc2lvbkVudGVyb24ob3RoZXIpIHtcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIueisOWIsOmanOeijeeJqVwiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KHRydWUpICAgIC8v5Yig6Zmk6IqC54K5XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKSAgICAgIC8v6ZSA5q+BXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/tools/tianfu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4a481zRh+9JUqZEdOmOWAms', 'tianfu');
// tools/tianfu.ts

// import datanode from "./datanode";
// const { ccclass, property } = cc._decorator;
// @ccclass
// export default class Tianfu extends cc.Component {
//     /** 
//      * 生命：0
//      * 防御：1
//      * 攻击：2
//      * 法术：3
//      */
//     //天赋描述，增加属性，增加多少
//     static tianfu: any[][] = [
//         ["生命+5", 0, 5],
//         ["防御+3", 1, 3],
//         ["攻击+3", 2, 3],
//         ["法术+3", 3, 3],
//     ]
//     static addtf(a: number, b: number) {    //根据数组的
//         switch (a) {
//             case 0:
//                 datanode.shengming = datanode.shengming + b
//                 console.log(datanode.shengming);
//                 break;
//             case 1:
//                 datanode.fangyu = datanode.fangyu + b
//                 console.log(datanode.fangyu);
//                 break;
//             case 2:
//                 datanode.gongji = datanode.gongji + b
//                 console.log(datanode.gongji);
//                 break;
//             case 3:
//                 datanode.fashu = datanode.fashu + b
//                 console.log(datanode.fashu);
//                 break;
//         }
//     }
//     start() {
//     }
//     // update (dt) {}
// }

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcdG9vbHNcXHRpYW5mdS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBcUM7QUFHckMsK0NBQStDO0FBRS9DLFdBQVc7QUFDWCxxREFBcUQ7QUFDckQsV0FBVztBQUNYLGNBQWM7QUFDZCxjQUFjO0FBQ2QsY0FBYztBQUNkLGNBQWM7QUFDZCxVQUFVO0FBQ1YsdUJBQXVCO0FBQ3ZCLGlDQUFpQztBQUNqQywwQkFBMEI7QUFDMUIsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQiwwQkFBMEI7QUFLMUIsUUFBUTtBQUVSLHNEQUFzRDtBQUN0RCx1QkFBdUI7QUFDdkIsc0JBQXNCO0FBQ3RCLDhEQUE4RDtBQUM5RCxtREFBbUQ7QUFFbkQseUJBQXlCO0FBQ3pCLHNCQUFzQjtBQUN0Qix3REFBd0Q7QUFDeEQsZ0RBQWdEO0FBRWhELHlCQUF5QjtBQUN6QixzQkFBc0I7QUFDdEIsd0RBQXdEO0FBQ3hELGdEQUFnRDtBQUVoRCx5QkFBeUI7QUFDekIsc0JBQXNCO0FBQ3RCLHNEQUFzRDtBQUN0RCwrQ0FBK0M7QUFFL0MseUJBQXlCO0FBSXpCLFlBQVk7QUFDWixRQUFRO0FBRVIsZ0JBQWdCO0FBRWhCLFFBQVE7QUFFUix3QkFBd0I7QUFDeEIsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBkYXRhbm9kZSBmcm9tIFwiLi9kYXRhbm9kZVwiO1xuXG5cbi8vIGNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8vIEBjY2NsYXNzXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBUaWFuZnUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuLy8gICAgIC8qKiBcbi8vICAgICAgKiDnlJ/lkb3vvJowXG4vLyAgICAgICog6Ziy5b6h77yaMVxuLy8gICAgICAqIOaUu+WHu++8mjJcbi8vICAgICAgKiDms5XmnK/vvJozXG4vLyAgICAgICovXG4vLyAgICAgLy/lpKnotYvmj4/ov7DvvIzlop7liqDlsZ7mgKfvvIzlop7liqDlpJrlsJFcbi8vICAgICBzdGF0aWMgdGlhbmZ1OiBhbnlbXVtdID0gW1xuLy8gICAgICAgICBbXCLnlJ/lkb0rNVwiLCAwLCA1XSxcbi8vICAgICAgICAgW1wi6Ziy5b6hKzNcIiwgMSwgM10sXG4vLyAgICAgICAgIFtcIuaUu+WHuyszXCIsIDIsIDNdLFxuLy8gICAgICAgICBbXCLms5XmnK8rM1wiLCAzLCAzXSxcblxuXG5cblxuLy8gICAgIF1cblxuLy8gICAgIHN0YXRpYyBhZGR0ZihhOiBudW1iZXIsIGI6IG51bWJlcikgeyAgICAvL+agueaNruaVsOe7hOeahFxuLy8gICAgICAgICBzd2l0Y2ggKGEpIHtcbi8vICAgICAgICAgICAgIGNhc2UgMDpcbi8vICAgICAgICAgICAgICAgICBkYXRhbm9kZS5zaGVuZ21pbmcgPSBkYXRhbm9kZS5zaGVuZ21pbmcgKyBiXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YW5vZGUuc2hlbmdtaW5nKTtcblxuLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICAgY2FzZSAxOlxuLy8gICAgICAgICAgICAgICAgIGRhdGFub2RlLmZhbmd5dSA9IGRhdGFub2RlLmZhbmd5dSArIGJcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhbm9kZS5mYW5neXUpO1xuXG4vLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICBjYXNlIDI6XG4vLyAgICAgICAgICAgICAgICAgZGF0YW5vZGUuZ29uZ2ppID0gZGF0YW5vZGUuZ29uZ2ppICsgYlxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFub2RlLmdvbmdqaSk7XG5cbi8vICAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgIGNhc2UgMzpcbi8vICAgICAgICAgICAgICAgICBkYXRhbm9kZS5mYXNodSA9IGRhdGFub2RlLmZhc2h1ICsgYlxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFub2RlLmZhc2h1KTtcblxuLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xuXG5cblxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgc3RhcnQoKSB7XG5cbi8vICAgICB9XG5cbi8vICAgICAvLyB1cGRhdGUgKGR0KSB7fVxuLy8gfVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/tools/tools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4201fxKxeZMR5ZMSK649exq', 'tools');
// tools/tools.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tools = /** @class */ (function () {
    function tools() {
    }
    tools.numtolabel = function (a, b) {
        b.string = a + "";
    };
    tools.labeltonum = function (b) {
        var a = parseInt(b.string);
        return a;
    };
    tools.prototype.start = function () {
    };
    return tools;
}());
exports.default = tools;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcdG9vbHNcXHRvb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7SUFBQTtJQWdCQSxDQUFDO0lBYlUsZ0JBQVUsR0FBakIsVUFBa0IsQ0FBUyxFQUFFLENBQVc7UUFDcEMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFDTSxnQkFBVSxHQUFqQixVQUFrQixDQUFXO1FBQ3pCLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDMUIsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQscUJBQUssR0FBTDtJQUVBLENBQUM7SUFHTCxZQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRvb2xzIHtcblxuXG4gICAgc3RhdGljIG51bXRvbGFiZWwoYTogbnVtYmVyLCBiOiBjYy5MYWJlbCkge1xuICAgICAgICBiLnN0cmluZyA9IGEgKyBcIlwiXG4gICAgfVxuICAgIHN0YXRpYyBsYWJlbHRvbnVtKGI6IGNjLkxhYmVsKSB7XG4gICAgICAgIGxldCBhID0gcGFyc2VJbnQoYi5zdHJpbmcpXG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/tools/conststring.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f2c2I+V2lFmbeIQLiIP7yL', 'conststring');
// tools/conststring.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var conststring = /** @class */ (function (_super) {
    __extends(conststring, _super);
    function conststring() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //这个类用来放只读常量用于localstoragehelper的getvalue（key）等方法的参数
    conststring.USERINFO = "userinfo";
    return conststring;
}(cc.Component));
exports.default = conststring;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcdG9vbHNcXGNvbnN0c3RyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0lBQXlDLCtCQUFZO0lBQXJEOztJQUtBLENBQUM7SUFKRyxvREFBb0Q7SUFDcEMsb0JBQVEsR0FBRyxVQUFVLENBQUE7SUFHekMsa0JBQUM7Q0FMRCxBQUtDLENBTHdDLEVBQUUsQ0FBQyxTQUFTLEdBS3BEO2tCQUxvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjb25zdHN0cmluZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgLy/ov5nkuKrnsbvnlKjmnaXmlL7lj6ror7vluLjph4/nlKjkuo5sb2NhbHN0b3JhZ2VoZWxwZXLnmoRnZXR2YWx1Ze+8iGtlee+8ieetieaWueazleeahOWPguaVsFxuICAgIHN0YXRpYyByZWFkb25seSBVU0VSSU5GTyA9IFwidXNlcmluZm9cIlxuXG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/tools/datanode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '465fbeDOohGma6FUc3BVogU', 'datanode');
// tools/datanode.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person() {
        this.username = "";
        // level: number = 1;
        this.shengming = 0;
        this.gongji = 0;
        this.fashu = 0;
        this.fangyu = 0;
        this.gongsu = 0;
    }
    return Person;
}());
var datanode = /** @class */ (function (_super) {
    __extends(datanode, _super);
    function datanode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    datanode.showpeople = function () {
        console.log(" 用户名:" + this.person.username + " 生命:" + this.person.shengming
            + " 攻击:" + this.person.gongji + " 法术:" + this.person.fashu + " 防御:" + this.person.fangyu);
        var a = " 用户名:" + this.person.username + " 生命:" + this.person.shengming
            + " 攻击:" + this.person.gongji + " 法术:" + this.person.fashu + " 防御:" + this.person.fangyu;
        return a;
    };
    datanode.showpeopleinfo = function (a) {
        var b = " 用户名:" + a.username + " 生命:" + a.shengming
            + " 攻击:" + a.gongji + " 法术:" + a.fashu + " 防御:" + a.fangyu;
        return b;
    };
    datanode.levelup = function () {
        // console.log(" 用户名:" + datanode.username + " 等级:" + datanode.level + " 生命:"
    };
    datanode.addtf = function (a, b) {
        switch (a) {
            case 0:
                this.person.shengming = this.person.shengming + b;
                // console.log(this.person.shengming);
                break;
            case 1:
                this.person.fangyu = this.person.fangyu + b;
                // console.log(this.person.fangyu);
                break;
            case 2:
                this.person.gongji = this.person.gongji + b;
                // console.log(this.person.gongji);
                break;
            case 3:
                this.person.fashu = this.person.fashu + b;
                // console.log(this.person.fashu);
                break;
        }
    };
    datanode.addshengming = function (a) {
        this.person.shengming = this.person.shengming + a;
        return this.person.shengming;
    };
    datanode.addgongsu = function (a) {
        this.person.gongsu = this.person.gongsu + a;
        return this.person.gongsu;
    };
    datanode.addfangyu = function (a) {
        this.person.fangyu = this.person.fangyu + a;
        return this.person.fangyu;
    };
    datanode.addgongji = function (a) {
        this.person.gongji = this.person.gongji + a;
        return this.person.gongji;
    };
    datanode.addfashu = function (a) {
        this.person.fashu = this.person.fashu + a;
        return this.person.fashu;
    };
    datanode.person = new Person();
    /**
     * 生命：0
     * 防御：1
     * 攻击：2
     * 法术：3
     */
    //天赋描述，增加属性，增加多少
    datanode.tianfu = [
        ["生命+5", 0, 5],
        ["防御+3", 1, 3],
        ["攻击+3", 2, 3],
        ["法术+3", 3, 3],
    ];
    return datanode;
}(cc.Component));
exports.default = datanode;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcdG9vbHNcXGRhdGFub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0lBQUE7UUFDSSxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLHFCQUFxQjtRQUNyQixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFdBQU0sR0FBVyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUFELGFBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQUVEO0lBQXNDLDRCQUFZO0lBQWxEOztJQTJGQSxDQUFDO0lBdkVVLG1CQUFVLEdBQWpCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUztjQUNyRSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTO2NBQ2pFLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFBO1FBQzVGLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNNLHVCQUFjLEdBQXJCLFVBQXNCLENBQUM7UUFDbkIsSUFB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RUwsZUFBQztDQTNGRCxBQTJGQyxDQTNGcUMsRUFBRSxDQUFDLFNBQVMsR0EyRmpEO2tCQTNGb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25zdHN0cmluZyBmcm9tIFwiLi9jb25zdHN0cmluZ1wiO1xuaW1wb3J0IGxvY2Fsc3RvcmFnZUhlbHBlciBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VIZWxwZXJcIjtcblxuY2xhc3MgUGVyc29uIHtcbiAgICB1c2VybmFtZTogc3RyaW5nID0gXCJcIjtcbiAgICAvLyBsZXZlbDogbnVtYmVyID0gMTtcbiAgICBzaGVuZ21pbmc6IG51bWJlciA9IDA7XG4gICAgZ29uZ2ppOiBudW1iZXIgPSAwO1xuICAgIGZhc2h1OiBudW1iZXIgPSAwO1xuICAgIGZhbmd5dTogbnVtYmVyID0gMDtcbiAgICBnb25nc3U6IG51bWJlciA9IDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGRhdGFub2RlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBwZXJzb246IFBlcnNvbiA9IG5ldyBQZXJzb24oKTtcblxuXG5cbiAgICAvKiogXG4gICAgICog55Sf5ZG977yaMFxuICAgICAqIOmYsuW+oe+8mjFcbiAgICAgKiDmlLvlh7vvvJoyXG4gICAgICog5rOV5pyv77yaM1xuICAgICAqL1xuICAgIC8v5aSp6LWL5o+P6L+w77yM5aKe5Yqg5bGe5oCn77yM5aKe5Yqg5aSa5bCRXG4gICAgc3RhdGljIHRpYW5mdTogYW55W11bXSA9IFtcbiAgICAgICAgW1wi55Sf5ZG9KzVcIiwgMCwgNV0sXG4gICAgICAgIFtcIumYsuW+oSszXCIsIDEsIDNdLFxuICAgICAgICBbXCLmlLvlh7srM1wiLCAyLCAzXSxcbiAgICAgICAgW1wi5rOV5pyvKzNcIiwgMywgM10sXG4gICAgXVxuXG4gICAgc3RhdGljIHNob3dwZW9wbGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiIOeUqOaIt+WQjTpcIiArIHRoaXMucGVyc29uLnVzZXJuYW1lICsgXCIg55Sf5ZG9OlwiICsgdGhpcy5wZXJzb24uc2hlbmdtaW5nXG4gICAgICAgICAgICArIFwiIOaUu+WHuzpcIiArIHRoaXMucGVyc29uLmdvbmdqaSArIFwiIOazleacrzpcIiArIHRoaXMucGVyc29uLmZhc2h1ICsgXCIg6Ziy5b6hOlwiICsgdGhpcy5wZXJzb24uZmFuZ3l1KTtcbiAgICAgICAgbGV0IGEgPSBcIiDnlKjmiLflkI06XCIgKyB0aGlzLnBlcnNvbi51c2VybmFtZSArIFwiIOeUn+WRvTpcIiArIHRoaXMucGVyc29uLnNoZW5nbWluZ1xuICAgICAgICAgICAgKyBcIiDmlLvlh7s6XCIgKyB0aGlzLnBlcnNvbi5nb25namkgKyBcIiDms5XmnK86XCIgKyB0aGlzLnBlcnNvbi5mYXNodSArIFwiIOmYsuW+oTpcIiArIHRoaXMucGVyc29uLmZhbmd5dVxuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgc3RhdGljIHNob3dwZW9wbGVpbmZvKGEpIHtcbiAgICAgICAgbGV0IGIgPSBcIiDnlKjmiLflkI06XCIgKyBhLnVzZXJuYW1lICsgXCIg55Sf5ZG9OlwiICsgYS5zaGVuZ21pbmdcbiAgICAgICAgICAgICsgXCIg5pS75Ye7OlwiICsgYS5nb25namkgKyBcIiDms5XmnK86XCIgKyBhLmZhc2h1ICsgXCIg6Ziy5b6hOlwiICsgYS5mYW5neXVcbiAgICAgICAgcmV0dXJuIGI7XG4gICAgfVxuXG4gICAgc3RhdGljIGxldmVsdXAoKSB7XG5cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIiDnlKjmiLflkI06XCIgKyBkYXRhbm9kZS51c2VybmFtZSArIFwiIOetiee6pzpcIiArIGRhdGFub2RlLmxldmVsICsgXCIg55Sf5ZG9OlwiXG5cblxuICAgIH1cblxuICAgIHN0YXRpYyBhZGR0ZihhOiBudW1iZXIsIGI6IG51bWJlcikgeyAgICAvL+agueaNruaVsOe7hOeahOWinuWKoO+8jOWkqei1i+eahOWKn+iDveWcqOi/mei+ueWunueOsFxuICAgICAgICBzd2l0Y2ggKGEpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzLnBlcnNvbi5zaGVuZ21pbmcgPSB0aGlzLnBlcnNvbi5zaGVuZ21pbmcgKyBiXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wZXJzb24uc2hlbmdtaW5nKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMucGVyc29uLmZhbmd5dSA9IHRoaXMucGVyc29uLmZhbmd5dSArIGJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBlcnNvbi5mYW5neXUpO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy5wZXJzb24uZ29uZ2ppID0gdGhpcy5wZXJzb24uZ29uZ2ppICsgYlxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucGVyc29uLmdvbmdqaSk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzLnBlcnNvbi5mYXNodSA9IHRoaXMucGVyc29uLmZhc2h1ICsgYlxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucGVyc29uLmZhc2h1KTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG5cblxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgYWRkc2hlbmdtaW5nKGEpIHtcbiAgICAgICAgdGhpcy5wZXJzb24uc2hlbmdtaW5nID0gdGhpcy5wZXJzb24uc2hlbmdtaW5nICsgYTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVyc29uLnNoZW5nbWluZztcbiAgICB9XG4gICAgc3RhdGljIGFkZGdvbmdzdShhKSB7XG4gICAgICAgIHRoaXMucGVyc29uLmdvbmdzdSA9IHRoaXMucGVyc29uLmdvbmdzdSArIGE7XG4gICAgICAgIHJldHVybiB0aGlzLnBlcnNvbi5nb25nc3U7XG4gICAgfVxuICAgIHN0YXRpYyBhZGRmYW5neXUoYSkge1xuICAgICAgICB0aGlzLnBlcnNvbi5mYW5neXUgPSB0aGlzLnBlcnNvbi5mYW5neXUgKyBhO1xuICAgICAgICByZXR1cm4gdGhpcy5wZXJzb24uZmFuZ3l1O1xuICAgIH1cbiAgICBzdGF0aWMgYWRkZ29uZ2ppKGEpIHtcbiAgICAgICAgdGhpcy5wZXJzb24uZ29uZ2ppID0gdGhpcy5wZXJzb24uZ29uZ2ppICsgYTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVyc29uLmdvbmdqaTtcbiAgICB9XG4gICAgc3RhdGljIGFkZGZhc2h1KGEpIHtcbiAgICAgICAgdGhpcy5wZXJzb24uZmFzaHUgPSB0aGlzLnBlcnNvbi5mYXNodSArIGE7XG4gICAgICAgIHJldHVybiB0aGlzLnBlcnNvbi5mYXNodTtcbiAgICB9XG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/myself.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80e6cfb4XhPpLt35po0iSbu', 'myself');
// game/scripts/myself.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var datanode_1 = require("../../tools/datanode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var myself = /** @class */ (function (_super) {
    __extends(myself, _super);
    function myself() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.zidan = null;
        _this.pt = null;
        return _this;
    }
    myself.prototype.start = function () {
        var _this = this;
        cc.director.getCollisionManager().enabled = true; //开启碰撞检测
        console.log(cc.director.getCollisionManager().enabled);
        setInterval(function () {
            var zd = cc.instantiate(_this.zidan);
            zd.x = _this.node.x;
            // console.log(this.node.x);
            zd.y = _this.pt.y;
            _this.pt.addChild(zd);
        }, datanode_1.default.addgongsu(5) * 1000);
        // console.log(this.node.getComponent(cc.BoxCollider).tag);
        console.log("攻速为：" + datanode_1.default.person.gongsu);
    };
    __decorate([
        property({
            displayName: "子弹预制体",
            type: cc.Prefab
        })
    ], myself.prototype, "zidan", void 0);
    __decorate([
        property({
            displayName: "自己的图片",
            type: cc.Node
        })
    ], myself.prototype, "pt", void 0);
    myself = __decorate([
        ccclass
    ], myself);
    return myself;
}(cc.Component));
exports.default = myself;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcbXlzZWxmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLGlEQUE0QztBQUV0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQXFDQztRQTlCRyxXQUFLLEdBQWMsSUFBSSxDQUFDO1FBTXhCLFFBQUUsR0FBWSxJQUFJLENBQUM7O0lBd0J2QixDQUFDO0lBdEJHLHNCQUFLLEdBQUw7UUFBQSxpQkFtQkM7UUFsQkcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxRQUFRO1FBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXZELFdBQVcsQ0FBQztZQUNSLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkIsNEJBQTRCO1lBQzVCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDaEIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekIsQ0FBQyxFQUFFLGtCQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBO1FBQ2hDLDJEQUEyRDtRQUUzRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQU1qRCxDQUFDO0lBM0JEO1FBTEMsUUFBUSxDQUFDO1lBQ04sV0FBVyxFQUFFLE9BQU87WUFDcEIsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNO1NBRWxCLENBQUM7eUNBQ3NCO0lBTXhCO1FBTEMsUUFBUSxDQUFDO1lBQ04sV0FBVyxFQUFFLE9BQU87WUFDcEIsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJO1NBRWhCLENBQUM7c0NBQ2lCO0lBYkYsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQXFDMUI7SUFBRCxhQUFDO0NBckNELEFBcUNDLENBckNtQyxFQUFFLENBQUMsU0FBUyxHQXFDL0M7a0JBckNvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCBkYXRhbm9kZSBmcm9tIFwiLi4vLi4vdG9vbHMvZGF0YW5vZGVcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG15c2VsZiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLlrZDlvLnpooTliLbkvZNcIixcbiAgICAgICAgdHlwZTogY2MuUHJlZmFiXG5cbiAgICB9KVxuICAgIHppZGFuOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuiHquW3seeahOWbvueJh1wiLFxuICAgICAgICB0eXBlOiBjYy5Ob2RlXG5cbiAgICB9KVxuICAgIHB0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7IC8v5byA5ZCv56Kw5pKe5qOA5rWLXG4gICAgICAgIGNvbnNvbGUubG9nKGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkKTtcblxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7IC8v5ZGo5pyf5omn6KGMXG4gICAgICAgICAgICBsZXQgemQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnppZGFuKTtcbiAgICAgICAgICAgIHpkLnggPSB0aGlzLm5vZGUueDtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubm9kZS54KTtcbiAgICAgICAgICAgIHpkLnkgPSB0aGlzLnB0LnlcbiAgICAgICAgICAgIHRoaXMucHQuYWRkQ2hpbGQoemQpO1xuICAgICAgICB9LCBkYXRhbm9kZS5hZGRnb25nc3UoNSkgKiAxMDAwKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS50YWcpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5pS76YCf5Li677yaXCIgKyBkYXRhbm9kZS5wZXJzb24uZ29uZ3N1KTtcblxuXG5cblxuXG4gICAgfVxuXG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/prefab/mzidan.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '985b6LQJOxBu4HrTsVk/MxT', 'mzidan');
// game/prefab/mzidan.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var mzidan = /** @class */ (function (_super) {
    __extends(mzidan, _super);
    function mzidan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // srcHeight: number = 640;
        _this.speed = 100;
        return _this;
    }
    mzidan.prototype.start = function () {
        //开启碰撞检测
        cc.director.getCollisionManager().enabled = true;
    };
    mzidan.prototype.update = function (dt) {
        // console.log("我方画布高度：" + this.srcHeight);
        this.node.y += this.speed * dt;
        console.log();
        //超过画布直接销毁
        // if (this.node.y > this.srcHeight) {
        //     console.log("我方子弹" + this.node.y);
        //     this.node.removeFromParent(true)    //删除节点
        //     this.destroy()      //销毁
        //     console.log("已被销毁");
        // }
    };
    //碰撞事件,产生碰撞调用一次
    mzidan.prototype.onCollisionEnteron = function (other) {
        if (other.tag == 2) {
            console.log("碰到障碍物");
            this.node.removeFromParent(true); //删除节点
            this.destroy(); //销毁
        }
    };
    mzidan = __decorate([
        ccclass
    ], mzidan);
    return mzidan;
}(cc.Component));
exports.default = mzidan;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxccHJlZmFiXFxtemlkYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFzQ0M7UUFwQ0csMkJBQTJCO1FBQzNCLFdBQUssR0FBVyxHQUFHLENBQUE7O0lBbUN2QixDQUFDO0lBakNHLHNCQUFLLEdBQUw7UUFDSSxRQUFRO1FBQ1IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFFckQsQ0FBQztJQUVELHVCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsMkNBQTJDO1FBRTNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFBO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNkLFVBQVU7UUFDVixzQ0FBc0M7UUFDdEMseUNBQXlDO1FBRXpDLGlEQUFpRDtRQUNqRCwrQkFBK0I7UUFDL0IsMkJBQTJCO1FBRTNCLElBQUk7SUFLUixDQUFDO0lBQ0QsZUFBZTtJQUNmLG1DQUFrQixHQUFsQixVQUFtQixLQUFLO1FBQ3BCLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFBLENBQUksTUFBTTtZQUMxQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUEsQ0FBTSxJQUFJO1NBQzNCO0lBQ0wsQ0FBQztJQXJDZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQXNDMUI7SUFBRCxhQUFDO0NBdENELEFBc0NDLENBdENtQyxFQUFFLENBQUMsU0FBUyxHQXNDL0M7a0JBdENvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtemlkYW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy8gc3JjSGVpZ2h0OiBudW1iZXIgPSA2NDA7XG4gICAgc3BlZWQ6IG51bWJlciA9IDEwMFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8v5byA5ZCv56Kw5pKe5qOA5rWLXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcblxuICAgIH1cblxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5oiR5pa555S75biD6auY5bqm77yaXCIgKyB0aGlzLnNyY0hlaWdodCk7XG5cbiAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGVlZCAqIGR0XG4gICAgICAgIGNvbnNvbGUubG9nKCk7XG4gICAgICAgIC8v6LaF6L+H55S75biD55u05o6l6ZSA5q+BXG4gICAgICAgIC8vIGlmICh0aGlzLm5vZGUueSA+IHRoaXMuc3JjSGVpZ2h0KSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIuaIkeaWueWtkOW8uVwiICsgdGhpcy5ub2RlLnkpO1xuXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCh0cnVlKSAgICAvL+WIoOmZpOiKgueCuVxuICAgICAgICAvLyAgICAgdGhpcy5kZXN0cm95KCkgICAgICAvL+mUgOavgVxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLlt7LooqvplIDmr4FcIik7XG5cbiAgICAgICAgLy8gfVxuXG5cblxuXG4gICAgfVxuICAgIC8v56Kw5pKe5LqL5Lu2LOS6p+eUn+eisOaSnuiwg+eUqOS4gOasoVxuICAgIG9uQ29sbGlzaW9uRW50ZXJvbihvdGhlcikge1xuICAgICAgICBpZiAob3RoZXIudGFnID09IDIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi56Kw5Yiw6Zqc56KN54mpXCIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSkgICAgLy/liKDpmaToioLngrlcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpICAgICAgLy/plIDmr4FcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/enemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b2362u6XHxK7Z+oaxPuv6HS', 'enemy');
// game/scripts/enemy.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var datanode_1 = require("../../tools/datanode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var myself = /** @class */ (function (_super) {
    __extends(myself, _super);
    function myself() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.zidan = null;
        _this.pt = null;
        return _this;
    }
    myself.prototype.start = function () {
        var _this = this;
        cc.director.getCollisionManager().enabled = true; //开启碰撞检测
        setInterval(function () {
            var zd = cc.instantiate(_this.zidan);
            zd.x = _this.node.x;
            console.log(_this.node.x);
            zd.y = _this.pt.y;
            //一个节点上的碰撞事件是不会进行碰撞检测的
            _this.pt.addChild(zd);
        }, datanode_1.default.person.gongsu * 1000);
        // console.log(this.node.getComponent(cc.BoxCollider).tag);
        console.log("攻速为：" + datanode_1.default.person.gongsu * 1000);
    };
    __decorate([
        property({
            displayName: "子弹预制体",
            type: cc.Prefab
        })
    ], myself.prototype, "zidan", void 0);
    __decorate([
        property({
            displayName: "敌人图片",
            type: cc.Node
        })
    ], myself.prototype, "pt", void 0);
    myself = __decorate([
        ccclass
    ], myself);
    return myself;
}(cc.Component));
exports.default = myself;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcZW5lbXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsaURBQTRDO0FBRXRDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBcUNDO1FBOUJHLFdBQUssR0FBYyxJQUFJLENBQUM7UUFNeEIsUUFBRSxHQUFZLElBQUksQ0FBQzs7SUF3QnZCLENBQUM7SUF2Qkcsc0JBQUssR0FBTDtRQUFBLGlCQW1CQztRQWxCRyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLFFBQVE7UUFFMUQsV0FBVyxDQUFDO1lBQ1IsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEMsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFekIsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUNoQixzQkFBc0I7WUFDdEIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekIsQ0FBQyxFQUFFLGtCQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQTtRQUNqQywyREFBMkQ7UUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsa0JBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBTXhELENBQUM7SUExQkQ7UUFMQyxRQUFRLENBQUM7WUFDTixXQUFXLEVBQUUsT0FBTztZQUNwQixJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU07U0FFbEIsQ0FBQzt5Q0FDc0I7SUFNeEI7UUFMQyxRQUFRLENBQUM7WUFDTixXQUFXLEVBQUUsTUFBTTtZQUNuQixJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUk7U0FFaEIsQ0FBQztzQ0FDaUI7SUFiRixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBcUMxQjtJQUFELGFBQUM7Q0FyQ0QsQUFxQ0MsQ0FyQ21DLEVBQUUsQ0FBQyxTQUFTLEdBcUMvQztrQkFyQ29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IGRhdGFub2RlIGZyb20gXCIuLi8uLi90b29scy9kYXRhbm9kZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbXlzZWxmIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuWtkOW8uemihOWItuS9k1wiLFxuICAgICAgICB0eXBlOiBjYy5QcmVmYWJcblxuICAgIH0pXG4gICAgemlkYW46IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5pWM5Lq65Zu+54mHXCIsXG4gICAgICAgIHR5cGU6IGNjLk5vZGVcblxuICAgIH0pXG4gICAgcHQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIHN0YXJ0KCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7IC8v5byA5ZCv56Kw5pKe5qOA5rWLXG5cbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4geyAvL+WRqOacn+aJp+ihjFxuICAgICAgICAgICAgbGV0IHpkID0gY2MuaW5zdGFudGlhdGUodGhpcy56aWRhbik7XG4gICAgICAgICAgICB6ZC54ID0gdGhpcy5ub2RlLnhcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubm9kZS54KTtcblxuICAgICAgICAgICAgemQueSA9IHRoaXMucHQueVxuICAgICAgICAgICAgLy/kuIDkuKroioLngrnkuIrnmoTnorDmkp7kuovku7bmmK/kuI3kvJrov5vooYznorDmkp7mo4DmtYvnmoRcbiAgICAgICAgICAgIHRoaXMucHQuYWRkQ2hpbGQoemQpO1xuICAgICAgICB9LCBkYXRhbm9kZS5wZXJzb24uZ29uZ3N1ICogMTAwMClcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikudGFnKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLmlLvpgJ/kuLrvvJpcIiArIGRhdGFub2RlLnBlcnNvbi5nb25nc3UgKiAxMDAwKTtcblxuXG5cblxuXG4gICAgfVxuXG5cblxufVxuIl19
//------QC-SOURCE-SPLIT------
