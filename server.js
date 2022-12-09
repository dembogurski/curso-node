const http = require('http');
const PUERTO = 3000;

const servidor = http.createServer((req,res)=>{
   // Proceso
   console.log("Solicitud nueva...");
   res.end('Hola Mundo!!!'); // Para finalizar
});



servidor.listen(PUERTO,()=>{
    console.log("Servidor escuchando en: http://localhost:"+PUERTO);
});

// node server.js


