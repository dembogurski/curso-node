

function ordernarProducto(producto){
     return new Promise((resolve,recject)=>{
        console.log("Ordenando:  "+producto+" de freeCodeCamp");
        setTimeout(()=>{
            if(producto == 'taza'){
                resolve('Ordenando una taza con logo de freeCodeCamp');
            }else{
                recject('Este producto no esta disponible actualmente.');
            }
        },2000);
     });
}

// Chaining promises

function procesarPedido(respuesta){
    return new Promise((resolve,recject)=>{
        console.log('Procesando respuesta...');
        console.log('La respuesta fue: '+respuesta);
        setTimeout(()=>{
            resolve('Gracias por tu compra, Disfruta tu producto de freeCodeCamp.'); 
        },4000);
    });
}

/*
ordernarProducto('termo').then(respuesta=>{
    console.log('Respuesta recibida');
    console.log(respuesta);
    return procesarPedido(respuesta);
}).then(respuestaProcesada=>{
    console.log(respuestaProcesada);
}).catch(error=>{
    console.log(error);
});

*/

// Codigo equivalente al anterior usando async y await en vez de encadenar promesas


async function realizarPedido(producto){
    try{
        const respuesta = await ordernarProducto(producto);
        console.log('Respuesta recibida');
        console.log(respuesta);
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    }catch(error){
         console.error("Catch:  "+error);
    }
}

//realizarPedido('taza');

realizarPedido('termo');