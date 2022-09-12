var edad = 18

if (edad === 18) {
	console.log('Puedes votar, será tu primera votación')
} else if (edad > 18) {
	console.log('Puedes votar de nuevo')
} else if (edad > 18) {
	console.log('Puedes votar de nuevo')
} else if (edad > 18) {
	console.log('Puedes votar de nuevo')
} else if (edad > 18) {
	console.log('Puedes votar de nuevo')
} else {
	console.log('Aún no puedes votar')
}

condition ? true : false

var numero = 1

var resultado = numero === 1 ? 'Si soy un uno' : 'No, no soy uno'

// Rock-Paper-Scissors

var op1 = 'Rock'
var op2 = 'Paper'
var op3 = 'Scissors'

var result = function (user, cpu) {
	if (user != cpu) {
		if (user === op1 && cpu === op3) {
			console.log(`The user won with ${op1}`)
		} else if (user === op2 && cpu === op1) {
			console.log(`The user won with ${op2}`)
		} else if (user === op3 && cpu === op2) {
			console.log(`The user won with ${op3}`)
		} else {
			console.log('The CPU won')
		}
	} else if (user === cpu) {
		console.log('There is a draw')
	}
}

result(user, cpu)
