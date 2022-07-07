//Sintaxis

var miAuto = {
    marca: "Toyota",
    modelo: "Prado",
    anio: 2020,
    detalleDelAuto: function(){
        console.log(`auto ${this.modelo} ${this.anio}`)
    }
};
//la forma de acceder a un objeto es con . y palabra clave

miAuto.marca
miAuto.detalleDelAuto();
///////////////////////////////////////////////////////////////////////////////////////
// Funcion constructora

function auto(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

var autoNuevo = new auto("Chevrolet", "sonic", 2022);
var autoNuevo2 = new auto("Nisan", "Tida", 2021);
var autoNuevo3 = new auto("Chevrolet", "Sail", 2018);