function broken (x){
  return   x.split('').map((value) => value === '1' ? '0' : '1').join('')
}

console.log(     broken("100010")  )