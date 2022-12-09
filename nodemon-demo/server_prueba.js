const http = require('http');
const PUERTO = 3000;
const servidor = http.createServer((req,res)=>{
   res.end('Hola Doglas!!!');
});

servidor.listen(PUERTO,()=>{
    console.log("Servidor escuchando en: http://localhost:"+PUERTO);
});