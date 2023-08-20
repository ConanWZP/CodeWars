function getParticipants(handshakes){

    // formula  n * (n-1) / 2 = handshakes  - Combinatorics  C(2,n)=handshakes

    // squared equal  with two solves, but we need only one

    // n^2 - n - 2*handshakes = 0

    // D = (1) ^ 2 - 4 * 1 * (-2*handshakes) = 1 + 2 * 4 * handshakes

    // n(1,2) = ( - (-1) +- sqrt(D) ) / (2 * 1)

    // we need only one solution:  where + sqrt(D) because sqrt(D) in this case > 1

    // n = ( 1 + sqrt(D) ) / 2

    return  handshakes ? Math.ceil( (1 + Math.sqrt(1 + handshakes*2*4)) /2 ) : 0
}

console.log(    getParticipants(1)       )