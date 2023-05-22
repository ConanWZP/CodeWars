function ensureQuestion(s) {
    if (s.includes('?')) {
        return s
    } else {
        return  `${s}?`
    }

}

console.log(   ensureQuestion('Yes')  )