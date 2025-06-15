function sum(a, b){
    return a+b;
}
document.write(`1과 2를 더한 값: ${sum(1, 2)}<br>`)

//익명함수로 바꿨을 때 sum2
let sum2 = function(a, b){
    return a+b;
}
document.write(`익명함수로 1과 2를 더한 값: ${sum2(1,2)}<br>`)

//화살표 함수로 바꿨을 때 sum3
let sum3 = (a, b) => {
    return a+b;
}
document.write(`화살표함수로 1과 2를 더한 값: ${sum3(1, 2)}<br>`)

//즉시실행함수로 바꿨을 때
document.write(`즉시실행함수로 1과 2를 더한 값:
    ${(function(a, b){
        return a+b;
    })(1, 2)}<br>`)