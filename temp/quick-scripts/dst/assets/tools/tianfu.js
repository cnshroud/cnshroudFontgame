
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/tools/tianfu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4a481zRh+9JUqZEdOmOWAms', 'tianfu');
// tools/tianfu.ts

// import datanode from "./datanode";
// const { ccclass, property } = cc._decorator;
// @ccclass
// export default class Tianfu extends cc.Component {
//     /** 
//      * 生命：0
//      * 防御：1
//      * 攻击：2
//      * 法术：3
//      */
//     //天赋描述，增加属性，增加多少
//     static tianfu: any[][] = [
//         ["生命+5", 0, 5],
//         ["防御+3", 1, 3],
//         ["攻击+3", 2, 3],
//         ["法术+3", 3, 3],
//     ]
//     static addtf(a: number, b: number) {    //根据数组的
//         switch (a) {
//             case 0:
//                 datanode.shengming = datanode.shengming + b
//                 console.log(datanode.shengming);
//                 break;
//             case 1:
//                 datanode.fangyu = datanode.fangyu + b
//                 console.log(datanode.fangyu);
//                 break;
//             case 2:
//                 datanode.gongji = datanode.gongji + b
//                 console.log(datanode.gongji);
//                 break;
//             case 3:
//                 datanode.fashu = datanode.fashu + b
//                 console.log(datanode.fashu);
//                 break;
//         }
//     }
//     start() {
//     }
//     // update (dt) {}
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcdG9vbHNcXHRpYW5mdS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBcUM7QUFHckMsK0NBQStDO0FBRS9DLFdBQVc7QUFDWCxxREFBcUQ7QUFDckQsV0FBVztBQUNYLGNBQWM7QUFDZCxjQUFjO0FBQ2QsY0FBYztBQUNkLGNBQWM7QUFDZCxVQUFVO0FBQ1YsdUJBQXVCO0FBQ3ZCLGlDQUFpQztBQUNqQywwQkFBMEI7QUFDMUIsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQiwwQkFBMEI7QUFLMUIsUUFBUTtBQUVSLHNEQUFzRDtBQUN0RCx1QkFBdUI7QUFDdkIsc0JBQXNCO0FBQ3RCLDhEQUE4RDtBQUM5RCxtREFBbUQ7QUFFbkQseUJBQXlCO0FBQ3pCLHNCQUFzQjtBQUN0Qix3REFBd0Q7QUFDeEQsZ0RBQWdEO0FBRWhELHlCQUF5QjtBQUN6QixzQkFBc0I7QUFDdEIsd0RBQXdEO0FBQ3hELGdEQUFnRDtBQUVoRCx5QkFBeUI7QUFDekIsc0JBQXNCO0FBQ3RCLHNEQUFzRDtBQUN0RCwrQ0FBK0M7QUFFL0MseUJBQXlCO0FBSXpCLFlBQVk7QUFDWixRQUFRO0FBRVIsZ0JBQWdCO0FBRWhCLFFBQVE7QUFFUix3QkFBd0I7QUFDeEIsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBkYXRhbm9kZSBmcm9tIFwiLi9kYXRhbm9kZVwiO1xuXG5cbi8vIGNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8vIEBjY2NsYXNzXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBUaWFuZnUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuLy8gICAgIC8qKiBcbi8vICAgICAgKiDnlJ/lkb3vvJowXG4vLyAgICAgICog6Ziy5b6h77yaMVxuLy8gICAgICAqIOaUu+WHu++8mjJcbi8vICAgICAgKiDms5XmnK/vvJozXG4vLyAgICAgICovXG4vLyAgICAgLy/lpKnotYvmj4/ov7DvvIzlop7liqDlsZ7mgKfvvIzlop7liqDlpJrlsJFcbi8vICAgICBzdGF0aWMgdGlhbmZ1OiBhbnlbXVtdID0gW1xuLy8gICAgICAgICBbXCLnlJ/lkb0rNVwiLCAwLCA1XSxcbi8vICAgICAgICAgW1wi6Ziy5b6hKzNcIiwgMSwgM10sXG4vLyAgICAgICAgIFtcIuaUu+WHuyszXCIsIDIsIDNdLFxuLy8gICAgICAgICBbXCLms5XmnK8rM1wiLCAzLCAzXSxcblxuXG5cblxuLy8gICAgIF1cblxuLy8gICAgIHN0YXRpYyBhZGR0ZihhOiBudW1iZXIsIGI6IG51bWJlcikgeyAgICAvL+agueaNruaVsOe7hOeahFxuLy8gICAgICAgICBzd2l0Y2ggKGEpIHtcbi8vICAgICAgICAgICAgIGNhc2UgMDpcbi8vICAgICAgICAgICAgICAgICBkYXRhbm9kZS5zaGVuZ21pbmcgPSBkYXRhbm9kZS5zaGVuZ21pbmcgKyBiXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YW5vZGUuc2hlbmdtaW5nKTtcblxuLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICAgY2FzZSAxOlxuLy8gICAgICAgICAgICAgICAgIGRhdGFub2RlLmZhbmd5dSA9IGRhdGFub2RlLmZhbmd5dSArIGJcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhbm9kZS5mYW5neXUpO1xuXG4vLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICBjYXNlIDI6XG4vLyAgICAgICAgICAgICAgICAgZGF0YW5vZGUuZ29uZ2ppID0gZGF0YW5vZGUuZ29uZ2ppICsgYlxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFub2RlLmdvbmdqaSk7XG5cbi8vICAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgIGNhc2UgMzpcbi8vICAgICAgICAgICAgICAgICBkYXRhbm9kZS5mYXNodSA9IGRhdGFub2RlLmZhc2h1ICsgYlxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFub2RlLmZhc2h1KTtcblxuLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xuXG5cblxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgc3RhcnQoKSB7XG5cbi8vICAgICB9XG5cbi8vICAgICAvLyB1cGRhdGUgKGR0KSB7fVxuLy8gfVxuIl19