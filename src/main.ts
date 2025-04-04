import { Serie } from "./serie.js";
import { dataSeries } from "./dataSeries.js";

let seriesTbody: HTMLElement = document.getElementById( 'series' )!;
let descriptionCard: HTMLElement = document.getElementById( 'description' )!;
const seasonsAvgElement: HTMLElement = document.getElementById( 'seasons-average' )!;

renderSeriesInTable( dataSeries );
seasonsAvgElement.innerHTML = `${getSeasonsAverage( dataSeries )}`

function renderSeriesInTable(series: Serie[]): void {
    console.log("Desplegando cursos");

    series.forEach((serie) => {
        let trElement = document.createElement("tr");

        const tdName = document.createElement("td");
        const button = document.createElement("button");

        button.textContent = serie.name;
        button.className = "border-0";
        button.style.color = "blue";
        button.style.cursor = "pointer";

        button.addEventListener("click", () => openDescription(serie));

        tdName.appendChild(button);

        trElement.innerHTML = `
            <td>${serie.position}</td>
            <td></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>`;

        trElement.children[1].replaceWith(tdName);

        seriesTbody.appendChild(trElement);
    });
}

function getSeasonsAverage( series: Serie[] ): number
{
    let totalSeasons: number = 0;

    series.forEach( (serie) => totalSeasons = totalSeasons + serie.seasons );

    return totalSeasons / series.length;
}

function openDescription( serie: Serie ): void
{
    descriptionCard.innerHTML = '';

    let cardElement = document.createElement("div");

    cardElement.innerHTML = `
        <img src="${serie.image}" class="card-img-top" alt="${serie.name} image">
        <div class="m-4">
            <h5>${serie.name}</h5>
            <p>${serie.description}</p>
            <a href="${serie.link}" target="_blank">${serie.link}</a>
        </div>`;

    descriptionCard.appendChild( cardElement );
}