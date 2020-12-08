Array.prototype.repeat = function (n) {
    var retVal = [];
    for (var i = 1; i <= n; i++) {
        for (var j = 0; j < this.length; j++) {
            retVal.push(this[j]);
        }
    }

    return retVal;
};


