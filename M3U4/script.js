// Ejercicio 1:
// Crear un documento html con 3 cuadrados que, al ser clickeados, cambien el color de fondo del documento. Cada cuadrado debera tener un color distinto.
const elementBox1 = document.querySelector('.box1')
const elementBox2 = document.querySelector('.box2')
const elementBox3 = document.querySelector('.box3')
const elementBody=document.querySelector(".body")
const elementText = document.querySelector("[type='text']")
const elementSubmit = document.querySelector('.submit')
const elementResponse = document.querySelector('.response')
const elementObject = document.querySelector('.object')
const elementPass = document.querySelector('.pass')


elementBox1.addEventListener('click', () => {
  elementBody.setAttribute("class","blue");
  })


  elementBox2.addEventListener('click', () => {
    elementBody.setAttribute("class","red");
  })
  
 
elementBox3.addEventListener('click', () => {
  elementBody.setAttribute("class","green");
  })


// Ejercicio 2:
// Programar un contador de caracteres para un textarea.

elementSubmit.addEventListener('click', () => {
const result=elementText.value.split("").length

 elementResponse.innerHTML = result


})



// Ejercicio 3:
// Dado el siguiente array de alumnos utilizar los métodos de array vistos para generar un array con los alumnos aprobados. Se considera aprobado todo alumno que tenga una nota mayor o igual a 7.

var alumnos = [
  {
    nombre: 'Juan Gomez',

    nota: 7,
  },
  {
    nombre: 'Pedro Rodriguez',

    nota: 4,
  },
  {
    nombre: 'Roxana García',

    nota: 8,
  },
  {
    nombre: 'Luciano Lopez',

    nota: 5,
  },
  {
    nombre: 'Fernanda Gimenez',

    nota: 6,
  },
  {
    nombre: 'Florencia Martinez',

    nota: 10,
  },
  {
    nombre: 'Raul Sanchez',

    nota: 7,
  },
  {
    nombre: 'Sandra Figueroa',

    nota: 8,
  },
]

elementObject.innerHTML= `var alumnos = [
  {
    nombre: 'Juan Gomez',

    nota: 7,
  },
  {
    nombre: 'Pedro Rodriguez',

    nota: 4,
  },
  {
    nombre: 'Roxana García',

    nota: 8,
  },
  {
    nombre: 'Luciano Lopez',

    nota: 5,
  },
  {
    nombre: 'Fernanda Gimenez',

    nota: 6,
  },
  {
    nombre: 'Florencia Martinez',

    nota: 10,
  },
  {
    nombre: 'Raul Sanchez',

    nota: 7,
  },
  {
    nombre: 'Sandra Figueroa',

    nota: 8,
  },
]`

const objectFilter=alumnos.filter((alumn)=>(alumn.nota>=7))
const arrayName=objectFilter.map((alumn)=>(alumn.nombre))

elementPass.innerHTML=`[${arrayName}]`

console.log(arrayName)