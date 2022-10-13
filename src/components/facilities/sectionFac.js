import {facilities} from "../../data.js"
import facSection from "./facSection.js"
import "../section.scss"
import "./facSection.scss"

let section = function(){

    let element = document.createElement('section')
    element.classList.add("sectionFac")

    element.innerHTML = `
    <h2 class="sectionFac__headline">${facilities.headline}</h2>
    `
    element.append(facSection())
    return element
}

export default section