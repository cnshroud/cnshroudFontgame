"use strict";
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