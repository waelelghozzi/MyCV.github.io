

document.addEventListener("DOMContentLoaded", function() {
    // Your code here

const button = document.querySelectorAll('.link');
const gal = document.querySelector('.gal');

button.forEach((e)=>{
    e.addEventListener("click", ()=>{
    gal.style.display = 'block';
});
})

gal.addEventListener("click", ()=>{
    gal.style.display = 'none';
});  });