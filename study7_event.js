const c1 = document.getElementsByClassName("c1");

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