const argv = require('.\\config\\yargs').argv;

// importamos el paquete colors
require('colors');
// const colors = require('colors');

const { crearArchivo, listarArchivo } = require('.\\accion\\multiplicar');
// const { listarArchivo } = require('.\\accion\\multiplicar');

const comando = argv._[0];
switch (comando) {
  case 'crear':

    crearArchivo(argv.base, argv.limite).then((valor) => {
      // console.log(`EL archivo ${colors.green(valor)} a sido creado con exito!`);
      console.log(`EL archivo ${valor.green} a sido creado con exito!`);
    }).catch((err) => {
      console.log(err);
    });

    break;
  case 'listar':

    listarArchivo(argv.base, argv.limite).then((valor) => {
      console.log(valor);
    }).catch((err) => {
      console.log(err);
    });

    break;
  default:
    console.log('Comando no reconocido');
}
