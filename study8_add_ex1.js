const add_btn = document.getElementById("add_btn");
const num = document.getElementById("num");
const title = document.getElementById("title");
const tbody = document.getElementById("tbody");

add_btn.addEventListener("click", function(){
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let td2 = document.createElement('td');

    tbody.append(tr);
    td.innerHTML = num.value;
    tr.append(td);
    td2.innerHTML = title.value
    tr.append(td2);
})