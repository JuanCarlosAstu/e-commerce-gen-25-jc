import cart from './components/cart.js'
import loader from './components/loader.js'
import products from './components/products.js'
import showCart from './components/showCart.js'
import showMenu from './components/showMenu.js'
import getProducts from './helpers/getProducts.js'

/* UI Element */

/* Ocultar loader */
loader()

/* Mostrar Menu */
showMenu()

/* Mostrar Carrito */
showCart()

/* End UI Element */

/* Products */
const { db, printProducts } = products(await getProducts())

/* Carrito */
cart(db, printProducts)

/* Dark Mode */
// Establecemos una variable global
let darkModeState = false

// Seleccionamos el botón
const toggleBtn = document.getElementById('toggle')

// Detectamos si el usuario tiene habilitado el modo oscuro
const getScheme = window.matchMedia('(prefers-color-scheme: dark)')

function toggleDarkMode(state) {
  document.documentElement.classList.toggle('dark', state)

  // Establecemos el valor de la variable global con el valor del parámetro state
  darkModeState = state
}

// Creamos una nueva función para almacenar el valor en localStorage
function setSchemeState(state) {
  localStorage.setItem('dark-mode', state)
}

// toggleDarkMode(getScheme.matches); Reemplazamos el valor obtenido por la variable getScheme por el valor que esté guardado en localStorage, para que al cargar la página verifique el valor almacenado en localStorage
toggleDarkMode(localStorage.getItem('dark-mode') === 'true')

// Movemos el manejador del evento click del botón al final
toggleBtn.addEventListener('click', () => {
  // Negamos el valor guardado dentro de la función toggleDarkMode a la variable global darkModeState y se lo asignamos así misma
  darkModeState = !darkModeState

  // document.documentElement.classList.toggle('dark') Llamamos a la funciones toggleDarkMode para alternar el tema y setSchemeState para guardar el valor en localStorage
  toggleDarkMode(darkModeState)
  setSchemeState(darkModeState)
})

