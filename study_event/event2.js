const parent = document.getElementById('parent');
const child = document.getElementById('child');
const go = document.getElementById('go');

go.addEventListener('click', function(event){
    event.preventDefault();
    console.log('go');
})

child.addEventListener("click", function(e){
    console.log('child');
    console.log(e.currentTarget);
    console.log(e.target);
    console.log(this);
    // e.stopPropagation();
})

parent.addEventListener("click", function(e){
    // console.log(e.currentTarget);
    // console.log(e.target);
    // console.log(this);
})
