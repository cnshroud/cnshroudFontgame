
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