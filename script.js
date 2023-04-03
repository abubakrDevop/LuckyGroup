const input = document.querySelector('.search_input')
const navigate = document.querySelectorAll('li')
const showNav = document.querySelector('.show_nav')
const hideNav = document.querySelector('.hide_nav')
const headerIconMobile = document.querySelectorAll('.header__icon_mobile')
const headerNavMobile = document.querySelector('.header__nav_mobile')
const regex = /^[!@#\$%\^&\*\(\)]+$/gm

navigate.forEach((item) => item.addEventListener('click', activeLink))

function activeLink() {
  navigate.forEach((item) =>
  item.classList.remove('active'))
  this.classList.add('active')
}

input.oninput = function() {
  // Работает! но есть баг, если до символов ввести буквы или числа, то регулярка перестает замечать символы! 
  input.value = input.value.replace(regex, '').substr(0, 12)
}

fetch('https://baconipsum.com/api/?type=lucky')
  .then(response => response.json())
  .then(response => {
    console.log(response)
  });

showNav.addEventListener('click', () => {
  showNav.classList.add('hide') 
  hideNav.classList.remove('hide')
  headerNavMobile.classList.add('header__nav_mobile_active')
})

hideNav.addEventListener('click', () => {
  showNav.classList.remove('hide') 
  hideNav.classList.add('hide')
  headerNavMobile.classList.remove('header__nav_mobile_active')
})
