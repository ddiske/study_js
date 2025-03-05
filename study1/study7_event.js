const c1 = document.getElementsByClassName("c1");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const btn2 = document.getElementById("btn2");
const frm = document.getElementById("frm");

btn2.addEventListener("click", function(){
    frm.submit();
    input2.focus();
})

// key event
input1.addEventListener("keyup", function(){
    console.log("keyup");
})

input2.addEventListener("focus", function(){
    console.log("focus");
    input2.style.backgroundColor = "blue";
})

input2.addEventListener("blur", function(){
    console.log("blur");
    input2.style.backgroundColor = "yellow";
})

input3.onchange = function(){
    console.log("change");
}

input4.onchange = function(){
    console.log("select");
}




// event 등록 => Element에만 등록 가능

for(let c of c1) {
    c.addEventListener("click", function(){
        console.log(c.innerHTML);
    })
}

// ========================================

const btn = document.getElementById("btn");
const p1 = document.getElementById("p1");

btn.addEventListener("click", function(){
    // 1. 변수명.속성명
    console.log(p1.type);
    // 2. getAttribute("속성명")
    console.log(p1.getAttribute("name"));
    console.log(p1.value)
})

