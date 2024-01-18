function notificador(notificacao) {
    var notificacaoOrdenada = [];
    var notificacaoNova = [];

    for (var i = 1; i < notificacao.length; i += 4) {
        if (notificacao[i] != 0) {
            var posicao = notificacao[i];
            var acao = notificacao[i + 1];
            var valor = notificacao[i + 2];
            var quantidade = notificacao[i + 3];

            notificacaoOrdenada.push([posicao, acao, valor, quantidade]);
        }
    }

    notificacaoOrdenada.sort(function (a, b) {
        return a[0] - b[0];
    });

    notificacaoOrdenada = [].concat(...notificacaoOrdenada);

    for (let o = 0; o < notificacaoOrdenada.length; o += 4) {
        var posicaoAtual = notificacaoOrdenada[o];
        var acaoAtual = notificacaoOrdenada[o + 1];
        var valorAtual = notificacaoOrdenada[o + 2];
        var quantidadeAtual = notificacaoOrdenada[o + 3];

        if (acaoAtual == 0 ) {
            if (valorAtual > 0) {
                if (quantidadeAtual != 0) {
                    if (posicaoAtual == notificacaoOrdenada[o + 4]) {
                    
                    }
                    else {
                        notificacaoNova.push([posicaoAtual, valorAtual, quantidadeAtual ])
                    } 
                }
            }
            
        }
        else if (acaoAtual == 1) {
            if (notificacaoOrdenada[o - 1] > 0 && notificacaoOrdenada[o - 2] > 0) {
                if (quantidadeAtual == 0 ) {
                    quantidadeAtual = notificacaoOrdenada[o - 1];
                }
                if (valorAtual == 0){
                    valorAtual = notificacaoOrdenada[o - 2];
                    
                } 
                notificacaoNova.push([posicaoAtual, valorAtual, quantidadeAtual]);
            }
            
            
        }
         
    }

    return notificacaoNova;
}


var notificacao = [
    12,
    1, 0, 15.4, 50,         
    2, 0, 15.4, 10,        
    3, 0, 15.9, 20,         
    4, 0, 16.1, 100,        
    5, 0, 16.20, 20,         
    6, 0, 16.43, 30,         
    7, 0, 17.20, 70,         
    8, 0, 17.35, 80,         
    9, 0, 17.50, 200, 


    
    1, 0, 15.4, 50,
    2, 0, 15.5, 50,
    2, 2, 0, 0,
    2, 0, 15.4, 10,
    3, 0, 15.9, 30,
    3, 1, 0, 20,
    4, 0, 16.50, 200,
    5, 0, 17.00, 100,
    5, 0, 16.59, 20,
    6, 2, 0, 0,
    1, 2, 0, 0,
    2, 1, 15.6, 0,

    
];

var notif = notificador(notificacao);

for (let i = 0; i < notif.length; i++) {
    console.log(notif[i]);
    
}
