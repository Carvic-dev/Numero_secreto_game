let listaDeNumerosAleatorios = [];
let maxNumero = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1; 

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
};

function mensagemInicial() {
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

mensagemInicial();

function verifyKick() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns, você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else {
        (chute > numeroSecreto) ? exibirTextoNaTela('p', `O número secreto é menor que ${chute}!`) : exibirTextoNaTela('p', `O número secreto é maior que ${chute}!`);
        tentativas++;

        limparCampo();
        function limparCampo() {
            chute = document.querySelector('input');
            chute.value = '';
        };
    }
};

// comentado para uso do ternário, instruções em if e else abaixo.

    /*if (chute > numeroSecreto) {
    exibirTextoNaTela('h1', 'Você errou!');
exibirTextoNaTela('p', `O número secreto é maior que ${chute}!`);
} else {
    exibirTextoNaTela('h1', 'Você errou!');
    exibirTextoNaTela('p', `O número secreto é menor que ${chute}!`);
}; */


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * maxNumero + 1);
    let quantidadeDeElementosNalista = listaDeNumerosAleatorios.length;

    if (quantidadeDeElementosNalista == maxNumero) {
        listaDeNumerosAleatorios = [];
    }
    if (listaDeNumerosAleatorios.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosAleatorios.push(numeroEscolhido);
        return numeroEscolhido;
    }
};

function reiniciarJogo() {
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    mensagemInicial();
    limparCampo();  
}