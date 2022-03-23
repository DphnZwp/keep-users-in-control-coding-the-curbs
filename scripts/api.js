// Toggle variables
const toggleButtonPost = document.querySelector('.toggle-form-post')
const toggleButtonPut = document.querySelector('.toggle-form-put')
const toggleButtonDelete = document.querySelector('.toggle-form-delete')
// Close button variables
const closeButtonPost = document.querySelector('.close-button-post')
const closeButtonPut = document.querySelector('.close-button-put')
const closeButtonDelete = document.querySelector('.close-button-delete')
// Api variables
const apiBase = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'
const smartzonePostForm = document.querySelector('form#smartzonePostForm')
const smartzonePutForm = document.querySelector('form#smartzonePutForm')
const smartzoneDeleteForm = document.querySelector('form#smartzoneDeleteForm')

// Toggle buttons show form
toggleButtonPost.addEventListener('click', () => {
  smartzonePostForm.classList.toggle('form-show')
})

toggleButtonPut.addEventListener('click', () => {
  smartzonePutForm.classList.toggle('form-show')
})

toggleButtonDelete.addEventListener('click', () => {
  smartzoneDeleteForm.classList.toggle('form-show')
})
// Close buttons form
closeButtonPost.addEventListener('click', () => {
  smartzonePostForm.classList.remove('form-show')
})

closeButtonPut.addEventListener('click', () => {
  smartzonePutForm.classList.remove('form-show')
})

closeButtonDelete.addEventListener('click', () => {
  smartzoneDeleteForm.classList.remove('form-show')
})

async function getSmartzones() {
  const response = await fetch(apiBase)
  const data = await response.json()
  return data.data
}

smartzonePostForm.addEventListener('submit', (post) => {
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

  fetch(apiBase, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
})

smartzonePutForm.addEventListener('submit', (post) => {
  post.preventDefault()
  let data = {
    smartzoneId: document.querySelector('#smartzonePutForm #smartzoneId').value,
    name: document.querySelector('#smartzonePutForm #name').value,
    town: document.querySelector('#smartzonePutForm #town').value,
    location: document.querySelector('#smartzonePutForm #location').value,
    function: document.querySelector('#smartzonePutForm #function').value,
    time: document.querySelector('#smartzonePutForm #time').value,
    size: document.querySelector('#smartzonePutForm #size').value,
    utilization: document.querySelector('#smartzonePutForm #utilization').value,
    description: document.querySelector('#smartzonePutForm #description').value,
    image: document.querySelector('#smartzonePutForm #image').value,
  }

  fetch(apiBase, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
})

smartzoneDeleteForm.addEventListener('submit', (post) => {
  post.preventDefault()
  let data = {
    smartzoneId: document.querySelector('#smartzoneDeleteForm #smartzoneId')
      .value,
    name: document.querySelector('#smartzoneDeleteForm #name').value,
    town: document.querySelector('#smartzoneDeleteForm #town').value,
    location: document.querySelector('#smartzoneDeleteForm #location').value,
    function: document.querySelector('#smartzoneDeleteForm #function').value,
    time: document.querySelector('#smartzoneDeleteForm #time').value,
    size: document.querySelector('#smartzoneDeleteForm #size').value,
    utilization: document.querySelector('#smartzoneDeleteForm #utilization')
      .value,
    description: document.querySelector('#smartzoneDeleteForm #description')
      .value,
    image: document.querySelector('#smartzoneDeleteForm #image').value,
  }

  fetch(apiBase, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
})
