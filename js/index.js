const pizzas = [
    {
        id: 1,
        nombre: "Pochito Morfoni",
        precio: 1800,
        ingredientes: [
            "tomate",
            "muzzarela",
            "cheddar",
            "panceta",
            "huevo"
        ],
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        id: 2,
        nombre: "Mediterranea",
        precio: 1650,
        ingredientes: [
            "aceitunas verdes",
            "aceitunas negras",
            "anchoas",
            "muzzarela",
            "tomate"
        ],
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        id: 3,
        nombre: "Fin de Messi",
        precio: 580,
        ingredientes: [
            "Tomate",
            "Muzzarela",
            "Aceitunas"
        ],
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        id: 4,
        nombre: "Riki Fort",
        precio: 2200,
        ingredientes: [
            "Camarones",
            "Mozzarela",
            "Nuez",
            "Aceitunas negras"
        ],
        image: "https://images.unsplash.com/photo-1618213957768-7789409b9dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBpenphfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        id: 5,
        nombre: "Clásica",
        precio: 560,
        ingredientes: [
            "Morrón",
            "Muzzarela",
            "Jamón"
        ],
        image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBpenphfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        id: 6,
        nombre: "Veggie",
        precio: 1800,
        ingredientes: [
            "Rucula",
            "Muzzarela",
            "Tomate",
            "Apio",
            "Nuez",
            "Roquefort"
        ],
        image: "https://images.unsplash.com/photo-1618213837799-25d5552820d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBpenphfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    }
]

/* EJERCICIO 2 */

const resultSection = document.getElementById("result__section")
const form = document.getElementById("form")
const input = document.querySelector(".form__input")

const searchPizza = (value) => pizzas.find((pizza) => pizza.id === value)

const showEmptyError = () => {
    resultSection.innerHTML = `
      <div class="showerrordiv">
      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
      <h2 class="error__text">Hola! Necesitas ingresar un número para poder buscar tu pizza!</h2>
      </div>`
    }


const renderResult = (pizza) => {
    if (!pizza) {
      resultSection.innerHTML = `
      <div class="pizza__section">
      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
      <h2 class="error"> ¡No pudimos encontrar tu pizza :(.</h2>
      <p>¡Probá con otro número!.</p>
      </div>`
    } else {
      resultSection.innerHTML = `
      <div class="pizza__section">
      <img class="pizza__img" src="${ pizza.image }"/>
      <h2 class="pizza__title">${pizza.nombre.toUpperCase()}</h2>
      <p class="pizza__description">Ingredientes: ${pizza.ingredientes.join(", ")}.</p>
      <h3 class="pizza__price"> Precio: $${pizza.precio} </h3>
      <p>Busca otro número de pizza para ver si la tenemos.</p>
      </div>
      `
    }
  }


/*  Esto es prácticamente lo que aprendimos en la clase :3
    Evitando el comportamiendo por default del form!
    Si el valor a buscar está vacío muestra que no hay nada! */
const submitSearch = (e) => {
    e.preventDefault()
    const searchValue = input.value;
    if (!searchValue) {
        showEmptyError(searchValue);
        return;
    }
    const searchedPizza = searchPizza(Number(searchValue))
    renderResult(searchedPizza);
}

const init = () => {
form.addEventListener("submit", submitSearch)
}

init()


/* 
EJERCICIO 1

// Pizzas que sean impares
const pizzaImpar = pizzas.filter( pizzas => pizzas.id % 2 == 1 )
pizzaImpar.forEach((pizza) => console.log(`El id de ${pizza.nombre} es impar`));

// Listar pizzas que cuesten menos de $600
const pizzaMenos600 = (pizza) => pizza.precio <= 600;

if (pizzas.some(pizzaMenos600)) {
    console.log(`Existen pizzas menos de $600`)
}
else {
    console.log(`Ninguna cuesta menos de $600`)
}

// Nombre de cada pizza con precio
const pizzasConPrecios = pizzas.forEach((pizza) => console.log(`Tenemos la ${pizza.nombre} a sólo $${pizza.precio}`));


// Ingredientes de cada pizza

pizzas.forEach((pizza => {
    console.log (`${pizza.nombre} viene con:`)
    pizza.ingredientes.forEach((ingrediente) => console.log(ingrediente))
})) */