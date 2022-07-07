var frutas = ["Manzana", "Platano", "Cereza", "Freza"];
console.log(frutas);

//Agregar un elemento al array
masFrutas = frutas.push("Uvas");

//Eliminar elementos del array
var ultimo = frutas.pop("uvas");

//Agregar un elemento al inicio del array
var nuevaLongitud = frutas.unshift("Uvas");

//eliminar elemento que esta en el incio, el elemento tiene que estar estrictamente al inicio del array
var borrarFruta = frutas.shift("Uvas");

//conocer la posicion del elemento del array
var posicion = frutas.indexOf("Cereza");


//Borrar un elemento en cualquier posición del array
var articulos = ["Carro", "Celular", "Moto", "Tv", "Libro"]
//Eliminar moto
articulos.splice(2,1)//El primer parámetro especifica el indice del elemento que se quiere eliminar y el segundo parámetro especifica cuantos elementos del arreglo despues de este indice quiero eliminar
//["Carro", "Celular", "Tv", "Libro"] Resultado