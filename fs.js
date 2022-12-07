const fs = require('fs');


// Leer un archivo

console.log("1- Antes de leer el archivo...");

fs.readFile('index.html','utf-8',(err,contenido)=>{
    if(err){
       // throw err;
       console.log(err);
    }else{
        console.log("1- El contenido es:  "+contenido);
    }
   
}); 
console.log("2- Despues de leer el archivo...");
// Renombrar

 
fs.rename('index.html','main.html',(err)=>{
   if(err){
      throw err;
   }
   console.log("2- Nombre cambiado exitoasamente...");
});  
console.log("3- Despues de cambiar el nombre del archivo...");
// Agregar contenido

 
fs.appendFile('main.html','<p>Hola</p>',(err)=>{
   if(err){
    throw err;
   }
   console.log('3- Archivo actualizado...')
});  
console.log("4- Despues de agregar contenido al final...");

// Remplazar todo el contenido del archivo, crea el archivo si no existe
 
fs.writeFile('main.html','Contenido nuevo...',(err)=>{
    if(err){
     throw err;
    }
    console.log('4- Contenido remplazado exitosamente..');
 });    
 console.log("5- Despues de remplazar el contenido...");
 // Eliminar un archivo 

 fs.unlink('main.html',(err)=>{
    if(err){
        throw err;
       }
       console.log('5- Contenido eliminado exitosamente..');
 });

 console.log("6- Despues de eliminar archivo...");