import sectionFac from "./components/facilities/sectionFac"
import sectionAdv from "./components/advantages/sectionAdv"
import ContactForm from "./components/ContactForm.js"



let element = document.querySelector(".wrapper")
element.append(sectionFac())
element.append(sectionAdv())
console.log(element)
element.append(ContactForm())
