function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Digite novamente!');
        return;
      }
      
      if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
      } 
    
      let numerosSorteados = [];
    let numero;
    for (let i = 0; i < quantidade; i++) {
        numero = aleatorio(de, ate);
        // Criar uma validaçao para excluir numeros repetidos
        if (numerosSorteados.includes(numero)) {
            i--;
            continue;
        }
        numerosSorteados.push(numero);
    }
    let resultado = document.getElementById('resultado');
    // Criar um espaço entre os numeros para apresentar no HTML
    numerosSorteados = numerosSorteados.join(', ');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`;
    alterarStatusBotoes();
}
// funcao para obter um numero aleatorio entre de e ate

function aleatorio(de, ate) {
    return Math.floor(Math.random() * (ate - de + 1)) + de;
}

// funcao para alterar o status dos botoes
function alterarStatusBotoes() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('quantidade').focus();
    alterarStatusBotoes();
}