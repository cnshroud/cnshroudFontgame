import conststring from "../../tools/conststring";
import datanode from "../../tools/datanode";
import localstorageHelper from "../../tools/localStorageHelper";

import tools from "../../tools/tools";

const { ccclass, property } = cc._decorator;

@ccclass
export default class settingpeople extends cc.Component {

    @property({
        displayName: " 名字",
        type: cc.Node,
    })
    username: cc.Node = null;
    @property({
        displayName: " 属性点",
        type: cc.Integer,
    })
    shuxindian: number = 0;

    @property({
        displayName: " 可用属性点",
        type: cc.Label,
    })
    usenode: cc.Label = null;

    @property({
        displayName: " 生命",
        type: cc.Label,
    })
    shengming: cc.Label = null;

    @property({
        displayName: " 攻击",
        type: cc.Label,
    })
    gongji: cc.Label = null;

    @property({
        displayName: " 法术",
        type: cc.Label,
    })
    fashu: cc.Label = null;

    @property({
        displayName: " 防御",
        type: cc.Label,
    })
    fangyu: cc.Label = null;

    @property({
        displayName: " 天赋1",
        type: cc.Node,
    })
    tf1: cc.Node = null;
    @property({
        displayName: " 天赋2",
        type: cc.Node,
    })
    tf2: cc.Node = null;
    @property({
        displayName: " 天赋3",
        type: cc.Node,
    })
    tf3: cc.Node = null;
    @property({
        displayName: " 天赋4",
        type: cc.Node,
    })
    tf4: cc.Node = null;

    c: number = 0;
    b: number = 0;

    tflist = datanode.tianfu;   // 获取天赋列表
    start() {

    }

    onLoad() {

        this.usenode.string = this.shuxindian.toString()
        // console.log(this.usenode.string);
        this.c = this.shuxindian

        this.suijitianfu()
        cc.director.preloadScene("game")

    }

    //属性修改按钮
    onaddsmbtn() {


        if (parseInt(this.shengming.string) + tools.labeltonum(this.gongji) + tools.labeltonum(this.fashu) + tools.labeltonum(this.fangyu) < this.c) {


            let a = tools.labeltonum(this.shengming) + 1
            this.shengming.string = a.toString()
            this.shuxindian = this.shuxindian - 1
            // console.log(this.shuxindian);

            this.usenode.string = this.shuxindian.toString()
            // console.log(this.usenode.string);



        }
    }
    ondelsmbtn() {
        if (tools.labeltonum(this.shengming) > 0) {


            let a = tools.labeltonum(this.shengming) - 1
            this.shengming.string = a.toString()
            this.shuxindian = this.shuxindian + 1
            // console.log(this.shuxindian);

            this.usenode.string = this.shuxindian.toString()

        }
    }
    onaddgjbtn() {


        if (parseInt(this.shengming.string) + tools.labeltonum(this.gongji) + tools.labeltonum(this.fashu) + tools.labeltonum(this.fangyu) < this.c) {

            let a = tools.labeltonum(this.gongji) + 1
            this.gongji.string = a.toString()
            this.shuxindian = this.shuxindian - 1
            this.usenode.string = this.shuxindian.toString()

        }
    }
    ondelgjbtn() {
        if (tools.labeltonum(this.gongji) > 0) {


            let a = tools.labeltonum(this.gongji) - 1
            this.gongji.string = a.toString()
            this.shuxindian = this.shuxindian + 1
            this.usenode.string = this.shuxindian.toString()

        }
    }
    onaddfsbtn() {


        if (parseInt(this.shengming.string) + tools.labeltonum(this.gongji) + tools.labeltonum(this.fashu) + tools.labeltonum(this.fangyu) < this.c) {


            let a = tools.labeltonum(this.fashu) + 1
            this.fashu.string = a.toString()
            this.shuxindian = this.shuxindian - 1
            this.usenode.string = this.shuxindian.toString()

        }
    }
    ondelfsbtn() {
        if (tools.labeltonum(this.fashu) > 0) {


            let a = tools.labeltonum(this.fashu) - 1
            this.fashu.string = a.toString()
            this.shuxindian = this.shuxindian + 1
            this.usenode.string = this.shuxindian.toString()

        }
    }
    onaddfybtn() {


        if (parseInt(this.shengming.string) + tools.labeltonum(this.gongji) + tools.labeltonum(this.fashu) + tools.labeltonum(this.fangyu) < this.c) {


            let a = tools.labeltonum(this.fangyu) + 1
            this.fangyu.string = a.toString()           //防御文本数字修改
            this.shuxindian = this.shuxindian - 1
            this.usenode.string = this.shuxindian.toString()    //可用属性点数字修改

        }
    }

    ondelfybtn() {
        if (tools.labeltonum(this.fangyu) > 0) {


            let a = tools.labeltonum(this.fangyu) - 1
            this.fangyu.string = a.toString()           //防御文本数字修改
            this.shuxindian = this.shuxindian = 1
            this.usenode.string = this.shuxindian.toString()    //可用属性点数字修改


        }
    }



    onbtnold() {    //上局属性

        console.log(cc.sys.localStorage.getItem(conststring.USERINFO));

        cc.director.loadScene("game")


    }
    onbtnnew() {    //新属性按钮
        if (this.username.getComponent(cc.EditBox).string && this.username.getComponent(cc.EditBox).string != null) {
            // console.log(this.username.getComponent(cc.EditBox).string);
            // console.log('111');

            datanode.person.username = this.username.getComponent(cc.EditBox).string
        } else {
            datanode.person.username = "张三"
        }

        datanode.person.gongji = tools.labeltonum(this.gongji)
        datanode.person.shengming = tools.labeltonum(this.shengming)
        datanode.person.fangyu = tools.labeltonum(this.fangyu)
        datanode.person.fashu = tools.labeltonum(this.fashu)
        datanode.person.gongsu = 1.00

        datanode.showpeople()
        this.suijitianfu()

        //把datanode对象转化为字符串，序列化

        let json = JSON.stringify(datanode.person)
        //调用保存方法
        localstorageHelper.setbykv(conststring.USERINFO, json)

        console.log(localstorageHelper.getvalue(conststring.USERINFO));

        // console.log(tools.labeltonum(this.gongji));
        cc.director.loadScene("game")

    }

    onbtnpjb() {    //破解版
        datanode.person.username = this.username.getComponent(cc.EditBox).string
        // datanode.person.level = 100
        datanode.person.gongji = 10000
        datanode.person.shengming = 10000
        datanode.person.fangyu = 10000
        datanode.person.fashu = 10000

        datanode.showpeople()

        // console.log(tools.labeltonum(this.gongji));
        cc.director.loadScene("game")
    }

    onbtnclose() {    //关闭按钮
        this.node.active = false
    }


    suijitianfu() { //随机天赋
        let tfnum: number = datanode.tianfu.length
        // console.log(tfnum);

        let tffontlist = [
            this.tf1, this.tf2, this.tf3, this.tf4
        ]
        for (let i = 0; i < tffontlist.length; i++) {

            //随机天赋
            let b = Math.floor(Math.random() * tfnum)
            // console.log(b);
            //获取天赋文本
            tffontlist[i].getComponent(cc.Label).string = this.tflist[b][0]
            // console.log(this.tflist[b][2]);
            //调用方法增加天赋数值
            datanode.addtf(this.tflist[b][1], this.tflist[b][2])
        }

    }


}
