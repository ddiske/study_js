console.log("start");

// 데이터타입과 변수 선언
// 문자열(string), 숫자(number), 논리(boolean)
// 데이터타입 변수명

var num;
console.log(typeof(num));
num = 1;
console.log(typeof(num));
num = 1.21;
console.log(typeof(num));
num = "hello";
num = 'hello2'; // 문자열은 "", '' 다 사용 가능능
console.log(typeof(num));
num = true;
console.log(typeof(num));

// var => Hoisting 문제점 발생

let num2 = 2;

const num3 = 3; // 상수
// num3 = 5;


// 연산자
// +, -, *, /, %
// >, <, <=, >=, ==, !=
// === 값과 타입이 같으면 true
// !==
console.log(1 == "1");
console.log(1 === "1");

// &&, ||, !
// ++, --
console.log(num2++);
console.log(++num2);

// 제어문
// 조건문
if(true) {};
if(true) {}else {};
if(true) {}else if(true){};
// switch(true) {
//     case :
//     break;

//     default;
// }

// 반복문
for(let i = 0; i < 10; i++) {

}

// ar 향for
for(let a of ar) {

}

// 객체의 멤버들을 순환해서 접근
// test 객체
for(let a in test) {

}

while(true) {

}




