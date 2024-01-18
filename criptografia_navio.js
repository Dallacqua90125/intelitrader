function desencrip(mensagem) {
let mensagemDescrip = ''

    for (let i = 0; i < mensagem.length; i += 8) {
        let bloco = mensagem.substr(i, 8);
        if (bloco.charAt(6) == 0) {
            bloco = bloco.substring(0, 6) + "1" + bloco.charAt(7); 
        }else{
            bloco = bloco.substring(0, 6) + "0" + bloco.charAt(7);
        }

        if (bloco.charAt(7) == 0) {
            bloco = bloco.substring(0, 7) + "1";
        }else{
            bloco = bloco.substring(0, 7) + "0";
        }
        bloco = bloco.substring(4, 8) + bloco.substring(0, 4);

        mensagemDescrip += String.fromCharCode(parseInt(bloco, 2));
        
        
    }
    return  mensagemDescrip
}


const mensagemCrip = `10010110111101110101011000000001000101110010011001010111000000010001011101110110010101110011011011110111110101110101011100000011`;

var mensagemDescrip = desencrip(mensagemCrip);

console.log(mensagemDescrip)
