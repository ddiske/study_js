const btn = document.getElementById("btn");
const check = document.getElementById("check")

btn.addEventListener("mouseenter", ()=>{

    console.log(check.value);
})

btn.addEventListener("click", ()=>{
    console.log(check.setAttributeNode("value", "hidden"));
})