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
    }
]

/* EJERCICIO 2 */

const resultSection = document.getElementById("result__section");
const form = document.getElementById("form");
const input = document.querySelector(".form__input");

const searchPizza = (value) => pizzas.find((pizza) => pizza.id === value);

const showEmptyError = () => {
    resultSection.innerHTML = `
      <div class="showerrordiv">
      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
      <h2 class="error__text">Hola! Necesitas ingresar un número para poder buscar tu pizza!</h2>
      </div>`;
    };



const submitSearch = (e) => {
    e.preventDefault();
    const searchedValue = input.value;
    if (!searchedValue) {
        showEmptyError(searchedValue);
        return;
    }
};

const init = () => {
form.addEventListener("submit", submitSearch);
};

init();


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