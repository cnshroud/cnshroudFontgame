

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    // onLoad () {}
    @property({
        displayName: "设置属性预制体",
        type: cc.Prefab
    })
    settingpeople: cc.Prefab = null;
    @property({
        displayName: "开始按钮",
        type: cc.Node
    })
    startbtn: cc.Node = null;


    onbtnstart() {
        let sp = cc.instantiate(this.settingpeople);
        this.node.addChild(sp)
    }
    start() {

    }

    // update (dt) {}
}
