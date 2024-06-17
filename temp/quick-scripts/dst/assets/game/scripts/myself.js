
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