const estatusPedido = () =>{
    const estatus = Math.random() < 0.8;
    console.log(estatus);
    return estatus;
}

/*
for(let i = 0;i < 10; i++){
    console.log(estatusPedido());
}*/

const miPedidoPizza = new Promise((resolve,reject) => {
    setTimeout(()=>{
      if(estatusPedido()){
          resolve('Pedido exitoso!, Pizza en camino.'); 
      }else{
          reject('Ocurrio un error...'); 
      }
    },3000);
});

 
const pedidoExitoso = (mensajeConfirmacion) =>{
    console.log(mensajeConfirmacion);
};

const pedidoRechazado = (razonDeRechazo) =>{
    console.log(razonDeRechazo);
};

/*
miPedidoPizza.then(pedidoExitoso,pedidoRechazado);*/

// Equivalencia a la anterior

/*
miPedidoPizza.then((mensajeConfirmacion)=>{
    console.log(mensajeConfirmacion);
},(razonDeRechazo)=>{
    console.log(razonDeRechazo);
});
*/

// Otra forma es usando catch

miPedidoPizza.then(pedidoExitoso).catch(pedidoRechazado);