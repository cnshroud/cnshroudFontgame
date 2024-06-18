


export default class tools {


    static numtolabel(a: number, b: cc.Label) {
        b.string = a + ""
    }
    static labeltonum(b: cc.Label) {
        let a = parseInt(b.string)
        return a;
    }

    start() {

    }

    // update (dt) {}
}
