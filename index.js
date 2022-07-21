const generalBtn = document.getElementById("General")
const entertainmentBtn  = document.getElementById("Entertainment")
const sportsBtn  = document.getElementById("Sports")
const technologyBtn  = document.getElementById("Technology")
const politicsBtn  = document.getElementById("Politics")
const businessBtn  = document.getElementById("Business")
const searchBtn  = document.getElementById("Search")
const inputBtn = document.getElementById("newsQuery")
const newsType  = document.getElementById("newsType")
const newsDetails  = document.getElementById("newsDetails")

// Array
var newsDataArray = [];

// APIs 
const API_KEY = "dcfa9cacf813ccac7aec5e0afd86a7e2";
const HEADLINE_NEWS = "https://api.mediastack.com/v1/news?countries=us&access_key="; 
const GENERAL_NEWS = "https://api.mediastack.com/v1/news?countries=us&categories=general&access_key=";
const HEALTH_NEWS = "https://api.mediastack.com/v1/news?countries=us&categories=health&access_key=";
const BUSINESS_NEWS = "https://api.mediastack.com/v1/news?countries=us&categories=business&access_key=";
const SPORTS_NEWS = "https://api.mediastack.com/v1/news?countries=us&categories=sports&access_key=";
const TECHNOLOGY_NEWS = "https://api.mediastack.com/v1/news?countries=us&categories=technology&access_key=";
const ENTERTAINMENT_NEWS = "https://api.mediastack.com/v1/news?countries=us&categories=entertainment&access_key=";
// const SEARCH_NEWS = "https://newsapi.org/v2/everything?q="

// http://api.mediastack.com/v1/profootballtalk?countries=us&categories=health&access_key=dcfa9cacf813ccac7aec5e0afd86a7e2&search=sports
// http://api.mediastack.com/v1/news?access_key=dcfa9cacf813ccac7aec5e0afd86a7e2&countries=us
// "Lowell Sun", "ocregister", "profootballtalk", "greeleytribune", "The New York Times"


const fetchHeadlines = async () => {
    const res = await fetch(HEADLINE_NEWS+API_KEY);
        newsDataArray = []
    if (res.status >= 200 && res.status < 300) {
        const myJson = await res.json();
        console.log(myJson)
        newsDataArray = myJson.data
    } else {
        console.log(res.status, res.statusText)

    }

    displayNews()
}


window.onload = function(){
    newsType.innerHTML = "<h4>Headlines</h4>"
    fetchHeadlines()
}

const fetchGeneralNews = async () => {
    const res = await fetch(GENERAL_NEWS+API_KEY);
        newsDataArray = []
    if (res.status >= 200 && res.status < 300) {
        const myJson = await res.json();
        console.log(myJson)
        newsDataArray = myJson.data
    } else {
        console.log(res.status, res.statusText)

    }

    displayNews()
}

const fetchEntertainmentNews = async () => {
    const res = await fetch(ENTERTAINMENT_NEWS+API_KEY);
        newsDataArray = []
    if (res.status >= 200 && res.status < 300) {
        const myJson = await res.json();
        console.log(myJson)
        newsDataArray = myJson.data
    } else {
        console.log(res.status, res.statusText)

    }

    displayNews()
}

const fetchSportsNews = async () => {
    const res = await fetch(SPORTS_NEWS+API_KEY);
        newsDataArray = []
    if (res.status >= 200 && res.status < 300) {
        const myJson = await res.json();
        newsDataArray = myJson.data
    } else {
        console.log(res.status, res.statusText)

    }

    displayNews()
}

const fetchTechnonolyNews = async () => {
    const res = await fetch(TECHNOLOGY_NEWS+API_KEY);
        newsDataArray = []
    if (res.status >= 200 && res.status < 300) {
        const myJson = await res.json();
        newsDataArray = myJson.data
    } else {
        console.log(res.status, res.statusText)

    }

    displayNews()
}

const fetchPoliticsNews = async () => {
    const res = await fetch(HEALTH_NEWS+API_KEY);
        newsDataArray = []
    if (res.status >= 200 && res.status < 300) {
        const myJson = await res.json();
        newsDataArray = myJson.data
    } else {
        console.log(res.status, res.statusText)

    }

    displayNews()
}

const fetchBusinessNews = async () => {
    const res = await fetch(BUSINESS_NEWS+API_KEY);
        newsDataArray = []
    if (res.status >= 200 && res.status < 300) {
        const myJson = await res.json();
        newsDataArray = myJson.data
    } else {
        console.log(res.status, res.statusText)

    }

    displayNews()
}

const fetchQueryNews = async () => {
    if (newsQuery.value === null) {
        return
    }

    const res = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+ "&apiKey=" + API_KEY);
        newsDataArray = []
    if (res.status >= 200 && res.status < 300) {
        const myJson = await res.json();
        newsDataArray = myJson.data
    } else {
        console.log(res.status, res.statusText)
    }

    displayNews()
}


generalBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>General News</h4>"
    fetchGeneralNews()
});

entertainmentBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Entertainment News</h4>"
    fetchEntertainmentNews()

});

sportsBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Sports News</h4>"
    fetchSportsNews()

});

technologyBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Technology</h4>"
    fetchTechnonolyNews()

});

politicsBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Politics</h4>"
    fetchPoliticsNews()

});

businessBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Business News</h4>"
    fetchBusinessNews()

});

searchBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Search : " + newsQuery.value + " </h4>"
    fetchQueryNews()

})

function displayNews() {
    newsDetails.innerHTML = ""


    if (newsDataArray.length === 0) {
        newsDetails.innerHTML = "<h5> No data was found </h5>"
        return;
    }

    newsDataArray.forEach (news => {

        var date = news.published_at.split('T')

        var col = document.createElement("div")
        col.className = "col-sm-12 col-md-4 col-lg-3 pg-2 card";

        var card = document.createElement("div");
        card.className = "p-2"

        var image = document.createElement("img");
        image.setAttribute("height", "160px");
        image.setAttribute("width", "100%");
        if (news.image !== null) {
            image.src = news.image
        } else {
            image.setAttribute("src", 'https://source.unsplash.com/random/?1600×900/?birds')
        }
        

        var cardBody = document.createElement("div");

        var newsHeading = document.createElement("h4");
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement("h6");
        dateHeading.className = "text-primary"
        dateHeading.innerHTML = date[0];

        var description = document.createElement("p");
        description.className = "text-muted";
        description.innerHTML = news.description

        var link = document.createElement("a");
        link.className = "btn btn-dark";
        link.setAttribute("target", "_blank");
        link.innerHTML = "Read More";
        link.href = news.url;

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(description);
        cardBody.appendChild(link)

        card.appendChild(image)
        card.appendChild(cardBody)

        col.appendChild(card)

        newsDetails.appendChild(col)



    })
}
