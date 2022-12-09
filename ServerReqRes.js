const { Console } = require('console');
const http = require('http');
const PUERTO = 3000;

const servidor = http.createServer((req,res)=>{
    /*console.log("===> req (solicitud)");
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers); */

    console.log("===> req (respuesta)");
    console.log(res.statusCode);  
    res.end("Ok");
});


servidor.listen(PUERTO,()=>{
   console.log(`El Servidor esta escuchando en el puerto: ${PUERTO}...`);
});    