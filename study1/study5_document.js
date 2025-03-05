
// HTML의 Element 가져오기

let d1 = window.document.getElementById('d1');
let d2 = window.document.getElementById('d2');
const a1 = document.getElementsByClassName('a1');
const c2 = document.getElementsByClassName('c2');

console.log(d1);
// innerText => 변수 contents 영역의 text를 추출
// alert(d1);
console.log(d1.innerText);
d1.innerText = 'Change';

// innerHTML => 변수 : contents 영역의 element를 추출
console.log(d2.innerHTML);
d2.innerHTML = '<input type="text">';

for(let a of a1) {
    console.log(a.innerText);
}

c2[0].innerText = "test";