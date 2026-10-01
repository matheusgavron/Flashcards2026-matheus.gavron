// --- CONTROLE DE TAMANHO DA FONTE ---
let tamanhoFonteAtual = 16;
const PASSO_FONTE = 2;
const FONTE_MINIMA = 12;
const FONTE_MAXIMA = 28;

const btnAumentaFonte = document.getElementById("btnAumentaTexto");
const btnDiminuiFonte = document.getElementById("btnDiminuiTexto");

if (btnAumentaFonte) btnAumentaFonte.addEventListener("click", aumentaFonte);
if (btnDiminuiFonte) btnDiminuiFonte.addEventListener("click", diminuiFonte);

function aumentaFonte() {
    if (tamanhoFonteAtual < FONTE_MAXIMA) {
        tamanhoFonteAtual += PASSO_FONTE;
        document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
    }
}

function diminuiFonte() {
    if (tamanhoFonteAtual > FONTE_MINIMA) {
        tamanhoFonteAtual -= PASSO_FONTE;
        document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
    }
}

// --- LEITURA DE TELA EM VOZ ALTA ---
let lendo = false;
const btnLeitura = document.getElementById("btnVoz");

if (btnLeitura) btnLeitura.addEventListener("click", alternarLeitura);

function alternarLeitura() {
    if (lendo) {
        pararLeitura();
        return;
    }

    const conteudo = document.querySelector("main");
    if (!conteudo) return;

    const texto = conteudo.innerText;
    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = "pt-BR";
    fala.onend = finalizarLeitura;
    fala.onerror = finalizarLeitura;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(fala);
    lendo = true;
    if (btnLeitura) btnLeitura.textContent = "🔊 Parar Leitura";
}

function finalizarLeitura() {
    lendo = false;
    if (btnLeitura) btnLeitura.textContent = "🔊 Ouvir Página";
}

function pararLeitura() {
    window.speechSynthesis.cancel();
    finalizarLeitura();
}

// --- CONTROLE DO MODAL DE AJUDA / GRUPO ---
const btnAjuda = document.querySelector(".botao-ajuda");
const btnFechar = document.querySelector(".botao-fechar");
const modal = document.querySelector(".modal-fundo");

if (btnAjuda && modal) btnAjuda.addEventListener("click", abreModal);
if (btnFechar && modal) btnFechar.addEventListener("click", fechaModal);

function abreModal() {
    modal.style.display = "block";
}

function fechaModal() {
    modal.style.display = "none";
}