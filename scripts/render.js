// Variables
const api_base = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'
const select = document.querySelector('.sorting')
const smartzoneTables = document.querySelector('.tables')

getSmartzones()
renderSmartzones()

async function renderSmartzones() {
  const smartzones = await getSmartzones()
  // Selects and button for filtering
  select.innerHTML += `
    <select name="format" class="select-name" onchange = "filterSmartzones(this.value)">
    <option>Sorteer op naam</option>
    ${smartzones.map((smartzone) => `<option>${smartzone.name}</option>`)}
    </select>

    <select class="select-function" onchange = "filterSmartzones(this.value)">
    <option>Sorteer op functie</option>
    <option>Deelmobiliteit</option>
    <option>Laden en lossen</option>
    <option>Laden en lossen Parkeren Deelmobiliteit</option>
    <option>Laden en lossen Recreatie</option>
    </select>

    <select class="select-town" onchange = "filterSmartzones(this.value)">
    <option>Sorteer op stad</option>
    <option>Amsterdam</option>
    <option>Rotterdam</option>
    <option>Schiedam</option>
    <option>Utrecht</option>
    </select>

    <select class="select-location" onchange = "filterSmartzones(this.value)">
    <option>Sorteer op locatie</option>
    <option>Kinkerstraat 272</option>
    <option>Lange Haven 56</option>
    <option>Lange Haven 72</option>
    <option>Overtoom 450</option>
    <option>West-kruiskade 93</option>
    <option>Witte de Withstraat 32</option>
    </select>
    `
  loader.className += ' hidden'
  smartzones
    .filter((smartzone) => {
      return smartzone.town === 'Utrecht'
    })
    .map((smartzone) => {
      smartzoneTables.innerHTML += `
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
          <td>${smartzone.utilization}</td>
      </tr>
      <tr>
          <th>Omschrijving</th>
          <td>${smartzone.description}</td>
      </tr>
      </table>
      <img src="${smartzone.image}">
      `
    })
}

// Filtering smartzones
async function filterSmartzones(value) {
  const smartzones = await getSmartzones()

  let output = ''
  smartzones
    .filter((smartzone) => {
      return (
        smartzone.name === value ||
        smartzone.town === value ||
        smartzone.function === value ||
        smartzone.location === value
      )
    })
    .map((smartzone) => {
      output += `
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
            <td>${smartzone.utilization}</td>
        </tr>
        <tr>
            <th>Omschrijving</th>
            <td>${smartzone.description}</td>
        </tr>
        </table>
        <img src="${smartzone.image}">
    `
    })
  smartzoneTables.innerHTML = output
}

const filterAllSmartzones = document.querySelector('.toggle-all-smartzones')

filterAllSmartzones.addEventListener('click', async () => {
  const smartzones = await getSmartzones()
  let output = ''
  smartzones.forEach((smartzone) => {
    output += `
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
              <td>${smartzone.utilization}</td>
          </tr>
          <tr>
              <th>Omschrijving</th>
              <td>${smartzone.description}</td>
          </tr>
          </table>
          <img src="${smartzone.image}">
      `
  })
  smartzoneTables.innerHTML = output
})
