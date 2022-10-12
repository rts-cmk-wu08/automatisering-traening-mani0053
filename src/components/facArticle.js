let facArticle = function (facilities) {
  let element = document.createElement("article");
  element.classList.add("fac-article");

  element.innerHTML = `
    <img class="fac-article__img" src="${facilities.icon}" alt=""/>
    <h3 class="fac-article__headline">${facilities.headline}</h3>
    <p class ="fac-article__text">${facilities.text}</p>
    <a class="fac-article__btn" href="">Show me more</a>
    `;
  return element;
};
export default facArticle;
