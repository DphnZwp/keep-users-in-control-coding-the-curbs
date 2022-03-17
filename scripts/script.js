// const apiBase = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'
// const smartzoneTable = document.querySelector('.tables');

// async function getSmartzones() {
//     return (await fetch(apiBase)).json();
// }

// document.addEventListener("DOMContentLoaded", async () => {
//     let smartzones = [];

//     try {
//         smartzones = await getSmartzones()
//     } catch (error) {
//         console.log("Error")
//         console.log(error)
//     }

//     renderSmartzones(smartzones)
// })

// function renderSmartzones(smartzones) {
//     smartzones.forEach(smartzone => {

//         // Create a HTML table
//         smartzoneTable.insertAdjacentHTML('beforeend',
//             `
//             <table>
//             <tr>
//                 <th>Naam</th>
//                 <td>${smartzone.name}</td>
//             </tr>
//             <tr>
//                 <th>Stad</th>
//                 <td>${smartzone.town}</td>
//             </tr>
//             <tr>
//                 <th>Locatie</th>
//                 <td>${smartzone.location}</td>
//             </tr>
//             <tr>
//                 <th>functie</th>
//                 <td>${smartzone.function}</td>
//             </tr>
//             <tr>
//                 <th>Tijdstip</th>
//                 <td>${smartzone.time}</td>
//             </tr>
//             <tr>
//                 <th>Grootte</th>
//                 <td>${smartzone.size}</td>
//             </tr>
//             <tr>
//                 <th>Gebruik</th>
//                 <td>${smartzone.usage}</td>
//             </tr>
//             <tr>
//                 <th>Omschrijving</th>
//                 <td>${smartzone.description}</td>
//             </tr>
//             </table>
//         `
//         )
//     })
// }

