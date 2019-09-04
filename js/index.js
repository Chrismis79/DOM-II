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

const mainNav = document.querySelector('.main-navigation');
mainNav.classList.add('scroll');
mainNav.classList.add('myP');
mainNav.style.position = "fixed";
const scrolling = document.querySelector('.scroll');
scrolling.style.background = "yellow";
console.log(mainNav);

window.scroll = function() {myFunction()};

function myFunction(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop> 50){
        document.getElementByclassName('myP').className = "scroll";
    }else {
        document.getElementclassName('myP').className = "";
    }
}

const headerImgAni = document.querySelector('img');
headerImgAni.addEventListener('mouseover', (e) =>{
console.log('mouse over image');
    e.target.animate([
    {transform: 'translateX(0px)'},
    {transform: 'translateX(300px)'}
], {
    duration: 1000,
    iterations: 3
})
});

const buttons = document.querySelectorAll('.btn');

buttons.forEach(element =>{
    element.addEventListener('click', (e) => {
        element.style.backgroundColor = "orange";
        e.stopPropagation();
 })
})

const destinationDiv = document.querySelectorAll('.destination');

destinationDiv.forEach(element =>{
    element.addEventListener('click', (e) =>{
        element.style.backgroundColor = "red";
        
    });
})

const homeLink = document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
});


