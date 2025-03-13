const btn = document.getElementById("btn")
const comments = document.getElementById("comments")
const add = document.getElementById("add")
const title = document.getElementById("title")
const body = document.getElementById("body")
const userId = document.getElementById("userId")

btn.addEventListener("click", ()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/3")
    .then(r => r.json())
    .then(r => {
        console.log(r.id)
        console.log(r.title)
    })
})

comments.addEventListener("click", ()=>{
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
    .then(r=>r.json())
    .then(r=>{
        r.foreach((element, idx) => {
            console.log(element.name)
        });
    })
})

add.addEventListener("click", ()=>{
    let params = {
        title : title.value,
        body: body.value,
        userId: userId.value
    }

    // json 문자열로 변환
    params = JSON.stringify(params)
    console.log(params)

    // json 문자열을 json 객체로 변경
    let p = JSON.parse(params)

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: params,
        // JSON.stringify({
        //   title: title.value,
        //   body: body.value,
        //   userId: userId.value,
        // }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
})
