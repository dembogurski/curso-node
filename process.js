
//console.log(process.argv[2]);
//console.log(process.argv[3]);

// Ejemplo de usos de parametros 

//  node process.js 6 7
//  [node process.js 6 7]
//   0,     1,     ,2,  3


for (let i = 2;i < process.argv.length;i++ ){
    console.log(process.argv[i]);
}






