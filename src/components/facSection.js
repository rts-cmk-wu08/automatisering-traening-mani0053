import {facilities} from "../data.js"
import facArticle from "./facArticle.js"
import "./facSection.scss"

console.log(facilities.headline)
let facSection = function (){
    let element = document.createElement('div')
    element.classList.add('facilities')

    facilities.options.forEach(facility => {
        element.append(facArticle(facility))
    })

    return element

}
export default facSection