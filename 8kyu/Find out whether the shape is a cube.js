var cubeChecker = function(volume, side){
    if (side <= 0 || volume <= 0) {
        return false
    } else return side ** 3 === volume;
};