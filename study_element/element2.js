const del = document.getElementById("del");
const grand = document.getElementById("grand")

del.addEventListener('click', function(){
    console.log(grand.childNodes);
    console.log(grand.children);
    console.log(grand.firstChild.nextSibling);
    console.log(grand.lastChild.previousSibling);

    console.log(del.parentNode);
})