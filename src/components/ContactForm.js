

let ContactForm = function() {

    let element = document.createElement('form')
    element.classList.add('contactForm')
    
    element.innerHTML = `
    <div className="contactForm_group">
        <!-- for og id hører sammen her, når man klikker  -->
        <label for='firstname'>Fornavn:</label>
        <input type ="text" name="firstname" id="firstname"/>
    </div>
        
    `
    
    return element
    }
    
    export default ContactForm