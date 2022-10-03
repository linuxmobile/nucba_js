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

// Pizzas que sean impares
const pizzaImpar = pizzas.filter( pizzas => pizzas.id % 2 == 1 )
pizzaImpar.forEach((pizza) => console.log(`El id de ${pizza.nombre} es impar`));