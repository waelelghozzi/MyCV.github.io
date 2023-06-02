

document.addEventListener("DOMContentLoaded", function() {


const button1 = document.querySelector('.link1');
const button2 = document.querySelector('.link2');
const gal = document.querySelector('.gal');
const letters = document.querySelector('.letters');

    button1.addEventListener("click", ()=>{
        letters.style.display = 'block';
});

button2.addEventListener("click", ()=>{
    gal.style.display = 'block';
});




gal.addEventListener("click", ()=>{
    gal.style.display = 'none';
});  
letters.addEventListener("click", ()=>{
    letters.style.display = 'none';
});  
});