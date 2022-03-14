const form = document.querySelector('form')
const toggleButtonForm = document.querySelector('.toggle-form')

toggleButtonForm.addEventListener('click', () => {
    form.classList.toggle('form-show')
});

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
    smartzones.map(smartzone => {

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


// const apiBase = 'https://smartzone.api.fdnd.nl/v1'
// const container = document.querySelector('main section div')
// const smartzoneForm = document.querySelector('form#smartzoneForm')

// // Fetch smartzones and show them in the container
// fetchJson(apiBase + '/smartzone').then(parseSmartzones)

// // Hook up controls for the smartzone form
// smartzoneForm.addEventListener('submit', (event) => {
//   event.preventDefault()

//   let smartzone = {
//     smartzoneId: Number(smartzoneForm.elements.smartzoneId.value),
//     name: smartzoneForm.elements.name.value,
//     town: smartzoneForm.elements.town.value,
//     location: smartzoneForm.elements.location.value,
//     function: smartzoneForm.elements.function.value,
//     time: smartzoneForm.elements.time.value,
//     size: smartzoneForm.elements.size.value,
//     usage: smartzoneForm.elements.usage.value,
//     description: smartzoneForm.elements.description.value,
//     image: smartzoneForm.elements.image.value,
//   }
//   console.log('smartzone to be inserted:')
//   console.log(smartzone)

//   postJson(apiBase + '/smartzone', smartzone).then((response) => {
//     container.innerHTML += renderSmartzone(response[0])
//   })
// })

// /**
//  * Wraps the fetch api and returns the response body parsed through json
//  * @param {*} url the api endpoint to address
//  * @returns the json response from the api endpoint
//  */
// async function fetchJson(url) {
//   return await fetch(url)
//     .then((response) => response.json())
//     .then((body) => body.data)
//     .catch((error) => error)
// }

// /**
//  * Wraps the fetch api for post assignment and returns the response body parsed
//  * through json, returns an error if it is thrown.
//  * @param {*} url the api endpoint to address
//  * @param {*} data the object to pass along to the api
//  * @returns the json response from the api endpoint
//  */
// async function postJson(url, data) {
//   return await fetch(url, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data),
//   })
//     .then((response) => {
//       console.log('response')
//       console.log(response)
//       return response.json()
//     })
//     .then((body) => body.data)
//     .catch((error) => error)
// }

// /**
//  * Parses the passed data stream from the smartzones API and renders all quotes into
//  * the HTML container which is defined in the main scope
//  * @param {*} data a json object containing the smartzones from the API
//  */
// function parseSmartzones(data) {
//   container.innerHTML = data
//     .map((smartzone) => renderSmartzone(smartzone))
//     .reduce((previous, current) => previous + current)
// }

// /**
//  * Renders a smartzone in to HTML elements
//  * @param {*} smartzone the smartzone to be rendered
//  * @returns an HTML string containing the quote
//  */
// function renderSmartzone(smartzone) {
//   return `<table>
//           <tr>
//           <th>Naam</th>
//           <td>${smartzone.name}</td>
//         </tr>
//         <tr>
//           <th>Stad</th>
//           <td>${smartzone.town}</td>
//         </tr>
//         <tr>
//           <th>Locatie</th>
//           <td>${smartzone.location}</td>
//         </tr>
//         <tr>
//           <th>functie</th>
//           <td>${smartzone.function}</td>
//         </tr>
//         <tr>
//           <th>Tijdstip</th>
//           <td>${smartzone.time}</td>
//         </tr>
//         <tr>
//           <th>Grootte</th>
//           <td>${smartzone.size}</td>
//         </tr>
//         <tr>
//           <th>Gebruik</th>
//           <td>${smartzone.usage}</td>
//         </tr>
//         <tr>
//           <th>Omschrijving</th>
//           <td>${smartzone.description}</td>
//         </tr>
//       </table>`
// }