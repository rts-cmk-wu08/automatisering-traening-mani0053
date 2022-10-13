import advSection from "./advSection.js"
import "../section.scss"

let section = function(){

    let element = document.createElement('section')
    element.classList.add("section")

    element.innerHTML = `
    <h2 class="section__headline">Our Advantages</h2>
    `
    element.append(advSection())
    return element
}

export default section