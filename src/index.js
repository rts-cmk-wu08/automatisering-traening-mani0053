import sectionFac from "./components/facilities/sectionFac"
import sectionAdv from "./components/advantages/sectionAdv"



let element = document.querySelector(".wrapper")
element.append(sectionFac())
element.append(sectionAdv())
console.log(element)
