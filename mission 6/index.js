//const : 한번 선언한 값 변경 x
//let : 한번 선언한 값에 대해서 다시 선언x 변경은 가능
//var : 중복해서 선언 가능

function sum1(a,b){
    return a+b;
}
console.log(sum1(1,2))

let sum2 = (a,b)=>{
    return a + b;
}
console.log(sum2(1,2))