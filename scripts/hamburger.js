const navigation = document.querySelector('.primary-navigation')
const hamburger = document.querySelector('.close-button')

hamburger.addEventListener('click', () => {
  navigation.classList.toggle('menu-close')
  hamburger.classList.toggle('close-button-dissapear')
})
