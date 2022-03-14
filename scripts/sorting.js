const apiBase = 'smartzones.json'
const smartzoneTable = document.querySelector('.tables');

async function loadSmartzones() {
    return (await fetch(apiBase)).json();
}

document.addEventListener("DOMContentLoaded", async () => {
    let smartzones = [];
    try {
        smartzones = await loadSmartzones()
    } catch (error) {
        console.log("Error")
        console.log(error)
    }

    fillSmartzoneTable(smartzones)
})

function fillSmartzoneTable(smartzones) {
  smartzones.filter(smartzone => {
    return smartzone.town === 'Utrecht'
}).map(smartzone => {

    // Create a HTML table
    smartzoneTable.insertAdjacentHTML('beforeend',
        `
        <table>
        <tr>
            <th>Naam</th>
            <td>${smartzone.name}</td>
        </tr>
        <tr>
            <th>Stad</th>
            <td>${smartzone.town}</td>
        </tr>
        <tr>
            <th>Locatie</th>
            <td>${smartzone.location}</td>
        </tr>
        <tr>
            <th>functie</th>
            <td>${smartzone.function}</td>
        </tr>
        <tr>
            <th>Tijdstip</th>
            <td>${smartzone.time}</td>
        </tr>
        <tr>
            <th>Grootte (plek)</th>
            <td>${smartzone.size}</td>
        </tr>
        <tr>
            <th>Gebruik (%)</th>
            <td>${smartzone.usage}</td>
        </tr>
        <tr>
            <th>Omschrijving</th>
            <td>${smartzone.description}</td>
        </tr>
        </table>
        <img src="https://via.placeholder.com/510.png/524dd0/fff" alt="">
    `
    )
})
}