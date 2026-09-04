========================= CONTROLE DO TAMANHO DA FONTE
========================= */

const aumentarFonte =
 document.getElementById("aumentarFonte");
const diminuirFonte =
 document.getElementById("diminuirFonte");

let tamanhoFonte = 16;

aumentarFonte.addEventListener("click", () => {

 if (tamanhoFonte < 24) {

 tamanhoFonte += 2;

 document.documentElement.style.fontSize =
 tamanhoFonte + "px";
 }

});


diminuirFonte.addEventListener("click", () => {

 if (tamanhoFonte > 12) {

 tamanhoFonte -= 2;

 document.documentElement.style.fontSize =
 tamanhoFonte + "px";
 }

});


/* =========================
 ALTO CONTRASTE
========================= */

const contraste =
 document.getElementById("contraste");

contraste.addEventListener("click", () => {

 document.body.classList.toggle(
 "alto-contraste"
 );

});


/* =========================
 MODO ESCURO
========================= */

const modoEscuro =
 document.getElementById("modoEscuro");

modoEscuro.addEventListener("click", () => {

 document.body.classList.toggle(
 "modo-escuro"
 );

});


/* =========================
 LEITURA EM VOZ ALTA
========================= */

const lerPagina =
 document.getElementById("lerPagina");

const pararLeitura =
 document.getElementById("pararLeitura");


lerPagina.addEventListener("click", () => {

 // Verifica se o navegador suporta
 // a função de leitura.

 if (!("speechSynthesis" in window)) {

 alert(
 "Seu navegador não oferece suporte à leitura em voz alta."
 );

 return;
 }


 // Interrompe qualquer leitura anterior.

 speechSynthesis.cancel();


 // Seleciona o conteúdo principal.

 const conteudo =
 document.getElementById("conteudo");


 // Cria o texto que será lido.

 const texto =
 conteudo.innerText;


 // Cria a fala.

 const fala =
 new SpeechSynthesisUtterance(texto);


 // Define o idioma.

 fala.lang = "pt-BR";


 // Velocidade da leitura.

 fala.rate = 0.9;


 // Tom da voz.

 fala.pitch = 1;


 // Volume.

 fala.volume = 1;


 // Inicia a leitura.

 speechSynthesis.speak(fala);

});


/* =========================
 PARAR LEITURA
========================= */

pararLeitura.addEventListener("click", () => {

 if ("speechSynthesis" in window) {

 speechSynthesis.cancel();

 }

});


/* =========================
 TECLA ESC PARA PARAR
 A LEITURA
========================= */

document.addEventListener("keydown", (event) => {

 if (event.key === "Escape") {

 if ("speechSynthesis" in window) {

 speechSynthesis.cancel();

 }

 }

});