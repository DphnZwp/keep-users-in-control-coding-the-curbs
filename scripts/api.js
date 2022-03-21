// Toggle variables
const toggleButtonPost = document.querySelector('.toggle-form-post')
// const toggleButtonPut = document.querySelector('.toggle-form-put')
// const toggleButtonDelete = document.querySelector('.toggle-form-delete')
const closeButtonPost = document.querySelector('.close-button-post')
// const closeButtonPut = document.querySelector('.close-button-put')
// const closeButtonDelete = document.querySelector('.close-button-delete')
// Post variables
const apiUrl = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'
const smartzonePostForm = document.querySelector('form#smartzonePostForm')
// Toggle buttons show form
toggleButtonPost.addEventListener('click', () => {
  smartzonePostForm.classList.toggle('form-show')
})

// toggleButtonPut.addEventListener('click', () => {
//   smartzonePutForm.classList.toggle('form-show')
// })

// toggleButtonDelete.addEventListener('click', () => {
//   smartzoneDeleteForm.classList.toggle('form-show')
// })
// Close buttons form
closeButtonPost.addEventListener('click', () => {
  smartzonePostForm.classList.remove('form-show')
})

// closeButtonPut.addEventListener('click', () => {
//   smartzonePutForm.classList.remove('form-show')
// })

// closeButtonDelete.addEventListener('click', () => {
//   smartzoneDeleteForm.classList.remove('form-show')
// })

smartzonePostForm.addEventListener('submit', (post) => {
  post.preventDefault()

  let data = {
    smartzoneId: Number(document.querySelector('#smartzoneId').value),
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

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
})

// smartzonePutForm.addEventListener('submit', (put) => {
//   put.preventDefault()

//   let data = {
//     smartzoneId: Number(document.querySelector('#smartzoneId').value),
//     name: document.querySelector('#name').value,
//     town: document.querySelector('#town').value,
//     location: document.querySelector('#location').value,
//     function: document.querySelector('#function').value,
//     time: document.querySelector('#time').value,
//     size: document.querySelector('#size').value,
//     utilization: document.querySelector('#utilization').value,
//     description: document.querySelector('#description').value,
//     image: document.querySelector('#image').value,
//   }

//   fetch(apiUrl, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })
// })

// smartzonedeleteForm.addEventListener('submit', (delete) => {
//   delete.preventDefault()

//   let data = {
//     smartzoneId: Number(document.querySelector('#smartzoneId').value),
//     name: document.querySelector('#name').value,
//     town: document.querySelector('#town').value,
//     location: document.querySelector('#location').value,
//     function: document.querySelector('#function').value,
//     time: document.querySelector('#time').value,
//     size: document.querySelector('#size').value,
//     utilization: document.querySelector('#utilization').value,
//     description: document.querySelector('#description').value,
//     image: document.querySelector('#image').value,
//   }

//   fetch(apiUrl, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })
// })
