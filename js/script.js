/* Navbar Movment */
let navbar = document.querySelector(".navbar")


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
    explainment.style.display="none"
    texthtml.style.display="block"
})
card1.addEventListener("mouseout", ()=> {
    explainment.style.display="block"
    texthtml.style.display="none"
})

card2.addEventListener("mouseover", ()=> {
    explainment.style.display="none"
    textcss.style.display="block"
})
card2.addEventListener("mouseout", ()=> {
    explainment.style.display="block"
    textcss.style.display="none"
})

card3.addEventListener("mouseover", ()=> {
    explainment.style.display="none"
    textjs.style.display="block"
})
card3.addEventListener("mouseout", ()=> {
    explainment.style.display="block"
    textjs.style.display="none"
})

card4.addEventListener("mouseover", ()=> {
    explainment.style.display="none"
    textjava.style.display="block"
})
card4.addEventListener("mouseout", ()=> {
    explainment.style.display="block"
    textjava.style.display="none"
})

card5.addEventListener("mouseover", ()=> {
    explainment.style.display="none"
    textspring.style.display="block"
})
card5.addEventListener("mouseout", ()=> {
    explainment.style.display="block"
    textspring.style.display="none"
})

card6.addEventListener("mouseover", ()=> {
    explainment.style.display="none"
    textmysql.style.display="block"
})
card6.addEventListener("mouseout", ()=> {
    explainment.style.display="block"
    textmysql.style.display="none"
})