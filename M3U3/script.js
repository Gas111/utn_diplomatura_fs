// Ejericio 1
// Crear el código que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:
// 0 a 1000 metros = pie
// 1000 a 10000 metros = bicicleta
// 10000 a 30000 metros = colectivo
// 30000 a 100000 metros = auto
// +100000 = avion
const elementText = document.querySelector("[type='text']")
const elementResponse = document.querySelector('.response')
const elementSubmit = document.querySelector('.submit')
const elementArray = document.querySelector('.array')
const elementArray1 = document.querySelector('.array1')
const elementArray2 = document.querySelector('.array2')
const elementMax = document.querySelector('.max')
const elementMax1 = document.querySelector('.max1')
const elementMax2 = document.querySelector('.max2')

elementSubmit.addEventListener('click', () => {
  console.log(elementText.value)

  let distance = parseInt(elementText.value)
  let result = ''
  console.log(distance)

  if (distance <= 1000) result = 'pie'
  if (distance > 1000 && distance <= 10000) result = 'bicicleta'
  if (distance > 10000 && distance <= 30000) result = 'colectivo'
  if (distance > 30000 && distance <= 100000) result = 'auto'
  if (distance > 100000) result = 'avion'
  elementResponse.innerHTML = result


})

// Ejericio 2
// Crear el código que reciba como parámetro un array de números y devuelva el mayor.
const array = [1, 2, 3, 4, 5]
const array1 = [9, 7, 3, 4, 5]
const array2 = [11, 7, 3, 4, 15]

elementArray.innerHTML=`[${array}]`
elementArray1.innerHTML=`[${array1}]`
elementArray2.innerHTML=`[${array2}]`

function maxNumber(array) {
array.sort((a,b)=>(b-a))
return array[0]
}

elementMax.innerHTML=maxNumber(array)
elementMax1.innerHTML=maxNumber(array1)
elementMax2.innerHTML=maxNumber(array2)