

const { ccclass, property } = cc._decorator;

@ccclass
export default class mzidan extends cc.Component {

    // srcHeight: number = 640;
    speed: number = 100

    start() {
        //开启碰撞检测
        cc.director.getCollisionManager().enabled = true;

    }

    update(dt: number) {
        // console.log("我方画布高度：" + this.srcHeight);

        this.node.y += this.speed * dt
        console.log();
        //超过画布直接销毁
        // if (this.node.y > this.srcHeight) {
        //     console.log("我方子弹" + this.node.y);

        //     this.node.removeFromParent(true)    //删除节点
        //     this.destroy()      //销毁
        //     console.log("已被销毁");

        // }




    }
    //碰撞事件,产生碰撞调用一次
    onCollisionEnteron(other) {
        if (other.tag == 2) {
            console.log("碰到障碍物");
            this.node.removeFromParent(true)    //删除节点
            this.destroy()      //销毁
        }
    }
}
