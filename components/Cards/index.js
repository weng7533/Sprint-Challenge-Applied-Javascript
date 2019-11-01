// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//      <div class="headline">{Headline of article}</div>
//      <div class="author">
//          <div class="img-container">
//              <img src={url of authors image} />
//          </div>
//          <span>By {authors name}</span>
//      </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        const articlesArray = Object.entries(res.data.articles);
        //console.log(articlesArray);
        articlesArray.forEach(element => {
            //  console.log(element[1])
            element[1].forEach(element => {
                console.log(element);
                const CardContainer = document.querySelector('.cards-container');
                CardContainer.append(CardCreater(element));
            });

        });

    })

    .catch(error => {
        console.log("The data was not returned", error);
    })


function CardCreater(AArticle) {
    const card = document.createElement('div'),
        headline = document.createElement('div'),
        author = document.createElement('div'),
        imgContainer = document.createElement('div'),
        img = document.createElement('img'),

        span = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    card.append(headline, author);
    author.append(imgContainer, span);
    imgContainer.append(img);


    headline.textContent = AArticle.headline;
    img.setAttribute('src', AArticle.authorPhoto);
    span.textContent = AArticle.authorName;


    //img.setAttribute(src, '../assets/sir.jpg');

    return card;

}
