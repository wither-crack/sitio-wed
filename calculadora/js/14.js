class algoritmo{
    tarea(){
        function factorial(n) {
            if (n === 0) {
            return 1;
            } else {
              return n * factorial(n - 1);
            }
        }

        function factorialesEnArreglo(arreglo) {
            const factoriales = [];
            
            for (let i = 0; i < arreglo.length; i++) {
            const numero = arreglo[i];
            const factorialNumero = factorial(numero);
            factoriales.push(factorialNumero);
            }
            
            return factoriales;
        }
        

        const arreglo = [3, 2, 4];
        const respuesta = factorialesEnArreglo(arreglo);
        console.log(respuesta); 
    }

}

let algoritmo1 = new algoritmo()
algoritmo1.tarea()