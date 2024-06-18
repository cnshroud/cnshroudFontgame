// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class localstorageHelper extends cc.Component {
    //这个类用将json数据保存到浏览器
    static setbykv(key, value) {
        cc.sys.localStorage.setItem(key, value)
    }
    static getvalue(key) {
        let a = cc.sys.localStorage.getItem(key)
        if (a != null && a != undefined) {

            return a
        } else {
            return ""
        }

    }

    static getkey() {

    }

    start() {

    }

    // update (dt) {}
}
