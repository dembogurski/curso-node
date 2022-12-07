

const curso = require('./curso.json');
 
//console.log(curso);

let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas":"45642",
    "numLikes":"21123",
    "temas":[
        "JavaScript",
        "Node.js"
    ],
    "esPublico": true
}

console.log(  infoCurso);

// Pasar de Obj a string
let infoCursoJson = JSON.stringify(infoCurso);

console.log(  infoCursoJson);

console.log( typeof  infoCursoJson);


// Pasar de Json a Objeto
let cursoObj = JSON.parse( infoCursoJson );
console.log(  cursoObj);
console.log( typeof  cursoObj);
