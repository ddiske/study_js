// 배열
// java 배열과는 다름, List에 더 가깝다
// 빈 배열을 만드는 방법
let ar = new Array();
let ar2 = []; // 권장

// 
let ar3 = [3, 1, 2, true, "hello", 'name'];

// Data 추가
// push 배열 끝에 추가 후 새로운 length를 리턴
ar3.push('push');
// unshift 배열 앞에 추가하고 새로운 length를 리턴
ar3.unshift('unshift');

// Data 삭제
// pop 배열 마지막 요소를 삭제하고 그 요소를 리턴
ar3.pop();
// shift 배열 첫번째 요소를 삭제하고 그 요소를 리턴
ar3.shift();

// 정렬 오름차순 (내림차순 sort - reverse)
ar3.sort();

// 순서 변경
ar3.reverse();

// Data 포함 여부
console.log("포함여부 : ", ar3.includes(3));

// foreach
// foreach(function(변수명1, 변수명2, 배열의 변수명){
//  변수명1 : 배열에서 꺼낸 값(필수)
//  변수명2 : 인덱스 번호(option)
//  배열의 변수명 : 전체 배열(option)
// })
ar3.forEach(function(a, i){
    console.log("a : ", a);
    console.log("i : ", i)
})


for(let i = 0; i < ar3.length; i++) {
    console.log(ar3[i]);
}

for(let i of ar3) {
    console.log(i);
}