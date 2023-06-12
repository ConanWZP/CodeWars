var Calculator = {
    add: function (x, y) {
        return x + y
    },

    subtract: function (x, y) {
        return x - y;
    },
    multiply: function (x, y) {
        return x * y
    },
    divide: function (x, y) {
        return y === 0 ? false : x / y;
    }
};

