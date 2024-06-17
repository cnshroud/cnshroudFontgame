
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