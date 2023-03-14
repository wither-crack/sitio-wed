class algoritmo{
    tarea(){
        function numerosEnRango(inicio, fin) {
            var numeros = [];
            for (var i = inicio; i < fin; i++) {
            numeros.push(i);
            }
            return numeros;
        }
    }

}

let algoritmo1 = new algoritmo()
algoritmo1.tarea()