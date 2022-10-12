let advArticle = function (advantage) {
  let element = document.createElement("article");
  element.classList.add("adv-article");

  element.innerHTML = `
  <img class="adv-article__img" src="${advantage.icon}" alt="" />
        <h3 class="adv-article__headline">${advantage.headline}</h3>
        <p class="adv-article__text">${advantage.text}</p>
`
return element
}

export default advArticle
