// Loading state
const loader = document.querySelector('.loading-state')
loader.innerHTML += `
<img class="loading-image" src="assets/svgs/loader.svg" />
<h2>Laden van smartzones...</h2>
`

window.addEventListener('load', function () {
  loader.className += ' hidden'
})

// Empty state
const emptyState = document.querySelector('.empty-state')
emptyState.style.display = 'none'

// Error state
