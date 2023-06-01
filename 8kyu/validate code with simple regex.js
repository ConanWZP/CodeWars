function validateCode (code) {
    let twinkleStar = code.toString()
    let starRegex = /^(1|2|3)/;
    let result = starRegex.test(twinkleStar);
    return result
}