//var를 썼을 때/ 안썼을 때 구분하기!
function greeting(){
    hi = "hello"
}
greeting()
document.write(`greeting 함수 실행: ${hi}<br>`)

//let으로 전역변수 선언
let bye = "bye"
function greeting2(){
    document.write(`greeting2 함수 실행: ${bye}<br>`)
}
greeting2();

function change(){
    bye = "bye bye";
}
change();
document.write(`change 함수 실행: ${bye}<br>`);
