var frutas = ['Manzana', 'Plátano', 'Cereza', 'Fresa']

console.log(frutas)

var frutas = ['Manzana', 'Plátano', 'Cereza', 'Fresa']

console.log(frutas)
Array(4) [ "Manzana", "Plátano", "Cereza", "Fresa" ]
​
0: "Manzana"
​
1: "Plátano"
​
2: "Cereza"
​
3: "Fresa"
​
length: 4
​
<prototype>: Array []
debugger eval code:3:9
undefined
console.log(frutas.length);
4 debugger eval code:1:9
undefined
console.log(frutas[0]);
Manzana debugger eval code:1:9
undefined
console.log(frutas[2]);
Cereza

var frutas = ['Manzana', 'Plátano', 'Cereza', 'Fresa'];
undefined
var masFrutas = frutas.push("Uvas");
undefined
frutas
Array(5) [ "Manzana", "Plátano", "Cereza", "Fresa", "Uvas" ]

var ultimo = frutas.pop("Uvas");
undefined
frutas
Array(4) [ "Manzana", "Plátano", "Cereza", "Fresa" ]

var nuevaLongitud = frutas.unshift("Uvas");
undefined
frutas
Array(5) [ "Uvas", "Manzana", "Plátano", "Cereza", "Fresa" ]

var borrarFruta = frutas.shift("Uvas");
undefined
var nuevaLongitud = frutas.unshift("Uvas");
undefined
var borrarFruta = frutas.shift("Manzana");
undefined
frutas
Array(4) [ "Manzana", "Plátano", "Cereza", "Fresa" ]

var posicion = frutas.indexOf("Cereza");
undefined
posicion
2
frutas[2]
"Cereza" 

