const h1 = document.querySelector('h1')
const form = document.querySelector('#form')
// const p = document.querySelectorAll('p')
// const parrafito = document.getElementsByClassName('parrafito')
// const pid = document.getElementById('pid')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')

// btn.addEventListener('click', btnOnClick)

form.addEventListener('submit', sumarInputValues)

/*
console.log(input.value)

console.log({
	h1,
	p,
	parrafito,
	pid,
	input,
})

h1.innerHTML = 'Patito <br> feo'
h1.innerText = 'Patito <br> feo'
// console.log(h1.getAttribute('class'))
// h1.setAttribute('class', 'rojo')

h1.classList.add('rojo')
h1.classList.remove('verde')
h1.classList.toggle('verde')
h1.classList.contains('verde')

input.value = '456'

const img = document.createElement('img')
img.setAttribute('src', './img/lorem.jpg')
console.log(img)

pid.innerHTML = ''
pid.appendChild(img)

// pid.innerHTML = img
*/

function sumarInputValues(event) {
	console.log({ event })

	event.preventDefault()
	// console.log('Escuchando el evento de click')
	// console.log(input1.value + input2.value)
	const sumaInputs = input1.value + input2.value
	pResult.innerText = 'Resultado: ' + sumaInputs
}
