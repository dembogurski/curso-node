const http = require('http');

const servidor = http.createServer((req,res)=>{
   // Proceso

   res.end('Hola Mundo!!!'); // Para finalizar
});

servidor.listen(3000,()=>{
    console.log("Servidor iniciado...");
});

// node server.js


