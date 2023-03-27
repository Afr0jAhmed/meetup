const category = "YOUR_CATEGORY_NAME"; // Replace YOUR_CATEGORY_NAME with the category name you want to fetch
const url = `https://inshorts.deta.dev/news?category=${category}`;

const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");
const recentSearchesList = document.getElementById("recentSearches");
let timeoutId;

// Listen for input changes in the search input field
searchInput.addEventListener("input", function (event) {
  // Cancel any previously scheduled search
  clearTimeout(timeoutId);

  // Schedule a new search to occur in 500 milliseconds
  timeoutId = setTimeout(searchNews, 500);
});

// Listen for clicks on recent search items
recentSearchesList.addEventListener("click", function (event) {
  if (event.target && event.target.matches("li")) {
    searchInput.value = event.target.textContent;
    searchNews();
  }
});

function searchNews() {
  const query = searchInput.value.trim();

  // Only search if the query is not empty
  if (query) {
    // Store the query in local storage and add it to the recent searches list
    let recentSearches =
      JSON.parse(localStorage.getItem("recentSearches")) || [];
    if (!recentSearches.includes(query)) {
      recentSearches.push(query);
      localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
      updateRecentSearchesList(recentSearches);
    }

    // Clear the previous search results
    resultsDiv.innerHTML = "";

    // Build the API URL and fetch the data
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => displayResults(data.articles))
      .catch((error) => console.log(error));
  }
}

function displayResults(articles) {
  // Loop through each article and add it to the results div
  articles.forEach((article) => {
    const articleDiv = document.createElement("div");
    articleDiv.classList.add("article");
    articleDiv.innerHTML = `
      <h2>${article.title}</h2>
      <p>${article.description}</p>
      <a href="${article.url}" target="_blank">Read More</a>
    `;
    resultsDiv.appendChild(articleDiv);
  });
}

function updateRecentSearchesList(recentSearches) {
  // Clear the previous recent searches list
  recentSearchesList.innerHTML = "";

  // Loop through each recent search and add it to the list
  recentSearches.forEach((search) => {
    const searchItem = document.createElement("li");
    searchItem.textContent = search;
    recentSearchesList.appendChild(searchItem);
  });
}

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
