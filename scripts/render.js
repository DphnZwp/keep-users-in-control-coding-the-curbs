// Variables
const api_base = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'
const select = document.querySelector('.sorting')
const smartzoneTables = document.querySelector('.tables')

getSmartzones()

async function getSmartzones() {
  const response = await fetch(api_base)
  const data = await response.json()

  renderSmartzones(data)
}

function renderSmartzones(data) {
  // Selects and button for filtering
  select.innerHTML += `
    <select name="format" class="select-name" onchange = "filterSmartzones(this.value)">
    <option>Sorteer op naam</option>
    ${data.data.map((smartzone) => `<option>${smartzone.name}</option>`)}
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
  // Smartzone tables
  smartzoneTables.innerHTML += `
    <table>
    <tr>
        <th>Naam</th>
        <td>Tijn</td>
    </tr>
    <tr>
        <th>Stad</th>
        <td>Utrecht</td>
    </tr>
    <tr>
        <th>Locatie</th>
        <td>Twijnstraat 26</td>
    </tr>
    <tr>
        <th>functie</th>
        <td>Laden en lossen</td>
    </tr>
    <tr>
        <th>Tijdstip</th>
        <td>07:00 - 17:00</td>
    </tr>
    <tr>
        <th>Grootte (plek)</th>
        <td>1,5 plek</td>
    </tr>
    <tr>
        <th>Gebruik (%)</th>
        <td>48%</td>
    </tr>
    <tr>
        <th>Omschrijving</th>
        <td>Eerste smartzone in Nederland</td>
    </tr>
    </table>
    <img src="https://user-images.githubusercontent.com/69635977/159494746-42176b30-cecd-461d-987f-712e4e5c97b9.png">
    <table>
    <tr>
        <th>Naam</th>
        <td>Sarah</td>
    </tr>
    <tr>
        <th>Stad</th>
        <td>Utrecht</td>
    </tr>
    <tr>
        <th>Locatie</th>
        <td>Twijnstraat 26</td>
    </tr>
    <tr>
        <th>functie</th>
        <td>Laden en lossen</td>
    </tr>
    <tr>
        <th>Tijdstip</th>
        <td>07:00 - 13:00</td>
    </tr>
    <tr>
        <th>Grootte (plek)</th>
        <td>1,5 plek</td>
    </tr>
    <tr>
        <th>Gebruik (%)</th>
        <td>90%</td>
    </tr>
    <tr>
        <th>Omschrijving</th>
        <td>Eerste smartzone in Nederland</td>
    </tr>
    </table>
    <img src="https://user-images.githubusercontent.com/69635977/159494652-9cfa5018-10a5-47d3-be69-678424263b0c.png">
    `
}

// Filtering smartzones
async function filterSmartzones(value) {
  const res = await fetch(api_base)
  const data = await res.json()
  let output = ''
  data.data
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
  const res = await fetch(api_base)
  const data = await res.json()
  let output = ''
  data.data.forEach((smartzone) => {
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
