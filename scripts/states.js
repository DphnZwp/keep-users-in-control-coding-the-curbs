// Loading state
const loading = document.querySelector('.loading-state')
loading.innerHTML += `
<img class="loading-image" src="assets/svgs/loader.svg" />
<h2>Laden van smartzones...</h2>
`

// Empty state
const emptyState = document.querySelector('.empty-state')
emptyState.classList.add('empty-state-dissapear')

// Error state
