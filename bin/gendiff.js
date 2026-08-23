#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs'; // Importa el módulo fs para verificar la existencia del archivo si es necesario
import parser from '../src/parsers.js';
import path from 'path';
import comparar from '../src/comparar.js';

// Crea una nueva instancia del programa
const program = new Command();

// Configura la información básica del programa
program
  .version('1.0.0', '-v, --version')
  .description('Compares two configuration files and shows a difference.')
  .option('-f,--format <type>', 'output format')
  .helpOption('-h, --help', 'Display help for command')

  // Define cómo manejar los argumentos de los archivos si los hubiera
  // Aunque solo pides la ayuda, es bueno definir la estructura básica de gendiff
  //program
  .argument('[filepath1]', 'path to first file')
  .argument('[filepath2]', 'path to second file')
  .action((filepath1, filepath2) => {
    // Aquí iría la lógica principal de tu aplicación
    // Por ahora, solo muestra un mensaje para demostrar que funciona

    //const lnk = parser();
//console.log(parser(filepath1))
//console.log(parser(filepath1))
//console.log(filepath2)
    const ob1 = parser(filepath1);
    const ob2 = parser(filepath2);

    const objComparar=comparar(ob1,ob2);
const res = JSON.stringify(objComparar).split(',').join('\n');
let resf=res.slice(0,1)+'\n'+res.slice(1,-1)+'\n'+res.slice(-1)

    console.log(`Comparando archivos: ${resf}`);
        

    //console.log(JSON.stringify(res, null, 2))
    // Puedes verificar la existencia de los archivos aquí si lo deseas
    // if (!fs.existsSync(filepath1) || !fs.existsSync(filepath2)) {
    //   console.error('Error: Archivo no encontrado.');
    //   process.exit(1);
  })
  .parse(); 