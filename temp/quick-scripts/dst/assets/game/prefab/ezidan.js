
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