
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/tools/localStorageHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57542QhOTdHL5HEnQ/OF7di', 'localStorageHelper');
// tools/localStorageHelper.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var localstorageHelper = /** @class */ (function (_super) {
    __extends(localstorageHelper, _super);
    function localstorageHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //这个类用将json数据保存到浏览器
    localstorageHelper.setbykv = function (key, value) {
        cc.sys.localStorage.setItem(key, value);
    };
    localstorageHelper.getvalue = function (key) {
        var a = cc.sys.localStorage.getItem(key);
        if (a != null && a != undefined) {
            return a;
        }
        else {
            return "";
        }
    };
    localstorageHelper.getkey = function () {
    };
    localstorageHelper.prototype.start = function () {
    };
    localstorageHelper = __decorate([
        ccclass
    ], localstorageHelper);
    return localstorageHelper;
}(cc.Component));
exports.default = localstorageHelper;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcdG9vbHNcXGxvY2FsU3RvcmFnZUhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnRCxzQ0FBWTtJQUE1RDs7SUF5QkEsQ0FBQztJQXhCRyxtQkFBbUI7SUFDWiwwQkFBTyxHQUFkLFVBQWUsR0FBRyxFQUFFLEtBQUs7UUFDckIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBQ00sMkJBQVEsR0FBZixVQUFnQixHQUFHO1FBQ2YsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksU0FBUyxFQUFFO1lBRTdCLE9BQU8sQ0FBQyxDQUFBO1NBQ1g7YUFBTTtZQUNILE9BQU8sRUFBRSxDQUFBO1NBQ1o7SUFFTCxDQUFDO0lBRU0seUJBQU0sR0FBYjtJQUVBLENBQUM7SUFFRCxrQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQXRCZ0Isa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0F5QnRDO0lBQUQseUJBQUM7Q0F6QkQsQUF5QkMsQ0F6QitDLEVBQUUsQ0FBQyxTQUFTLEdBeUIzRDtrQkF6Qm9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbG9jYWxzdG9yYWdlSGVscGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICAvL+i/meS4quexu+eUqOWwhmpzb27mlbDmja7kv53lrZjliLDmtY/op4jlmahcbiAgICBzdGF0aWMgc2V0YnlrdihrZXksIHZhbHVlKSB7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKVxuICAgIH1cbiAgICBzdGF0aWMgZ2V0dmFsdWUoa2V5KSB7XG4gICAgICAgIGxldCBhID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcbiAgICAgICAgaWYgKGEgIT0gbnVsbCAmJiBhICE9IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICByZXR1cm4gYVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc3RhdGljIGdldGtleSgpIHtcblxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==