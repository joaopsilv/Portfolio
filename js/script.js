/* Navbar Movment */


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
    textcss.style.opacity="1"
})
card2.addEventListener("mouseout", ()=> {
    explainment.style.opacity="1"
    textcss.style.opacity="0"
})

card3.addEventListener("mouseover", ()=> {
    explainment.style.opacity="0"
    textjs.style.opacity="1"
})
card3.addEventListener("mouseout", ()=> {
    explainment.style.opacity="1"
    textjs.style.opacity="0"
})

card4.addEventListener("mouseover", ()=> {
    explainment.style.opacity="0"
    textjava.style.opacity="1"
})
card4.addEventListener("mouseout", ()=> {
    explainment.style.opacity="1"
    textjava.style.opacity="0"
})

card5.addEventListener("mouseover", ()=> {
    explainment.style.opacity="0"
    textspring.style.opacity="1"
})
card5.addEventListener("mouseout", ()=> {
    explainment.style.opacity="1"
    textspring.style.opacity="0"
})

card6.addEventListener("mouseover", ()=> {
    explainment.style.opacity="0"
    textmysql.style.opacity="1"
})
card6.addEventListener("mouseout", ()=> {
    explainment.style.opacity="1"
    textmysql.style.opacity="0"
})