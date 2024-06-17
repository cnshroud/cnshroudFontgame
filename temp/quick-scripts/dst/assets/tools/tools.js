
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/tools/tools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4201fxKxeZMR5ZMSK649exq', 'tools');
// tools/tools.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tools = /** @class */ (function () {
    function tools() {
    }
    tools.numtolabel = function (a, b) {
        b.string = a + "";
    };
    tools.labeltonum = function (b) {
        var a = parseInt(b.string);
        return a;
    };
    tools.prototype.start = function () {
    };
    return tools;
}());
exports.default = tools;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcdG9vbHNcXHRvb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7SUFBQTtJQWdCQSxDQUFDO0lBYlUsZ0JBQVUsR0FBakIsVUFBa0IsQ0FBUyxFQUFFLENBQVc7UUFDcEMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFDTSxnQkFBVSxHQUFqQixVQUFrQixDQUFXO1FBQ3pCLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDMUIsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQscUJBQUssR0FBTDtJQUVBLENBQUM7SUFHTCxZQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRvb2xzIHtcblxuXG4gICAgc3RhdGljIG51bXRvbGFiZWwoYTogbnVtYmVyLCBiOiBjYy5MYWJlbCkge1xuICAgICAgICBiLnN0cmluZyA9IGEgKyBcIlwiXG4gICAgfVxuICAgIHN0YXRpYyBsYWJlbHRvbnVtKGI6IGNjLkxhYmVsKSB7XG4gICAgICAgIGxldCBhID0gcGFyc2VJbnQoYi5zdHJpbmcpXG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==