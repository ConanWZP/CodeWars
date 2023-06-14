function evalObject(value){
    var result = 0;
    switch(value.operation){
        case'+': return result = value.a + value.b;
        case'-': return result = value.a - value.b;
        case'/': return result = value.a / value.b;
        case'*': return result = value.a * value.b;
        case'%': return result = value.a % value.b;
        case'^': return result = Math.pow(value.a, value.b);
    }

}


console.log(    evalObject(   {a:1,b:1,operation:'+'}     )        )