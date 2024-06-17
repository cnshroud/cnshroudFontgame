"use strict";
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