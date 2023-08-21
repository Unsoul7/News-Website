// API : application programming interface

// JS -------API--------> Json
const articles = []

let api = 'https://newsapi.org/v2/everything?q=india&from=2023-07-21&sortBy=publishedAt&apiKey=8f24c4a0e3854247a762455a073ab483'

fetch(api)
.then(data => data.json() )
.then(jsonData =>{ articles.push(...jsonData.articles)
NewsFailao()})


function NewsFailao(){
    articles.forEach(newsitem => 
        createCard(newsitem.urlToImage,newsitem.title)
)
}

function createCard(imageUrl,title){
    const card = document.createElement('div')
    card.setAttribute('class','card')

    const image = document.createElement('div')
    image.setAttribute('class','img')
    image.setAttribute('style',`background-image : url(${imageUrl})`)

    const titleCard = document.createElement('h3')
    titleCard.setAttribute('class','title')
    titleCard.innerText = title

    card.appendChild(image)
    card.appendChild(titleCard)

    document.getElementById('main').appendChild(card)
}


