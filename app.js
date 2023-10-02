/* la funcion require('colors') sirve para llamar las funciones de la carpeta colors acia el archibo en el que se ha implementado la funcion*/ 
/* require() es una funcion que sirve para llamar cualquer tipo de archibo bien sea desde la misma carpeta o desde otra carpeta*/
require("colors")
/*la funcion const math sirve para llamar el archibo math.js de la carpeta modules ya que usa la funcion require()*/
const math = require('./modules/math.js')
/*la funcion const main es una funcion flecha asincronica de tipo objeto*/ 
const main = async() => {
    console.clear()

    console.log("hola SENA CBA\n".blue);

    const numeros = [1, 2, 800, 912, 1000, 1283, 2811];
    for(const numero of numeros) {
        const invertidoComoNumero = math.invertirNumero(numero);
        const invertidoComoCadena = math.invertirNumeroComoCadena(numero);
        console.log("El número '%s' es '%s' invertido como número, y '%s' como cadena",numero, invertidoComoNumero, invertidoComoCadena)
    }

    const textos = ['Hola Sena', 'Ficha 2798618', 'Análisis y desarrollo de software']
    for(const texto of textos){
        const textoInvertido = math.invertirTexto(texto);
        console.log("El texto '%s' se invierte como '%s'", texto, textoInvertido);
    }
    
    
    const datos = [1234567, 'ADSO 2798618', [2798618, 'ADSO']]
    for(let dato of datos ){
        const datoConvertido = math.conversionDatos(dato);
        console.log(`El resultado de conversion es : ${datoConvertido}`);
    }
}
main();