var numero = 1

switch (numero) {
	case 1:
		console.log('Soy uno!')
		break
	case 10:
		console.log('Soy un 10!')
		break
	case 100:
		console.log('Soy un 100!')
		break
	default:
		console.log('No soy nada')
}

//

var op1 = 'Rock'
var op2 = 'Paper'
var op3 = 'Scissors'

var result = function (user, cpu) {
	switch ((user, cpu)) {
		case user === op1 && cpu === op3:
			console.log(`The user won with ${op1}`)
			break
		case user === op2 && cpu === op1:
			console.log(`The user won with ${op2}`)
			break
		case user === op3 && cpu === op2:
			console.log(`The user won with ${op3}`)
			break
		case user === cpu:
			console.log('There is a draw')
		default:
			console.log('The cpu won')
	}
}

result(user, cpu)
