/* Navbar Movment */
let navbar = document.querySelector("header")
let position0 = window.scrollY

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > position0){
        navbar.classList.add("sticky")
    }
    else{
        navbar.classList.remove("sticky")
    }

    let currentscroll = window.pageYOffset
    if(currentscroll > 625){
        navbar.classList.add("out")
    }
    else{
        navbar.classList.remove("out")
    }
})

/* Switch Toggle */
let switchtoggle = document.getElementsByClassName("switch-toggle")[0]
let icon = document.querySelector(".fas")

switchtoggle.addEventListener("click", ()=>{
    icon.classList.toggle("fa-moon")
    icon.classList.toggle("fa-circle")
    icon.classList.toggle("switch-animation")
    switchtoggle.classList.toggle("changebg")
})


/* Skills Cards */
let explainment = document.querySelector("#card-mechanic")

let card1 = document.querySelector(".html")
let card2 = document.querySelector(".css")
let card3 = document.querySelector(".js")
let card4 = document.querySelector(".java")
let card5 = document.querySelector(".spring")
let card6 = document.querySelector(".mysql")

let texthtml = document.querySelector("#text-html")
let textcss = document.querySelector("#text-css")
let textjs = document.querySelector("#text-js")
let textjava = document.querySelector("#text-java")
let textspring = document.querySelector("#text-spring")
let textmysql = document.querySelector("#text-mysql")

card1.addEventListener("mouseover", ()=> {
    explainment.style.opacity="0"
    setTimeout(()=>{
        texthtml.style.opacity="1"
    }, 300)
})
card1.addEventListener("mouseout", ()=> {
    setTimeout(()=>{
        explainment.style.opacity="1"
    }, 300)
    texthtml.style.opacity="0"
})

card2.addEventListener("mouseover", ()=> {
    explainment.style.opacity="0"
    setTimeout(()=>{
        textcss.style.opacity="1"
    }, 300)
})
card2.addEventListener("mouseout", ()=> {
    setTimeout(()=>{
        explainment.style.opacity="1"
    }, 300)
    textcss.style.opacity="0"
})

card3.addEventListener("mouseover", ()=> {
    explainment.style.opacity="0"
    setTimeout(()=>{
        textjs.style.opacity="1"
    }, 300)
})
card3.addEventListener("mouseout", ()=> {
    setTimeout(()=>{
        explainment.style.opacity="1"
    }, 300)
    textjs.style.opacity="0"
})

card4.addEventListener("mouseover", ()=> {
    explainment.style.opacity="0"
    setTimeout(()=>{
        textjava.style.opacity="1"
    }, 300)
})
card4.addEventListener("mouseout", ()=> {
    setTimeout(()=>{
        explainment.style.opacity="1"
    }, 300)
    textjava.style.opacity="0"
})

card5.addEventListener("mouseover", ()=> {
    explainment.style.opacity="0"
    setTimeout(()=>{
        textspring.style.opacity="1"
    }, 300)
})
card5.addEventListener("mouseout", ()=> {
    setTimeout(()=>{
        explainment.style.opacity="1"
    }, 300)
    textspring.style.opacity="0"
})

card6.addEventListener("mouseover", ()=> {
    explainment.style.opacity="0"
    setTimeout(()=>{
        textmysql.style.opacity="1"
    }, 300)
})
card6.addEventListener("mouseout", ()=> {
    setTimeout(()=>{
        explainment.style.opacity="1"
    }, 300)
    textmysql.style.opacity="0"
})