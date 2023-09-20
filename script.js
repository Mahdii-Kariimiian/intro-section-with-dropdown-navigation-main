const hamburgerMenu = document.getElementById("hamburger-menu")
const hamburgerMenuX = document.getElementById ("hamburger-menu-x")
const cloned = document.querySelector(".cloned")
const overlay = document.querySelector(".overlay")



/* hamburger menu */
hamburgerMenu.addEventListener ("click" , ()=>{
    cloned.classList.remove("hidden-display")
    overlay.classList.remove("hidden-display")
})

hamburgerMenuX.addEventListener ('click' , ()=> {

    cloned.classList.add("hidden-display")
    overlay.classList.add("hidden-display")
})

/* menu drop down */

const featureDropDown = document.querySelectorAll(".feature-dropDown")
const companyDropDown = document.querySelectorAll(".company-dropDown")
const featureDropDownul = document.querySelector(".feature-dropDown-ul")
const companyDropDownul = document.querySelector(".company-dropDown-ul")
const featureDropDownulCloned = document.querySelector(".feature-dropDown-ul-cloned")
const companyDropDownulCloned = document.querySelector(".company-dropDown-ul-cloned")
const featureDown = document.querySelector(".feature-down")
const featureup = document.querySelector(".feature-up")
const companyDown = document.querySelector(".company-down")
const companyup = document.querySelector(".company-up")
const featureDownCloned = document.querySelector(".feature-down-cloned")
const featureupCloned = document.querySelector(".feature-up-cloned")
const companyDownCloned = document.querySelector(".company-down-cloned")
const companyupCloned = document.querySelector(".company-up-cloned")

featureDropDown.forEach ((event) => {
    console.log(event)
    event.addEventListener ("click" , (e)=>{
        featureDropDownul.classList.toggle("hidden-display")
        featureDropDownulCloned.classList.toggle("hidden-display")
        featureDown.classList.toggle("hidden-display")
        featureup.classList.toggle("hidden-display")
        featureDownCloned.classList.toggle("hidden-display")
        featureupCloned.classList.toggle("hidden-display")
    })
})

companyDropDown.forEach((event) =>{
    event.addEventListener ("click" , ()=>{
        companyDropDownul.classList.toggle("hidden-display")
        companyDropDownulCloned.classList.toggle("hidden-display")
        companyDown.classList.toggle("hidden-display")
        companyup.classList.toggle("hidden-display")
        companyDownCloned.classList.toggle("hidden-display")
        companyupCloned.classList.toggle("hidden-display")
    })
})
