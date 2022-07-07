var articulos = [
    {nombre: "bicicleta", costo: 3000},
    {nombre: "television", costo: 2500},
    {nombre: "libro", costo: 350},
    {nombre: "celular", costo: 10000},
    {nombre: "laptop", costo:20000},
    {nombre: "teclado", costo:500},
    {nombre: "audifonos", costo:1700}
];
//Agregar a un nuevo array los articulos filtrados segun el parámetro (Filter)
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});
// Mapeo de contenidos para mostrar el contenido de un array (Map)
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});
// Encontrar algo dentro de el array (find)

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "laptop";
});

// Realizar el filtrado sin generar un nuevo array (for each)

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//Regresa validación verdadero o falso para articulos que cumplan con la validacion, tambien genera un nuevo array

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
//articulosBaratos (Llamar variable en consola)
//true (la consola retorna true o false)