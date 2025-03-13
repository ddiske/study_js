const result = document.getElementById("result")
const getList = document.getElementById("getList")
const table = document.createElement("table")
table.appendChild(document.createElement("thead")).setAttribute("id", "thead")
table.appendChild(document.createElement("tbody")).setAttribute("id", "tb")
table.setAttribute("class", "table table-striped table-success")

getList.addEventListener("click", ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(r=>r.json())
    .then(r=>{
        result.appendChild(table)
        let thead = document.getElementById("thead")
        thead.appendChild(document.createElement("tr")).setAttribute("id", "th")
        let th = document.getElementById("th")
        th.appendChild(document.createElement("th")).append("userId")
        th.appendChild(document.createElement("th")).append("id")
        th.appendChild(document.createElement("th")).append("title")
        th.appendChild(document.createElement("th")).append("body")
        let tb = document.getElementById("tb")
        
        r.forEach((element, idx) => {
            tb.appendChild(document.createElement("tr")).setAttribute("id", "tr"+idx)
            let td = document.getElementById("tr"+idx)
            let t1 = td.appendChild(document.createElement("td"))
            t1.append(element.userId)
            let t2 = td.appendChild(document.createElement("td"))
            t2.append(element.id)
            t2.setAttribute("id", "ti"+idx)
            let a = document.createElement("a")
            a.innerText = element.title
            a.setAttribute("data-bs-toggle", "modal")
            a.setAttribute("data-bs-target", "#exampleModal")
            a.setAttribute("id", element.id)
            a.classList.add("ti")
            
            let t3 = td.appendChild(document.createElement("td"))
            t3.append(a)
            let t4 = td.appendChild(document.createElement("td"))
            t4.append(element.body)
        })
    })
    
})

result.addEventListener("click", (e)=>{
    let t_title = document.getElementById("t_title")
    let t_body = document.getElementById("t_body")
    let t_id = document.getElementById("t_id")

    if(e.target.classList.contains('ti')){
        modalClick(e.target.getAttribute("id"))
    }

})

function modalClick(num){
    fetch('https://jsonplaceholder.typicode.com/posts/'+num)
    .then(r=>r.json())
    .then(json=>{
        t_title.innerText=json.title
        t_body.innerText=json.body
        t_id.innerText=json.userId+"_"+json.id
    })
}

// data-bs-toggle="modal" data-bs-target="#exampleModal"