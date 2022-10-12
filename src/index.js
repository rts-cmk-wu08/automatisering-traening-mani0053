import sectionFac from "./components/sectionFac"
import section from "./components/section.js"



let element = document.querySelector(".wrapper")
element.append(sectionFac())
element.append(section())
console.log(element)
