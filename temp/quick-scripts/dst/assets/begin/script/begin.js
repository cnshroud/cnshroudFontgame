
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/begin/script/begin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97343u0vgZJG4s70RJiwYAz', 'begin');
// begin/script/begin.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.settingpeople = null;
        _this.startbtn = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onbtnstart = function () {
        var sp = cc.instantiate(this.settingpeople);
        this.node.addChild(sp);
    };
    NewClass.prototype.start = function () {
    };
    __decorate([
        property({
            displayName: "设置属性预制体",
            type: cc.Prefab
        })
    ], NewClass.prototype, "settingpeople", void 0);
    __decorate([
        property({
            displayName: "开始按钮",
            type: cc.Node
        })
    ], NewClass.prototype, "startbtn", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYmVnaW5cXHNjcmlwdFxcYmVnaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF5QkM7UUF0QkcsZUFBZTtRQUtmLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBS2hDLGNBQVEsR0FBWSxJQUFJLENBQUM7O1FBV3pCLGlCQUFpQjtJQUNyQixDQUFDO0lBVEcsNkJBQVUsR0FBVjtRQUNJLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFDRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQWREO1FBSkMsUUFBUSxDQUFDO1lBQ04sV0FBVyxFQUFFLFNBQVM7WUFDdEIsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNO1NBQ2xCLENBQUM7bURBQzhCO0lBS2hDO1FBSkMsUUFBUSxDQUFDO1lBQ04sV0FBVyxFQUFFLE1BQU07WUFDbkIsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJO1NBQ2hCLENBQUM7OENBQ3VCO0lBYlIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXlCNUI7SUFBRCxlQUFDO0NBekJELEFBeUJDLENBekJxQyxFQUFFLENBQUMsU0FBUyxHQXlCakQ7a0JBekJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuiuvue9ruWxnuaAp+mihOWItuS9k1wiLFxuICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICB9KVxuICAgIHNldHRpbmdwZW9wbGU6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5byA5aeL5oyJ6ZKuXCIsXG4gICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICB9KVxuICAgIHN0YXJ0YnRuOiBjYy5Ob2RlID0gbnVsbDtcblxuXG4gICAgb25idG5zdGFydCgpIHtcbiAgICAgICAgbGV0IHNwID0gY2MuaW5zdGFudGlhdGUodGhpcy5zZXR0aW5ncGVvcGxlKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHNwKVxuICAgIH1cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=