// Your code goes here

window.addEventListener('resize', (e) =>{
    const body = document.querySelector('body');
    body.style.background = "yellow";
})

const heading = document.querySelector('.logo-heading');
heading.addEventListener('mouseover', () => {
    heading.style.color='red';    
})
heading.addEventListener('mouseleave',()=>{
    heading.style.color='black';
})

const navLinks = document.querySelectorAll('.nav-link');
console.log(navLinks);
navLinks.forEach(item => {
    item.addEventListener('mouseover', e =>{
        item.style.color="red";
    })
})
navLinks.forEach(item => {
    item.addEventListener('mouseleave', e =>{
        item.style.color="black";
    })
})
const welcomeAni = document.querySelector('h2');
welcomeAni.addEventListener('dblclick', (e) =>{
e.target.animate([
    {transform: 'translateY(0px)'},
    {transform: 'translateY(-300px)'}
], {
    duration: 1000,
    iterations: 3
})
});
