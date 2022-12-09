 const http = require('http');
 const cursos = require('./cursos.js');
 const PUERTO = 3000;
 
 const servidor = http.createServer((req,res)=>{
      const {method} = req;
      switch(method){
        case 'GET':
            return manejarSolicitudGET(req,res);
        case 'POST':
            return manejarSolicitudPOST(req,res);    
        default: 
            res.statusCode = 501;
            res.end(`El metodo ${method} no puede ser manajado por el servidor`);
            console.log(`El metodo ${method} no puede ser manajado por el servidor`);
      }
 });

 function manejarSolicitudGET(req,res){
    const path = req.url;

    console.log(path);
    console.log(res.statusCode);  // 200 Ok by default

    if(path === '/'){
        res.writeHead(200,{'content-type':'aplication/json'}); // Solo un ejemplo para indicar el tipo de dato que se esta enviando
        //res.statusCode = 200;
        res.end('Bienvenidos a mi primer servidor y API creados con Node.js');
    }else if(path === '/cursos'){
        //res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos));
    }else if(path === '/cursos/programacion'){
        //res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos.programacion));
    }else if(path === '/cursos/matematicas'){
        //res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos.matematicas));
    }else{
        //res.statusCode = 404;
        res.end('El recurso solicitado no existe...');
    } 
    
 }

 function manejarSolicitudPOST(req,res){
    const path = req.url;
    if(path === '/cursos/programacion'){
        let cuerpo = '';
        req.on('data',contenido=>{
           cuerpo += contenido.toString();  
        });

        req.on('end',()=>{
            console.log(cuerpo);
            console.log(typeof cuerpo);

            cuerpo = JSON.parse(cuerpo);

            console.log(typeof cuerpo);

            console.log(cuerpo.titulo);

            res.end('El servidor recibio una solicitud POST para '+path);
        });


        //return res.end('El servidor recibio una solicitud POST para '+path);
    }
 }

servidor.listen(PUERTO,()=>{
    console.log(`Servidor escuchando en: http://localhost:${PUERTO}...`);
});

 