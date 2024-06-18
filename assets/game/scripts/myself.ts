

import datanode from "../../tools/datanode";

const { ccclass, property } = cc._decorator;

@ccclass
export default class myself extends cc.Component {

    @property({
        displayName: "子弹预制体",
        type: cc.Prefab

    })
    zidan: cc.Prefab = null;
    @property({
        displayName: "自己的图片",
        type: cc.Node

    })
    pt: cc.Node = null;

    start() {
        cc.director.getCollisionManager().enabled = true; //开启碰撞检测
        console.log(cc.director.getCollisionManager().enabled);

        setInterval(() => { //周期执行
            let zd = cc.instantiate(this.zidan);
            zd.x = this.node.x;
            // console.log(this.node.x);
            zd.y = this.pt.y
            this.pt.addChild(zd);
        }, datanode.addgongsu(5) * 1000)
        // console.log(this.node.getComponent(cc.BoxCollider).tag);

        console.log("攻速为：" + datanode.person.gongsu);





    }


}
