import conststring from "../../tools/conststring";
import datanode from "../../tools/datanode";
import localstorageHelper from "../../tools/localStorageHelper";


const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property({
        displayName: " 属性",
        type: cc.Node,
    })
    people: cc.Node = null;


    onLoad() {
        // this.people.getComponent(cc.Label).string = datanode.showpeople()


        let userinfo = localstorageHelper.getvalue(conststring.USERINFO)
        //反序列号
        datanode.person = JSON.parse(userinfo)
        console.log(datanode.person);

        this.people.getComponent(cc.Label).string = datanode.showpeople()

    }

    onbtnrehall() {

        cc.director.preloadScene("begin")
        cc.director.loadScene("begin")

    }

    start() {

    }

    // update (dt) {}
}
