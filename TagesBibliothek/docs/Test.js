async function getNews() {
  try {
    const response = await fetch("https:www.tagesschau.de/api2u/news/?regions=1&ressort=wissen", {
      headers: { "Accept": "application/json" }
    });

    const data = await response.json();
    console.log("API-Daten:", data.news); // API-Antwort ausgeben

    displayNews(Array.isArray(data.news) ? data.news : []); // Daten ins HTML übergeben
  } catch (error) {
    console.error("Fehler beim Abrufen der Nachrichten:", error);
  }
}
async function getNewsWirtschaft() {
  try {
    const response = await fetch("https://www.tagesschau.de/api2u/news/?ressort=wirtschaft", {
      headers: { "Accept": "application/json" }
    });


    const data = await response.json();
    console.log("API-Daten:", data.news); // API-Antwort ausgeben

    displayNews(Array.isArray(data.news) ? data.news : []); // Daten ins HTML übergeben
  } catch (error) {
    console.error("Fehler beim Abrufen der Nachrichten:", error);
  }
}
async function getNewsSports() {
  try {
    const response = await fetch('https://www.tagesschau.de/api2u/news/?regions=1&ressort=sport', {
      headers: { "Accept": "application/json" }
    });


    const data = await response.json();
    console.log("API-Daten:", data.news); // API-Antwort ausgeben

    displayNewsSports(Array.isArray(data.news) ? data.news : []); // Daten ins HTML übergeben
  } catch (error) {
    console.error("Fehler beim Abrufen der Nachrichten:", error);
  }
}
async function getNewsInvestigation() {
  try {
    const response = await fetch('https://www.tagesschau.de/api2u/news/?regions=1&ressort=investigativ', {
      headers: { "Accept": "application/json" }
    });


    const data = await response.json();
    console.log("API-Daten:", data.news); // API-Antwort ausgeben

    displayNews(Array.isArray(data.news) ? data.news : []); // Daten ins HTML übergeben
  } catch (error) {
    console.error("Fehler beim Abrufen der Nachrichten:", error);
  }
}
async function getNewsDeutschland() {
  try {
    const response = await fetch('https://www.tagesschau.de/api2u/news/?regions=1&ressort=inland', {
      headers: { "Accept": "application/json" }
    });


    const data = await response.json();
    console.log("API-Daten:", data.news); // API-Antwort ausgeben

    displayNews(Array.isArray(data.news) ? data.news : []); // Daten ins HTML übergeben
  } catch (error) {
    console.error("Fehler beim Abrufen der Nachrichten:", error);
  }
}
async function getNewsWelt() {
  try {
    const response = await fetch('https://www.tagesschau.de/api2u/news/?regions=1&ressort=ausland', {
      headers: { "Accept": "application/json" }
    });


    const data = await response.json();
    console.log("API-Daten:", data.news); // API-Antwort ausgeben

    displayNews(Array.isArray(data.news) ? data.news : []); // Daten ins HTML übergeben
  } catch (error) {
    console.error("Fehler beim Abrufen der Nachrichten:", error);
  }
}
function displayNewsSports(newsData) {
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
      <h2>${article.title}</h2>
      <p>${article.firstSentence}</p>
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



// Ruft getNews() automatisch auf, wenn die Seite geladen wird
function Show_Wissen(){
  window.location.href = "Technik_Infomatik.html";
}
function ShowWirtschaft(){
  window.location.href = "Naturwissenschaft.html";
}
function ShowSports(){
  window.location.href = "Sports.html";
}
function ShowInvestigation(){
  window.location.href = "Investigation.html";
}
function ShowDeutschland(){
  window.location.href = "InlandPolitik.html";
}
function ShowWorldPolitik(){
  window.location.href = "AuslandPolitik.html";
}
function Back(){
  window.location.href = "index.html";
}
function ShowInfo(){
  window.location.href = "licence.html";
}
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
