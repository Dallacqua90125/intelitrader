const array1 = [22, 5, 5, 98, 63, 55, 48, 89, 42, 18];
const array2 = [1, 1, 45, 7, 13, 65, 45, 90, 65, 34];

function MenosDistancia(array1, array2) {
    var diferencaAtual = 100
    var a1 = [];
    var a2 = [];
    var a3 = [];
    for (let i = 0; i < array1.length; i++) {
        for (let o = 0; o < array2.length; o++) {
            var diferenca = Math.abs(array1[i] - array2[o])

            if (diferenca === 0) {
                a1 = []
                a2 = []
                a3 = []
                if (diferencaAtual > diferenca) {
                    diferencaAtual = diferenca;
    
                    n1 = array1[i]
                    n2 = array2[o]
                    a1.push(array1[i])
                    a2.push(array2[o])
                    
                    a3 = diferencaAtual
                } else if (diferencaAtual === diferenca) {
    
                    a3 = diferencaAtual;
                    a1[0] = n1
                    a2[0] = n2
                    a1.push(array1[i]);
                    a2.push(array2[o]);
                    
                }
            }
            else if (diferencaAtual > diferenca) {
                diferencaAtual = diferenca;
                

                a1 = [];
                a2 = [];
                a3 = [];
                
                a3 = diferencaAtual
                n1 = array1[i]
                n2 = array2[o]
                a1.push(n1)
                a2.push(n2)
            } else if (diferencaAtual === diferenca) {

                a3 = diferencaAtual;
                a1[0] = n1
                a2[0] = n2
                a1.push(array1[i]);
                a2.push(array2[o]);
                
            }
        }
    }
    return [a3, a1, a2];
}

const array3 =  MenosDistancia(array1, array2)

console.log(`Distancia entre array: ${array3[0]}`);
console.log(`Numero Array 1: ${array3[1]}`);
console.log(`Numero Array 2: ${array3[2]}`);