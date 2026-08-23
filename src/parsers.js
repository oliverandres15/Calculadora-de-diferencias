
 //const ruta = 'file1.json';
import path from "path";
import fs from 'fs';



export default function parser(ruta=''){ 
const rut = path.resolve(process.cwd(),'archivos',ruta)
const arch = fs.readFileSync(rut)
const obRes = JSON.parse(arch)   

 
return obRes;
}

