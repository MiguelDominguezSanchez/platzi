// what are functions and how can we use them?
// functions are a set of statements that we can use to generate certain actions with with the values that we store previously in the variables

// the set of statements are a procedure or tasks inner in  the function, in order to do certain steps or calculus, using those values to return another thing, to validate another thing, or generate another thing

// Two types of function

// Declarative
function miFunction() {
	return 3
}

miFunction()

// Expression
var miFunction = function (a, b) {
	return a + b
}

miFunction()

// function saludarEstudiantes(estudiante) {
//   console.log(estudiante)
// }
// undefined
// saludarEstudiantes("Diego")
// Diego debugger eval code:2:11
// undefined

// function saludarEstudiantes(estudiante) {
//   console.log(`Hola ${estudiante}`)
// }
// undefined
// saludarEstudiantes("Diego")
// Hola Diego debugger eval code:2:11
// undefined

// function sumar(a,b) {
//   var resultado = a + b;
//     return resultado;
// }
// undefined
// sumar(1,2);
// 3

// function sumar(a,b) {
//   return a + b;
// }
// undefined
// sumar(1,2)
// 3

// //////////////////////////////////

// Cuando hablamos de funciones en JavaScript, tenemos dos tipos de funciones: Funciones Declarativas (function declaration / function statement) y Expresiones de función (function expression / funciones anónimas).
// Funciones Declarativas:

// En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:

// function saludar(nombre) {
// 	console.log(`Hola ${nombre}`);
// }

// saludar('Diego');

// Expresión de función:

// En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima.

// var nombre = function(nombre){
//     console.log(`Hola ${nombre}`)
// }

// nombre(‘Diego’);

// En la expresión de función, la función podría o no llevar nombre, aunque es más común que se hagan anónimas.
// Diferencias:

// A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

// Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.

// ////////////

// var miNombre = "Diego"

// function nombre() {
//     var miApellido = "De Grande";
//     console.log(miNombre + " " + miApellido);
// }

// nombre();
// Diego De Grande
