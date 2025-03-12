// 일반 자바스크립트와 혼용 가능
const id1 = document.getElementById("id1");

id1.addEventListener("click", ()=>{
    console.log("click1");
})


// jquery
// ${"CSS선택자형식"}.함수()
$("#id2").click(()=>{
    console.log("click2");
})

$(".btn").click((e)=>{
    console.log($(e.target).html());
})

$("#input1").focus(()=>{});
$("#input1").blur(()=>{});

$("#input1").on({
    "focus": ()=>{},
    "blur": ()=>{}
})

$("#result").on("click", "#child", ()=>{

})