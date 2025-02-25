// 함수 function
// method   : OOP언어에서 클래스의 멤버
// function : 단독 선언된 코드의 묶음

// 함수 선언
// 명명함수(이름이 있는 함수) : function 함수명(매개변수들 선언){return}

// f1(); 선언 전에 호출 가능
// 전역 변수
let a = 2;

function f1(b){
    // 지역 변수
    let a = 1;
    console.log('f1');
    console.log(a);
    console.log(b);
}

// 함수 호출
// 호출할 함수명();
f1(a);
console.log(a);


// f2(); 선언전에 호출 불가

// 익명함수(이름이 없는 함수)
let f2 = function(){
    console.log('익명함수');
}

// f2();

function f3(f){
    f();
}

f3(f2);

f3(function(){

})