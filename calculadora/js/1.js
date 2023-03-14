function numeroperfecto(numero){
    if (typeof numero !== 'number'){
        throw TypeError('el numero debe ser entero');
    }

    if (!Number.isInteger(numero)){
        throw TypeError('el numero debe ser entero')
    }
    if (numero<=0){
        throw Error('el numero dbe ser mayor a 0');
    }
    let acumulador = 0;

    for (let i = 1; i <= numero / 2; i++) {
        if (numero % i == 0) {
            acumulador += i;
            
        }
        
    }
    return acumulador != 0 && acumulador == numero
}

try{
    console.log(numeroperfecto());

}catch (e){
    console.log('error:${e.message},');
}
