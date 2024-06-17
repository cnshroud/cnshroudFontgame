
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