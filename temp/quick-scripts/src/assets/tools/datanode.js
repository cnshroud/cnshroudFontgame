"use strict";
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