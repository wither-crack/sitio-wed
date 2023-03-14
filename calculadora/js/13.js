class algoritmo{
    tarea(){
        function factorial(numero) {
            if (numero == 0 || numero == 1) {
            return 1;
            }
            var factorial = 1;
            for (var i = 2; i <= numero; i++) {
              factorial *= i;
            }
            return factorial;
        }
        var numero = 5;
        var resultado = factorial(numero);

console.log("El factorial de " + numero + " es " + resultado);
    }

}

let algoritmo1 = new algoritmo()
algoritmo1.tarea()