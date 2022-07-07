function saludarEstudiantes(estudiantes){
    console.log(`Hola, ${estudiantes}`);
}

i = 0;

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

while(i < estudiantes.length){
    saludarEstudiantes(estudiantes[i]);
    i++;
}