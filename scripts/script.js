// const apiBaseUrl = 'https://tribe.api.fdnd.nl/v1'
// const container = document.querySelector('main section div')
// const memberForm = document.querySelector('form#memberForm')

// // Fetch quotes and authors and show them in the container
// fetchJson(apiBaseUrl + '/member').then(parseMembers)

// // Hook up controls for the member form
// memberForm.addEventListener('submit', (event) => {
//   event.preventDefault()

//   let member = {
//     memberId: Number(memberForm.elements.memberId.value),
//     squadId: Number(memberForm.elements.squadId.value),
//     type: memberForm.elements.type.value,
//     nickname: memberForm.elements.nickname.value,
//     name: memberForm.elements.name.value,
//     prefix: memberForm.elements.prefix.value,
//     surname: memberForm.elements.surname.value,
//     avatar: memberForm.elements.avatar.value,
//     githubHandle: memberForm.elements.githubHandle.value,
//     bio: memberForm.elements.bio.value,
//     url: memberForm.elements.url.value,
//   }
//   console.log('member to be inserted:')
//   console.log(member)

//   postJson(apiBaseUrl + '/member', member).then((response) => {
//     container.innerHTML += renderMember(response[0])
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
//  * Parses the passed data stream from the members API and renders all quotes into
//  * the HTML container which is defined in the main scope
//  * @param {*} data a json object containing the members from the API
//  */
// function parseMembers(data) {
//   container.innerHTML = data
//     .map((member) => renderMember(member))
//     .reduce((previous, current) => previous + current)
// }

// /**
//  * Renders a member in to HTML elements
//  * @param {*} member the member to be rendered
//  * @returns an HTML string containing the quote
//  */
// function renderMember(member) {
//   return `<article><h3>${member.name} ${member.surname}</h3></article>`
// }