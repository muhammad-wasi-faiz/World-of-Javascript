const key = "1027a0e29f7443a5bf690d7d4454e3dc";
const url = "https://newsapi.org/v2/everything?q=";
const btn = document.getElementById("btn");
const inp = document.getElementById("inp");
const link1 = document.getElementById("sports");
const link2 =  document.getElementById("politics");
const link3 =  document.getElementById("tech");
let queri = null;

window.addEventListener("load", ()=> fetchNews("India"));

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${key}`);
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles){
    const cards = document.getElementById("cards");
    const tempcards = document.getElementById("tempcards");

    cards.innerHTML = '';

    articles.forEach((article) => {
        if(!article.urlToImage) return;
        const clone = tempcards.content.cloneNode(true);
        fill(clone, article);
        cards.appendChild(clone);
    });
}

function fill(clone, article) {
    const newsimg = clone.querySelector('#img');
    const newstitle = clone.querySelector('#title');
    const newssource = clone.querySelector('#source');
    const newsdata = clone.querySelector('#data');

    newsimg.src = article.urlToImage;
    newstitle.innerHTML = article.title;
    newsdata.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
    timeZone: "Asia/Karachi"
    });

   newssource.innerHTML = `${article.source.name} • ${date}`;

   clone.firstElementChild.addEventListener('click', ()=>{
       window.open(article.url, "_blank");
   });
}



link1.addEventListener('click', ()=>{
    fetchNews(link1.textContent);
});    

link2.addEventListener('click', ()=>{
    fetchNews(link2.textContent);
});    

link3.addEventListener('click', ()=>{
    fetchNews(link3.textContent);
});    

btn.addEventListener('click', ()=>{
   queri = inp.value ; 
   if (!queri) return;
   fetchNews(queri);
   inp.value = '';
});   



