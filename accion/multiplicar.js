const fs = require('fs');

// importamos el paquete colors
require('colors');
// const colors = require('colors');

function listarArchivo (base, limite) {
  return new Promise((resolve, reject) => {
    if (!Number(base) || !Number(limite)) {
      const error = 'El valor introducido no es un numero';
      reject(error);
      return;
    }

    let data = '';
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i} \n`;
    }
    console.log('============='.green);
    console.log(` Tabla del ${base}`.green);
    console.log('============='.green);
    resolve(data);
  });
}

function crearArchivo (base, limite) {
  return new Promise((resolve, reject) => {
    if (!Number(base) || !Number(limite)) {
      const error = `El valor introducido '${base}' o '${limite}' no es un numero`;
      reject(error);
      return;
    }

    let data = '';

    for (let i = 1; i <= limite; i++) {
      data = data + `${base} * ${i} = ${base * i} \n`;
    }

    // fs.writeFile(file, data[,opciones], callback)
    const file = `.\\recursos\\tabla-Multiplicar-${base}.txt`;
    fs.writeFile(file, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(file);
      }
    });
  });
}

// Exportamos las funciones para poderlas utilizar en otros archivos
module.exports = {
  crearArchivo,
  listarArchivo
};
