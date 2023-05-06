function isPalindrome(x) {
    let xLength = x.length
    for (let i = 0; i < x.length/2 ; i++) {
        let a = x.slice(i, i+1).toLowerCase() === x.slice(xLength-i-1, xLength-i).toLowerCase()
        if (!a) {
            return false
        }
    }
    return true
}

console.log(isPalindrome('madam'))

