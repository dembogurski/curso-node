const express = require('express');

const app = express();

const {infoCursos} = require('./datos/cursos.js');

const PUERTO = process.env.PORT || 3000;


// Routers
const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion',routerProgramacion);


const routerMatematicas = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas',routerMatematicas);


app.get('/',(req,res)=>{
   res.send('Mi primer servidor con express. Cursos :laptop.');
});

app.get('/api/cursos',(req,res)=>{
    res.send(JSON.stringify(infoCursos)); 
});
  

app.listen(PUERTO,()=>{
    console.log(`El servidor esta escuchando en el puerto: ${PUERTO}...`);
});