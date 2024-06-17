
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