const fs = require("fs");
const path = require("path");

const rutaAbsoluta = path.resolve(__dirname, "Users", "Delegado", "Downloads");
const ruta = "C:/Users/Delegado/Downloads";
console.log(rutaAbsoluta);
fs.readdir(ruta, (error, file) => {
  if (error) {
    throw error;
  }
  console.log("finalizando lectura");
  console.log(file);
});

// function leer(ruta, cb) {
//   fs.readFile(ruta, (err, data) => {
//     console.log(data.toString());
//   });
// }
// leer(__dirname + "/archivo.txt");

//La funcion readdirSync lista los archvios de un directorio y se ejecuta de forma sincrona.
//La funcion readdir lista los archivos de un directorio y se ejecuta de forma asincrona.
