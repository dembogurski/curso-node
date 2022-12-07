const http = require('http');

const servidor = http.createServer((req,res)=>{
   // Proceso
   console.log("Solicitud nueva...");
   res.end('Hola Mundo!!!'); // Para finalizar
});

servidor.listen(3000,()=>{
    console.log("Servidor iniciado...");
});

// node server.js


