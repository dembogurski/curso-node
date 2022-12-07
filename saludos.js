
function saludar(nombre){
    return `Hola ${nombre}`;    
}

function saludarHolaMundo(){
    return 'Hola Mundo!!!';
}




//module.exports.saludar = saludar;
//module.exports.saludarHolaMundo = saludarHolaMundo;
//console.log(module.exports);

module.exports = {
    saludar:saludar,
    saludarHolaMundo:saludarHolaMundo
};
