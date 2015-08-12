// 数据存储中心
// ===========
// zhangshibing@baidu.com
// 2015/07/17

var Data = {
    set: function(n, v) {
        Data.data[n] = v;

        return true;
    },

    data: {},

    get: function(n) {
        return Data.data[n];
    }
};

module.exports = Data;
