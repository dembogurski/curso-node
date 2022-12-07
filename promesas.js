 
 const promesaCumplida = true;
 
 const miPromesa = new Promise((resolve, reject) => {
   setTimeout(() => {
      if(promesaCumplida){
          resolve('Promesa Cumplida!');
      }else{
        reject('Promesa rechazada...');
      }
   },3000);
 });


const manejarPromesaCumplida = (valor) =>{
    console.log(valor);
} 

const manejarPromesaRechazada = (razonDeRechazo) =>{
    console.log(razonDeRechazo);
} 

miPromesa.then(manejarPromesaCumplida,manejarPromesaRechazada);
