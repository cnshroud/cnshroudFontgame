import conststring from "./conststring";
import localstorageHelper from "./localStorageHelper";

class Person {
    username: string = "";
    // level: number = 1;
    shengming: number = 0;
    gongji: number = 0;
    fashu: number = 0;
    fangyu: number = 0;
    gongsu: number = 0;
}

export default class datanode extends cc.Component {

    static person: Person = new Person();



    /** 
     * 生命：0
     * 防御：1
     * 攻击：2
     * 法术：3
     */
    //天赋描述，增加属性，增加多少
    static tianfu: any[][] = [
        ["生命+5", 0, 5],
        ["防御+3", 1, 3],
        ["攻击+3", 2, 3],
        ["法术+3", 3, 3],
    ]

    static showpeople() {
        console.log(" 用户名:" + this.person.username + " 生命:" + this.person.shengming
            + " 攻击:" + this.person.gongji + " 法术:" + this.person.fashu + " 防御:" + this.person.fangyu);
        let a = " 用户名:" + this.person.username + " 生命:" + this.person.shengming
            + " 攻击:" + this.person.gongji + " 法术:" + this.person.fashu + " 防御:" + this.person.fangyu
        return a;
    }
    static showpeopleinfo(a) {
        let b = " 用户名:" + a.username + " 生命:" + a.shengming
            + " 攻击:" + a.gongji + " 法术:" + a.fashu + " 防御:" + a.fangyu
        return b;
    }

    static levelup() {


        // console.log(" 用户名:" + datanode.username + " 等级:" + datanode.level + " 生命:"


    }

    static addtf(a: number, b: number) {    //根据数组的增加，天赋的功能在这边实现
        switch (a) {
            case 0:
                this.person.shengming = this.person.shengming + b
                // console.log(this.person.shengming);

                break;
            case 1:
                this.person.fangyu = this.person.fangyu + b
                // console.log(this.person.fangyu);

                break;
            case 2:
                this.person.gongji = this.person.gongji + b
                // console.log(this.person.gongji);

                break;
            case 3:
                this.person.fashu = this.person.fashu + b
                // console.log(this.person.fashu);

                break;



        }
    }


    static addshengming(a) {
        this.person.shengming = this.person.shengming + a;
        return this.person.shengming;
    }
    static addgongsu(a) {
        this.person.gongsu = this.person.gongsu + a;
        return this.person.gongsu;
    }
    static addfangyu(a) {
        this.person.fangyu = this.person.fangyu + a;
        return this.person.fangyu;
    }
    static addgongji(a) {
        this.person.gongji = this.person.gongji + a;
        return this.person.gongji;
    }
    static addfashu(a) {
        this.person.fashu = this.person.fashu + a;
        return this.person.fashu;
    }

}
