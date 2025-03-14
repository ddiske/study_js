const list = document.getElementById("list")
const getList = document.getElementById("getList")

getList.addEventListener("click", ()=>{
    fetch("https://fakestoreapi.com/products")
    .then(r=>r.json())
    .then(r=>{
        r.forEach((element, idx) => {
            let card = document.createElement("div")
            card.classList.add("card", "mb-3")

            let img = document.createElement("img")
            img.src = element.image
            img.classList.add("card-img-top")
            card.appendChild(img)

            let body = document.createElement("div")
            body.classList.add("card-body")
            card.appendChild(body)

            let cTitle = document.createElement("h5")
            cTitle.classList.add("card-title")
            cTitle.innerText = element.title
            body.appendChild(cTitle)

            let cText = document.createElement("p")
            cText.classList.add("card-text")
            cText.innerText = "Category : "+element.category+' $'+element.price
            body.appendChild(cText)

            let cText2 = document.createElement("p")
            cText2.classList.add("card-text")
            cText2.innerText = "Rate : "+element.rating.rate+" Count : "+element.rating.count
            body.appendChild(cText2)

            let btn = document.createElement("a")
            btn.classList.add("btn", "btn-primary")
            btn.href = "#"
            btn.setAttribute("id", element.id)
            btn.setAttribute("data-bs-toggle", "modal")
            btn.setAttribute("data-bs-target", "#exampleModal")
            body.appendChild(btn)
            btn.innerText = "getDetail"

            list.appendChild(card)
        });
    })
})

list.addEventListener("click", (e)=>{
    let t_title = document.getElementById("t_title")
    let t_body = document.getElementById("t_body")
    let t_id = document.getElementById("t_id")

    if(e.target.classList.contains("btn")){
        fetch("https://fakestoreapi.com/products/"+e.target.id)
        .then(r=>r.json())
        .then(r=>{
            t_title.innerText = r.title
            t_body.innerText = r.description
            
            let img = document.createElement("img")
            img.classList.add("img-fluid")
            img.src = r.image
            t_body.appendChild(img)
            
            t_id.innerText = "$"+r.price
        })
    }
})