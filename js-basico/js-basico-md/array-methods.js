var articulos = [
	{ nombre: 'Bici', costo: 3000 },
	{ nombre: 'Tv', costo: 2500 },
	{ nombre: 'Libro', costo: 320 },
	{ nombre: 'Celular', costo: 10000 },
	{ nombre: 'Laptop', costo: 20000 },
	{ nombre: 'Teclado', costo: 500 },
	{ nombre: 'Audifonos', costo: 1700 },
]

var articulosFiltrados = articulos.filter(function (articulo) {
	return articulo.costo <= 500
})

articulosFiltrados
Array [ {…}, {…} ]
​
0: Object { nombre: "Libro", costo: 320 }
​
1: Object { nombre: "Teclado", costo: 500 }
​
length: 2
​
<prototype>: Array []

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});
undefined
nombreArticulos
Array(7) [ "Bici", "Tv", "Libro", "Celular", "Laptop", "Teclado", "Audifonos" ]
​
0: "Bici"
​
1: "Tv"
​
2: "Libro"
​
3: "Celular"
​
4: "Laptop"
​
5: "Teclado"
​
6: "Audifonos"
​
length: 7
​
<prototype>: Array []

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
})
undefined
encuentraArticulo
Object { nombre: "Laptop", costo: 20000 }

articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});
Bici debugger eval code:2:10
Tv debugger eval code:2:10
Libro debugger eval code:2:10
Celular debugger eval code:2:10
Laptop debugger eval code:2:10
Teclado debugger eval code:2:10
Audifonos

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
undefined
articulosBaratos
true 