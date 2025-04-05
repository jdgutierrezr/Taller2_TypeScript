import { dataSeries } from "./dataSeries.js";
var seriesTbody = document.getElementById('series');
var descriptionCard = document.getElementById('description');
var seasonsAvgElement = document.getElementById('seasons-average');
renderSeriesInTable(dataSeries);
seasonsAvgElement.innerHTML = "".concat(getSeasonsAverage(dataSeries));
function renderSeriesInTable(series) {
    console.log("Desplegando series");
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        var tdName = document.createElement("td");
        var button = document.createElement("button");
        button.textContent = serie.name;
        button.className = "border-0";
        button.style.color = "blue";
        button.style.cursor = "pointer";
        button.addEventListener("click", function () { return openDescription(serie); });
        tdName.appendChild(button);
        trElement.innerHTML = "\n            <td>".concat(serie.position, "</td>\n            <td></td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>");
        trElement.children[1].replaceWith(tdName);
        seriesTbody.appendChild(trElement);
    });
}
function getSeasonsAverage(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    return totalSeasons / series.length;
}
function openDescription(serie) {
    descriptionCard.innerHTML = '';
    var cardElement = document.createElement("div");
    cardElement.innerHTML = "\n        <img src=\"".concat(serie.image, "\" class=\"card-img-top\" alt=\"").concat(serie.name, " image\">\n        <div class=\"m-4\">\n            <h5>").concat(serie.name, "</h5>\n            <p>").concat(serie.description, "</p>\n            <a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.link, "</a>\n        </div>");
    descriptionCard.appendChild(cardElement);
}
