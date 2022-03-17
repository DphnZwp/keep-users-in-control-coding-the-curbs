const apiUrl = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'

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