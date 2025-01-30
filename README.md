# Numero_secreto_game
Jogo criado com objetivo de exercitar minhas habilidades básicas em js, durante o curso ONE | Oracle
# Jogo do Número Secreto

## Descrição
Este é um jogo simples onde o jogador deve adivinhar um número secreto gerado aleatoriamente pelo sistema. O jogo fornece feedback ao jogador se o número secreto é maior ou menor que o chute fornecido. O jogo continua até que o jogador adivinhe corretamente o número secreto.

## Estrutura do Projeto
O projeto está organizado da seguinte forma:



## Arquivos

### index.html
Este arquivo contém a estrutura HTML do jogo. Ele inclui:
- Um título do jogo.
- Um campo de entrada para o jogador inserir seu chute.
- Botões para enviar o chute e reiniciar o jogo.
- Um script para carregar o arquivo `app.js`.

### style.css
Este arquivo contém os estilos CSS para o jogo. Ele define a aparência do jogo, incluindo o layout, cores e fontes.

### app.js
Este arquivo contém a lógica do jogo. Ele inclui:
- Funções para gerar números aleatórios.
- Funções para exibir mensagens na tela.
- Funções para verificar o chute do jogador.
- Funções para reiniciar o jogo.

## Funcionalidades

### Geração de Número Aleatório
A função `gerarNumeroAleatorio` gera um número aleatório entre 1 e 10. Ela garante que o número gerado não tenha sido gerado anteriormente, armazenando os números gerados em uma lista.

### Exibição de Mensagens
A função `exibirTextoNaTela` exibe mensagens na tela e utiliza a biblioteca `responsiveVoice` para falar as mensagens em voz alta.

### Verificação do Chute
A função `verifyKick` verifica se o chute do jogador está correto. Se o chute estiver correto, uma mensagem de sucesso é exibida e o botão de reiniciar é habilitado. Se o chute estiver incorreto, uma mensagem indicando se o número secreto é maior ou menor que o chute é exibida.

### Reinício do Jogo
A função `reiniciarJogo` reinicia o jogo, gerando um novo número secreto e resetando o número de tentativas.

## Como Jogar
1. Abra o arquivo `index.html` em um navegador.
2. Insira um número entre 1 e 10 no campo de entrada.
3. Clique no botão "Chutar" para verificar seu chute.
4. Continue chutando até adivinhar o número secreto.
5. Clique no botão "Novo jogo" para reiniciar o jogo.

## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript
- Biblioteca `responsiveVoice` para síntese de voz

## Autor
Este projeto foi desenvolvido como parte de um desafio de programação.
