// event
// 마우스를 클릭 했을 때
// 입력했을 때
// 웹브라우저의 크기를 늘이거나 줄였을 때

// 1. 마우스 이벤트
//  a. 좌클릭
//  b. 우클릭
//  c. 더블클릭...등등

// 2. 키보드 이벤트
//  a. 키보드의 키를 눌렀을 때
//  b. 키보드의 키를 눌렀다가 뺐을 때

// 3. Form 이벤트
//  a. submit
//  b. reset


const d1 = document.getElementById('d1');

let images = ['i1.jpeg', 'i2.jpeg', 'i3.jpeg', 'i4.jpeg'];

// event 등록
// 1. on 이벤트명
d1.onclick = function(){
    console.log("CLICK");
}

d1.oncontextmenu = right;

function right() {
    console.log("right")
}

// 2. eventListener로 event 등록
// 선택자.addEventListener("이벤트명", 실행할 함수)
d1.addEventListener("mouseenter", function(){
    console.log("mouse enter")
})
// mouseLeave
d1.addEventListener("mouseleave", leave)

function leave() {
    console.log("mouse leave")
}

const btn1 = document.getElementById('btn1');
btn1.addEventListener("click", img);

function img() {
    d1.innerHTML = "<img src='./images/book.jpg'>";
    console.log("CLICK");
}

const btn2 = document.getElementById('btn2');


btn2.addEventListener("click", function () {
    let a = 0;
    
    d1.innerHTML = "<img src='./images/"+images[a%4]+"'>";
    console.log(d1.innerHTML);
    a++;
})