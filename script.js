// Define o tamanho de fonte inicial padrão (em pixels)
let tamanhoFonteAtual = 16;

/**
* Altera o tamanho da fonte do conteúdo principal.
* @param {number} direcao - Use 1 para aumentar e -1 para diminuir.
*/
function alterarFonte(direcao) {
// Limita o tamanho entre 12px e 24px para manter o layout legível e bonito
if ((direcao === 1 && tamanhoFonteAtual < 24) || (direcao === -1 && tamanhoFonteAtual > 12)) {
tamanhoFonteAtual += direcao * 2;
document.getElementById('conteudo-principal').style.fontSize = tamanhoFonteAtual + 'px';
}
}

/**
* Restaura o tamanho da fonte para o padrão original (16px).
*/
function resetarFonte() {
tamanhoFonteAtual = 16;
document.getElementById('conteudo-principal').style.fontSize = tamanhoFonteAtual + 'px';
}