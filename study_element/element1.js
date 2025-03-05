const del = document.getElementById('del');
const test = document.getElementById('test');
const result = document.getElementById('result');
const add = document.getElementById('add');
const result2 = document.getElementById('result2');

del.addEventListener('click', function(){
    // this.remove();
    test.remove();
})

let count=0;

add.addEventListener('click', function(){
    let b = document.createElement("button");
    // 속성 추가
    // 1. 속성 새로 만들어서 추가
    // let a = document.createAttribute("class");
    // a.value = "";
    // 2. element의 속성을 추가
    b.classList.add("btns", count);
    b.innerText="BTNS"+count;

    let a = document.createAttribute("data-item-id");
    a.value = count;
    b.setAttributeNode(a);

    result.append(b);

    b = document.createElement('div');
    b.classList.add("item", count);
    b.id = "item" + count;
    b.innerHTML = "item" + count;
    result2.append(b);

    count++;
})

result.addEventListener('click',function(e){
    if(e.target.classList.contains("btns")){
        let c = e.target.getAttribute("data-item-id");
        document.getElementById("item"+c).remove();
        e.target.remove();
}})