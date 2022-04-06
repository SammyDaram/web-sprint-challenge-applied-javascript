import axios from "axios";
// TASK 5
// ---------------------
// Implement this function, which should return the markup you see below.
// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// <div class="card">
//   <div class="headline">{ headline }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ authorPhoto }>
//     </div>
//     <span>By { authorName }</span>
//   </div>
// </div>
//
const Card = (article) => {
  const cardCard = document.createElement("div");
  const cardHeadline = document.createElement("div");
  const cardAuthor = document.createElement("div");
  const cardImage = document.createElement("div");
  const image = document.createElement("img");
  const cardAuthorName = document.createElement("span");

  cardImage.appendChild(image)

  cardCard.appendChild(cardHeadline);
  cardCard.appendChild(cardAuthor);
  cardAuthor.appendChild(cardImage);
  cardAuthor.appendChild(cardAuthorName);

  cardCard.classList.add("card");
  cardHeadline.classList.add("headline");
  cardAuthor.classList.add("author");
  cardImage.classList.add("img-container");
  image.src = article.authorPhoto;

  cardHeadline.textContent = article.headline;
  //cardImage. = article.authorPhoto;
  cardAuthorName.textContent = article.authorName;

  return cardCard;
};

document.body.addEventListener ('click', evt => {
  evt. target.classList.toggle ('card')
})

// TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
class article {
  constructor(headline, photo, author) {
    this.headline = headline;
    this.authorName = author;
    this.authorPhoto = photo;
}

}

const cardAppender = (selector) => {
  const myCards = document.querySelector(selector);
  //var tabsList = new Array["javaSCript", "BootStrap", "Angular"];
  //var tabsList;

  axios
    .get("http://localhost:5001/api/articles")
    .then((res) => {
      console.log(res.data.topics);
      //tabsList = res.data.topics;
      //var cardList;

      res.data.articles.javascript.forEach((card) => {
        
        //cardList = document.createElement("div");
        //cardList.classList.add("tab");
        const myArticle = new article(card.headline, card.authorPhoto, card.authorName)
        console.log(myArticle.authorName + ' -- ' + myArticle.headline)
        //cardList.textContent = card;
        
        const thisCard = Card(myArticle);

        myCards.appendChild(thisCard);
      });

      res.data.articles.bootstrap.forEach((card) => {
        
        //cardList = document.createElement("div");
        //cardList.classList.add("tab");
        const myArticle = new article(card.headline, card.authorPhoto, card.authorName)
        console.log(myArticle.authorName + ' -- ' + myArticle.headline)
        //cardList.textContent = card;
        
        const thisCard = Card(myArticle);

        myCards.appendChild(thisCard);
      });

      res.data.articles.technology.forEach((card) => {
        
        //cardList = document.createElement("div");
        //cardList.classList.add("tab");
        const myArticle = new article(card.headline, card.authorPhoto, card.authorName)
        console.log(myArticle.authorName + ' -- ' + myArticle.headline)
        //cardList.textContent = card;
        
        const thisCard = Card(myArticle);

        myCards.appendChild(thisCard);
      }); 
      
      res.data.articles.jquery.forEach((card) => {
        
        //cardList = document.createElement("div");
        //cardList.classList.add("tab");
        const myArticle = new article(card.headline, card.authorPhoto, card.authorName)
        //console.log(myArticle.authorName + ' -- ' + myArticle.headline)
        //cardList.textContent = card;
        
        const thisCard = Card(myArticle);

        myCards.appendChild(thisCard);
      });   

      res.data.articles.node.forEach((card) => {
        
        //cardList = document.createElement("div");
        //cardList.classList.add("tab");
        const myArticle = new article(card.headline, card.authorPhoto, card.authorName)
        //console.log(myArticle.authorName + ' -- ' + myArticle.headline)
        //cardList.textContent = card;
        
        const thisCard = Card(myArticle);

        myCards.appendChild(thisCard);
      });   

    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log("IT'S WORKING CARDS");
    });

  // myTabs.appendChild(Tabs(tabsList));
};

export { Card, cardAppender };
