function generateLink(user) {
    let a = encodeURIComponent(user)
    return `http://www.codewars.com/users/${a}`
}


console.log(     generateLink('g9 64')     )