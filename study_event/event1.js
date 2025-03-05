// btns는 배열
const btns = document.getElementsByClassName('btns');
const result = document.getElementById('result');
const add = document.getElementById('add');

result.addEventListener('click', function(e){
    if(e.target.classList.contains('btns')){
        console.log('click');
    }
})

add.addEventListener('click', function(){
    let b = document.createElement("button");
    // 속성 추가
    // 1. 속성 새로 만들어서 추가
    // let a = document.createAttribute("class");
    // a.value = "";
    // 2. element의 속성을 추가
    b.classList.add("btns");
    b.innerText="BTNS";

    result.append(b);

})

for(let btn of btns){
    btn.addEventListener('click', function(){
        console.log("click");
    })
}