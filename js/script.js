/* Navbar Movment */
let header = document.querySelector("header")
let prevScroll = window.scrollY

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > prevScroll && header.classList.contains("dark-header")){
        header.classList.add("sticky")
        header.classList.add("dark-sticky")
    }
    else if(window.pageYOffset > prevScroll && header.classList.contains("light-header")){
        header.classList.add("sticky")
        header.classList.add("light-sticky")
    }
    else{
        header.classList.remove("sticky")
    }

    let currentScroll = window.pageYOffset
    if(currentScroll > 625){
        header.classList.add("out")
    }
    else{
        header.classList.remove("out")
    }
})

/* Switch Toggle */
let switchToggle = document.getElementsByClassName("switch-toggle")[0]
let icon = document.querySelector(".fas")

let body = document.querySelector("body")

let sections = document.querySelectorAll(".content")

let navItens = document.querySelectorAll(".navLink-color")
let navTitle = document.querySelector(".navTitle-color")

let main = document.querySelector(".main")
let firstButton = document.querySelector(".first-button")
let firstButtonAlter = document.querySelector(".first-button-alter")

let aboutContent = document.querySelector(".text-about")
let curric = document.querySelector(".text-about a")
let aboutCards = document.querySelectorAll(".card-about article")
let aboutCardsTitles = document.querySelectorAll(".card-about h1")
let aboutCardsSubtitles = document.querySelectorAll(".card-about p")

let projectTitle = document.querySelector(".title-projects h1")
let projectsCards = document.querySelectorAll(".cards-projects article")
let projectsCardsTitles = document.querySelectorAll(".card-projects h1")
let projectsCardsSubtitles = document.querySelectorAll(".card-projects p")
let projectsCardsImages = document.querySelectorAll(".card-projects img")
let projectsCardsButtons = document.querySelectorAll(".card-projects button")

let knowledgesTitle = document.querySelector(".text-skills h1")
let knowledgesTexts = document.querySelectorAll(".text-skills p")
let knowledgesCards = document.querySelectorAll(".cards-skills article")
let knowledgesSubcards = document.querySelectorAll(".cards-skills span")

let footerContent = document.querySelector(".footer-content")
let footerTexts = document.querySelectorAll(".footer-content p")

switchToggle.addEventListener("click", ()=>{
    /*Switch Toggle*/
    icon.classList.toggle("fa-moon")
    icon.classList.toggle("fa-circle")
    icon.classList.toggle("switch-animation")
    switchToggle.classList.toggle("changebg")

    /* Body - Config */
    body.classList.toggle("dark-body")
    body.classList.toggle("light-body")

    /* Section - Config */
    for (let i = 0; i < sections.length; i++){
        sections[i].classList.toggle("dark-section")
        sections[i].classList.toggle("light-section")
    }

    /* Header - Navbar */
    header.classList.toggle("dark-header")
    header.classList.toggle("light-header")
    header.classList.remove("dark-sticky")
    header.classList.remove("light-sticky")
    for (let i = 0; i < navItens.length; i++){
        navItens[i].classList.toggle("dark-font")
        navItens[i].classList.toggle("light-font")
    }
    navTitle.classList.toggle("dark-font")
    navTitle.classList.toggle("light-font")

    /* Main */
    main.classList.toggle("dark-font")
    main.classList.toggle("light-font")
    firstButton.classList.toggle("dark-button1")
    firstButton.classList.toggle("light-button1")
    firstButtonAlter.classList.toggle("dark-button2")
    firstButtonAlter.classList.toggle("light-button2")

    /* Section About */
    aboutContent.classList.toggle("dark-font")
    aboutContent.classList.toggle("light-font")
    curric.classList.toggle("dark-font")
    curric.classList.toggle("light-font")
    for (let i = 0; i < aboutCards.length; i++){
        aboutCards[i].classList.toggle("dark-card")
        aboutCards[i].classList.toggle("light-card")
    }
    for (let i = 0; i < aboutCardsTitles.length; i++){
        aboutCardsTitles[i].classList.toggle("dark-font")
        aboutCardsTitles[i].classList.toggle("light-font")
    }
    for (let i = 0; i < aboutCardsSubtitles.length; i++){
        aboutCardsSubtitles[i].classList.toggle("weakgrey-font")
        aboutCardsSubtitles[i].classList.toggle("mediumgrey-font")
    }
        
    /* Section Projects */
    projectTitle.classList.toggle("dark-font")
    projectTitle.classList.toggle("light-font")
    for (let i = 0; i < projectsCards.length; i++){
        projectsCards[i].classList.toggle("dark-card")
        projectsCards[i].classList.toggle("light-card")
    }
    for (let i = 0; i < projectsCardsTitles.length; i++){
        projectsCardsTitles[i].classList.toggle("dark-font")
        projectsCardsTitles[i].classList.toggle("light-font")
    }
    for (let i = 0; i < projectsCardsSubtitles.length; i++){
        projectsCardsSubtitles[i].classList.toggle("weakgrey-font")
        projectsCardsSubtitles[i].classList.toggle("mediumgrey-font")
    }
    for (let i = 0; i < projectsCardsImages.length; i++){
        projectsCardsImages[i].classList.toggle("dark-img")
        projectsCardsImages[i].classList.toggle("light-img")
    }
    for (let i = 0; i < projectsCardsButtons.length; i++){
        projectsCardsButtons[i].classList.toggle("dark-button")
        projectsCardsButtons[i].classList.toggle("light-button")
    }

    /* Section Knowledges */
    knowledgesTitle.classList.toggle("dark-font")
    knowledgesTitle.classList.toggle("light-font")
    for (let i = 0; i < knowledgesTexts.length; i++){
        knowledgesTexts[i].classList.toggle("dark-font")
        knowledgesTexts[i].classList.toggle("light-font")
    }
    for (let i = 0; i < knowledgesCards.length; i++){
        knowledgesCards[i].classList.toggle("dark-card")
        knowledgesCards[i].classList.toggle("light-card")
    }
    for (let i = 0; i < knowledgesSubcards.length; i++){
        knowledgesSubcards[i].classList.toggle("dark-card-span")
        knowledgesSubcards[i].classList.toggle("light-card-span")
    }
    
    /* Footer - Credits */
    footerContent.classList.toggle("dark-footer")
    footerContent.classList.toggle("light-footer")
    for (let i = 0; i < footerTexts.length; i++){
        footerTexts[i].classList.toggle("weakgrey-font")
        footerTexts[i].classList.toggle("mediumgrey-font")
    }

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