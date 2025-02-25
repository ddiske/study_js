// 내장객체
// BOM DOM
// 1. BOM(Browser Object Model)
// 참조변수명.멤버

// a. windows 객체
// window는 생략 가능
window.alert('hello');

let message = window.prompt('입력');
console.log(message);

message = window.confirm("확인");
console.log(message);

window.setTimeout(function(){
    console.log('timeout')
}, 1000);

// window.setInterval(function(){
//     console.log('interval')
// }, 1000)

window.clearTimeout();
window.clearInterval();