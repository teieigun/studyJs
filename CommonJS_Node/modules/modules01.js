/**
 * 第一种暴露方式:module.exports = value
 * 第二种暴露方式：exports.xxx = value
 * */

//書き方１
module.exports = {
    data:'第一种暴露方式:module.exports = value',
    test001(){
        console.log(this.data);
    }
}

//書き方２
let obj = {
    data:'第一种暴露方式:module.exports = value',
    test001(){
        console.log(this.data);
    }
}

