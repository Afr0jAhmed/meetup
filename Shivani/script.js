// const searchInput = document.getElementById('search-input');
// const recentSearches = document.getElementById('recent-searches');
// const newsContainer = document.getElementById('news-container');

// let searchHistory = [];

// function getNews(searchTerm) {
//   // Clear the news container
//   newsContainer.innerHTML = '';

//   // Fetch news data
//   fetch(`https://inshorts.deta.dev/news?category=${searchTerm}`)
//     .then(response => response.json())
//     .then(data => {
//       // Display the news articles
//       data.forEach(article => {
//         const newsCard = document.createElement('div');
//         newsCard.classList.add('news-card');

//         const newsTitle = document.createElement('div');

//         newsTitle.classList.add('news-card-title');
//         newsTitle.innerText = article.title;
//         console.log(newsTitle);

//         const newsContent = document.createElement('div');
//         newsContent.classList.add('news-card-content');
//         newsContent.innerText = article.content;

//         newsCard.appendChild(newsTitle);
//         newsCard.appendChild(newsContent);
//         newsContainer.appendChild(newsCard);
//       });
//     })
//     .catch(error => console.error(error));

//   // Update recent searches
//   if (searchHistory.indexOf(searchTerm) === -1) {
//     searchHistory.push(searchTerm);

//     const searchLink = document.createElement('a');
//     searchLink.classList.add('search-link');
//     searchLink.href = '#';
//     searchLink.innerText = searchTerm;
//     searchLink.addEventListener('click', () => {
//       searchInput.value = searchTerm;
//       getNews(searchTerm);
//     });

//     const searchItem = document.createElement('div');
//     searchItem.classList.add('search-item');
//     searchItem.appendChild(searchLink);

//     recentSearches.insertBefore(searchItem, recentSearches.firstChild);
//   }
// }

// searchInput.addEventListener('keydown', event => {
//   if (event.keyCode === 13) {
//     const query = searchInput.value.trim();
//     if (query.length > 0) {
//       getNews(query);
//       searchInput.value = '';
//     }
//   }
// });

// let display =  document.getElementById("news-container");
// display.addEventListener('down', function(){

// } )

// harish code
// This API supports category wise news. Here is a complete list of all categories.

// national = not working
// business = working
// sports  = not working
// world = not working
// politics = not working
// technology =  working
// startup = not working
// entertainment = working
// miscellaneous = working
// hatke = working
// science = working
// automobile = working
// apple = working

const searchInput = document.getElementById("search-input");
const recentSearches = document.getElementById("recent-searches");
const newsContainer = document.getElementById("news-container");
let searchHistory = [];

function getNews(searchTerm) {
  // Clear the news container
  newsContainer.innerHTML = "";

  // Fetch news data
  fetch(`https://inshorts.deta.dev/news?category=${searchTerm}`)
    .then((response) => response.json())
    .then((data) => {
      // Display the news articles
      console.log(data);
      data.data.forEach((article) => {
        const newsCard = document.createElement("div");
        newsCard.classList.add("news-card");

        const newsTitle = document.createElement("div");
        newsTitle.classList.add("news-card-title");
        newsTitle.innerText = article.title;
        console.log(newsTitle);

        const newsContent = document.createElement("div");
        newsContent.classList.add("news-card-content");
        newsContent.innerText = article.content;

        newsCard.appendChild(newsTitle);
        newsCard.appendChild(newsContent);
        newsContainer.appendChild(newsCard);
      });
    })
    .catch((error) => {
      console.error(error);
    });

  // Update recent searches
  if (searchHistory.indexOf(searchTerm) === -1) {
    searchHistory.push(searchTerm);

    const searchLink = document.createElement("a");
    searchLink.classList.add("search-link");
    searchLink.href = "#";
    searchLink.innerText = searchTerm;
    searchLink.addEventListener("click", () => {
      searchInput.value = searchTerm;
      getNews(searchTerm);
    });

    const searchItem = document.createElement("span");
    searchItem.classList.add("search-item");
    searchItem.appendChild(searchLink);

    recentSearches.insertBefore(searchItem, recentSearches.firstChild);
  }
}

searchInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    const query = searchInput.value.trim();
    if (query.length > 0) {
      getNews(query);
      searchInput.value = "";
    }
  }
});
