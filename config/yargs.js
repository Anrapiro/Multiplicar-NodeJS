const opc = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    alias: 'l',
    default: 10
  }
};

// Definir yargs
const argv = require('yargs')
  .command('listar', 'Imprime en consola la tabla de multiplicar', opc)
  .command('crear', 'Crea el archivo con la tabla de multiplicar', opc)
  .help() // Nos imprime por consola una ayuda
  .argv;

module.exports = {
  argv
};
