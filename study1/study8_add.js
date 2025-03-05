const add_btn = document.getElementById("add_btn");
const list = document.getElementById("list");

// add_form 버튼을 클릭하면
// form 태그 생성하고 action의 주소는 ./test
// method 형식은 "POST"로 생성
// div#id에 추가
const add = document.getElementById("add");
const add_form = document.getElementById("add_form");

add_btn.addEventListener("click", function(){
    // <li></li>
    let li = document.createElement('li');
    // <li>c</li>
    li.innerHTML = 'c';

    // class = "blue"
    let c = document.createAttribute("class");
    c.value = 'blue';
    // <li class="blue">
    li.setAttributeNode(c);

    list.prepend(li);

})


add_form.addEventListener("click", function(){
    let form = document.createElement('form');
    let action = document.createAttribute("action");
    action.value = "./test";
    let method = document.createAttribute("method");
    method.value = "POST";

    form.setAttributeNode(action);
    form.setAttributeNode(method);

    add.append(form);

    // <input>
    let input = document.createElement('input');
    let type = document.createAttribute('type');
    type.value = "text";

    form.append(input);
})