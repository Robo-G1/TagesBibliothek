let Res;
let Reg;

function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleString("de-DE", { 
    day: "2-digit", 
    month: "2-digit", 
    year: "numeric",
    hour: "2-digit", 
    minute: "2-digit" 
  }) + " Uhr"; // Fügt " Uhr" hinzu
}
function displayNews(newsData) {
  const container = document.getElementById("news-container");
  container.innerHTML = "";

  if (!Array.isArray(newsData)) {
    console.error("Fehler: Daten sind kein Array:", newsData);
    container.innerHTML = "<p>Fehler beim Laden der Nachrichten.</p>";
    return;
  }

  newsData.forEach(article => {
    const articleElement = document.createElement("div");
    const imageSrc = article.teaserImage?.imageVariants?.["1x1-432"] || "";
    const imageAlt = article.teaserImage?.alttext || "Kein Bild verfügbar";
    articleElement.className = "news-item";
    articleElement.innerHTML = `
      <h2>${article.topline}</h2>
      <p>${article.title}</p>
      <p>${formatDate(article.date)}</p>
      ${imageSrc ? `<img src="${imageSrc}" alt="${imageAlt}" class="news-image">` : ""}
      <a href="${article.shareURL}" target="_blank">Mehr lesen</a>
      
    `;
    // Bild hinzufügen, falls vorhanden
    if (article.teaserImage?.imageURL) {
      const imageElement = document.createElement("img");
      const imageSrc = article.teaserImage?.imageVariants?.["16x9-640"] || "";
      const imageAlt = article.teaserImage?.alttext || "Kein Bild verfügbar";
      imageElement.className = "news-image";
      articleElement.appendChild(imageElement);
    }

    container.appendChild(articleElement);
  })
}
async function getNews() {
  try {
    console.log(Res + Reg);
    const response = await fetch("https://www.tagesschau.de/api2u/news/?region="+ Reg+ "&ressort=" + Res, {
      headers: { "Accept": "application/json" }
    });
    const data = await response.json();
    console.log("API-Daten:", data.news); // API-Antwort ausgeben
    displayNews(Array.isArray(data.news) ? data.news : []); // Daten ins HTML übergeben
  } catch (error) {
    console.error("Fehler beim Abrufen der Nachrichten:", error);
  }
}
function ShowNewsPage(Ressort, Region){
  Res = Ressort;
  Reg = Region;
  console.log(Res+ Reg);
  window.location.href = "NewsPage.html?ressort=" + Res + "&region=" + Reg;
}
function getNewsVar(){
  const params = new URLSearchParams(window.location.search);
  Res = params.get("ressort");
  Reg = params.get("region");
  getNews();
}
function Back(){
  window.location.href = "index.html";
}
function ShowInfo(){
  window.location.href = "licence.html";
}