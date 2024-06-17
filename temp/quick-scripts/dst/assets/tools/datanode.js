
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcdG9vbHNcXGRhdGFub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0lBQUE7UUFDSSxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLHFCQUFxQjtRQUNyQixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFdBQU0sR0FBVyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUFELGFBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQUVEO0lBQXNDLDRCQUFZO0lBQWxEOztJQTJGQSxDQUFDO0lBdkVVLG1CQUFVLEdBQWpCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUztjQUNyRSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTO2NBQ2pFLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFBO1FBQzVGLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNNLHVCQUFjLEdBQXJCLFVBQXNCLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxTQUFTO2NBQzdDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFBO1FBQzlELE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVNLGdCQUFPLEdBQWQ7UUFHSSw2RUFBNkU7SUFHakYsQ0FBQztJQUVNLGNBQUssR0FBWixVQUFhLENBQVMsRUFBRSxDQUFTO1FBQzdCLFFBQVEsQ0FBQyxFQUFFO1lBQ1AsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQTtnQkFDakQsc0NBQXNDO2dCQUV0QyxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtnQkFDM0MsbUNBQW1DO2dCQUVuQyxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtnQkFDM0MsbUNBQW1DO2dCQUVuQyxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtnQkFDekMsa0NBQWtDO2dCQUVsQyxNQUFNO1NBSWI7SUFDTCxDQUFDO0lBR00scUJBQVksR0FBbkIsVUFBb0IsQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ00sa0JBQVMsR0FBaEIsVUFBaUIsQ0FBQztRQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUM1QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFDTSxrQkFBUyxHQUFoQixVQUFpQixDQUFDO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUNNLGtCQUFTLEdBQWhCLFVBQWlCLENBQUM7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDNUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBQ00saUJBQVEsR0FBZixVQUFnQixDQUFDO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQXZGTSxlQUFNLEdBQVcsSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUlyQzs7Ozs7T0FLRztJQUNILGdCQUFnQjtJQUNULGVBQU0sR0FBWTtRQUNyQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNkLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDZCxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2pCLENBQUE7SUF5RUwsZUFBQztDQTNGRCxBQTJGQyxDQTNGcUMsRUFBRSxDQUFDLFNBQVMsR0EyRmpEO2tCQTNGb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25zdHN0cmluZyBmcm9tIFwiLi9jb25zdHN0cmluZ1wiO1xuaW1wb3J0IGxvY2Fsc3RvcmFnZUhlbHBlciBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VIZWxwZXJcIjtcblxuY2xhc3MgUGVyc29uIHtcbiAgICB1c2VybmFtZTogc3RyaW5nID0gXCJcIjtcbiAgICAvLyBsZXZlbDogbnVtYmVyID0gMTtcbiAgICBzaGVuZ21pbmc6IG51bWJlciA9IDA7XG4gICAgZ29uZ2ppOiBudW1iZXIgPSAwO1xuICAgIGZhc2h1OiBudW1iZXIgPSAwO1xuICAgIGZhbmd5dTogbnVtYmVyID0gMDtcbiAgICBnb25nc3U6IG51bWJlciA9IDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGRhdGFub2RlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBwZXJzb246IFBlcnNvbiA9IG5ldyBQZXJzb24oKTtcblxuXG5cbiAgICAvKiogXG4gICAgICog55Sf5ZG977yaMFxuICAgICAqIOmYsuW+oe+8mjFcbiAgICAgKiDmlLvlh7vvvJoyXG4gICAgICog5rOV5pyv77yaM1xuICAgICAqL1xuICAgIC8v5aSp6LWL5o+P6L+w77yM5aKe5Yqg5bGe5oCn77yM5aKe5Yqg5aSa5bCRXG4gICAgc3RhdGljIHRpYW5mdTogYW55W11bXSA9IFtcbiAgICAgICAgW1wi55Sf5ZG9KzVcIiwgMCwgNV0sXG4gICAgICAgIFtcIumYsuW+oSszXCIsIDEsIDNdLFxuICAgICAgICBbXCLmlLvlh7srM1wiLCAyLCAzXSxcbiAgICAgICAgW1wi5rOV5pyvKzNcIiwgMywgM10sXG4gICAgXVxuXG4gICAgc3RhdGljIHNob3dwZW9wbGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiIOeUqOaIt+WQjTpcIiArIHRoaXMucGVyc29uLnVzZXJuYW1lICsgXCIg55Sf5ZG9OlwiICsgdGhpcy5wZXJzb24uc2hlbmdtaW5nXG4gICAgICAgICAgICArIFwiIOaUu+WHuzpcIiArIHRoaXMucGVyc29uLmdvbmdqaSArIFwiIOazleacrzpcIiArIHRoaXMucGVyc29uLmZhc2h1ICsgXCIg6Ziy5b6hOlwiICsgdGhpcy5wZXJzb24uZmFuZ3l1KTtcbiAgICAgICAgbGV0IGEgPSBcIiDnlKjmiLflkI06XCIgKyB0aGlzLnBlcnNvbi51c2VybmFtZSArIFwiIOeUn+WRvTpcIiArIHRoaXMucGVyc29uLnNoZW5nbWluZ1xuICAgICAgICAgICAgKyBcIiDmlLvlh7s6XCIgKyB0aGlzLnBlcnNvbi5nb25namkgKyBcIiDms5XmnK86XCIgKyB0aGlzLnBlcnNvbi5mYXNodSArIFwiIOmYsuW+oTpcIiArIHRoaXMucGVyc29uLmZhbmd5dVxuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgc3RhdGljIHNob3dwZW9wbGVpbmZvKGEpIHtcbiAgICAgICAgbGV0IGIgPSBcIiDnlKjmiLflkI06XCIgKyBhLnVzZXJuYW1lICsgXCIg55Sf5ZG9OlwiICsgYS5zaGVuZ21pbmdcbiAgICAgICAgICAgICsgXCIg5pS75Ye7OlwiICsgYS5nb25namkgKyBcIiDms5XmnK86XCIgKyBhLmZhc2h1ICsgXCIg6Ziy5b6hOlwiICsgYS5mYW5neXVcbiAgICAgICAgcmV0dXJuIGI7XG4gICAgfVxuXG4gICAgc3RhdGljIGxldmVsdXAoKSB7XG5cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIiDnlKjmiLflkI06XCIgKyBkYXRhbm9kZS51c2VybmFtZSArIFwiIOetiee6pzpcIiArIGRhdGFub2RlLmxldmVsICsgXCIg55Sf5ZG9OlwiXG5cblxuICAgIH1cblxuICAgIHN0YXRpYyBhZGR0ZihhOiBudW1iZXIsIGI6IG51bWJlcikgeyAgICAvL+agueaNruaVsOe7hOeahOWinuWKoO+8jOWkqei1i+eahOWKn+iDveWcqOi/mei+ueWunueOsFxuICAgICAgICBzd2l0Y2ggKGEpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzLnBlcnNvbi5zaGVuZ21pbmcgPSB0aGlzLnBlcnNvbi5zaGVuZ21pbmcgKyBiXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wZXJzb24uc2hlbmdtaW5nKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMucGVyc29uLmZhbmd5dSA9IHRoaXMucGVyc29uLmZhbmd5dSArIGJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBlcnNvbi5mYW5neXUpO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy5wZXJzb24uZ29uZ2ppID0gdGhpcy5wZXJzb24uZ29uZ2ppICsgYlxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucGVyc29uLmdvbmdqaSk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzLnBlcnNvbi5mYXNodSA9IHRoaXMucGVyc29uLmZhc2h1ICsgYlxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucGVyc29uLmZhc2h1KTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG5cblxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgYWRkc2hlbmdtaW5nKGEpIHtcbiAgICAgICAgdGhpcy5wZXJzb24uc2hlbmdtaW5nID0gdGhpcy5wZXJzb24uc2hlbmdtaW5nICsgYTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVyc29uLnNoZW5nbWluZztcbiAgICB9XG4gICAgc3RhdGljIGFkZGdvbmdzdShhKSB7XG4gICAgICAgIHRoaXMucGVyc29uLmdvbmdzdSA9IHRoaXMucGVyc29uLmdvbmdzdSArIGE7XG4gICAgICAgIHJldHVybiB0aGlzLnBlcnNvbi5nb25nc3U7XG4gICAgfVxuICAgIHN0YXRpYyBhZGRmYW5neXUoYSkge1xuICAgICAgICB0aGlzLnBlcnNvbi5mYW5neXUgPSB0aGlzLnBlcnNvbi5mYW5neXUgKyBhO1xuICAgICAgICByZXR1cm4gdGhpcy5wZXJzb24uZmFuZ3l1O1xuICAgIH1cbiAgICBzdGF0aWMgYWRkZ29uZ2ppKGEpIHtcbiAgICAgICAgdGhpcy5wZXJzb24uZ29uZ2ppID0gdGhpcy5wZXJzb24uZ29uZ2ppICsgYTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVyc29uLmdvbmdqaTtcbiAgICB9XG4gICAgc3RhdGljIGFkZGZhc2h1KGEpIHtcbiAgICAgICAgdGhpcy5wZXJzb24uZmFzaHUgPSB0aGlzLnBlcnNvbi5mYXNodSArIGE7XG4gICAgICAgIHJldHVybiB0aGlzLnBlcnNvbi5mYXNodTtcbiAgICB9XG5cbn1cbiJdfQ==