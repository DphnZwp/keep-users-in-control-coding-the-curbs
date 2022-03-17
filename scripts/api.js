const apiUrl = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'
const smartzoneTable = document.querySelector('.tables');

renderSmartzones()

async function getSmartzones() {
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data.data)
    return data.data
}

async function renderSmartzones() {
  const smartzones = await getSmartzones()
      smartzones.forEach(smartzone => {

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
                <th>Grootte</th>
                <td>${smartzone.size}</td>
            </tr>
            <tr>
                <th>Gebruik</th>
                <td>${smartzone.utilization}</td>
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

const form = document.querySelector('form')
const toggleButtonForm = document.querySelector('.toggle-form')

toggleButtonForm.addEventListener('click', () => {
    form.classList.toggle('form-show')
})

const postSmartzones = document.querySelector('form#smartzoneForm')

postSmartzones.addEventListener('submit', (post) => {
  post.preventDefault()

  let data = {
      smartzoneId: document.querySelector('#smartzoneId').value,
      name: document.querySelector('#name').value,
      town: document.querySelector('#town').value,
      location: document.querySelector('#location').value,
      function: document.querySelector('#function').value,
      time: document.querySelector('#time').value,
      size: document.querySelector('#size').value,
      utilization: document.querySelector('#utilization').value,
      description: document.querySelector('#description').value,
      image: document.querySelector('#image').value,

  }

  fetch(apiUrl,{
     method:'POST',
     headers:{
         'Content-Type':'application/json'
     },
     body:JSON.stringify(data),
  })
  .then(res => res.json())
  .then(data => renderMember(data))
})