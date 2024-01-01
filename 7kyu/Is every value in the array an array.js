const arrCheck = (value) => {
    console.log(value)
    const a = value.map(e => {
        console.log(Array.isArray(e))
        return !!Array.isArray(e);
    })
    return !a.includes(false)
}


console.log(     arrCheck([])      )