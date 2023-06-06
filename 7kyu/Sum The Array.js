Array.prototype.sum = function() {
    console.log(this)
    let c = 0
    for (let i = 0; i < this.length; i++) {
        c += this[i]
    }
    return c
};

