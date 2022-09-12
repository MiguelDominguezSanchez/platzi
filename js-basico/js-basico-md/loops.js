var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i])
}
Hola, Maria debugger eval code:4:10
Hola, Sergio debugger eval code:4:10
Hola, Rosa debugger eval code:4:10
Hola, Daniel

//

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for(var estudiante of estudiantes){
  saludarEstudiantes(estudiante)
}

Hola, Maria debugger eval code:4:13
Hola, Sergio debugger eval code:4:13
Hola, Rosa debugger eval code:4:13
Hola, Daniel

// 

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
  console.log(`Hola, ${estudiante}`)
}

while(estudiantes.length > 0){
  console.log(estudiantes);
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante)
}

Array(4) [ "Maria", "Sergio", "Rosa", "Daniel" ]
debugger eval code:8:11
Hola, Maria debugger eval code:4:11
Array(3) [ "Sergio", "Rosa", "Daniel" ]
debugger eval code:8:11
Hola, Sergio debugger eval code:4:11
Array [ "Rosa", "Daniel" ]
debugger eval code:8:11
Hola, Rosa debugger eval code:4:11
Array [ "Daniel" ]
debugger eval code:8:11
Hola, Daniel
