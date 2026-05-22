const cleaningModal = document.getElementById("cleaningModal");
const finishModal = document.getElementById("finishModal");

const newCleaningBtn = document.querySelector(".new-cleaning-btn");
const closeModal = document.querySelector(".close-modal");
const closeFinishModal = document.querySelector(".close-finish-modal");

const cardsContainer = document.getElementById("cardsContainer");
const completedCardsContainer = document.getElementById("completedCardsContainer");
const canceledCardsContainer = document.getElementById("canceledCardsContainer");

const saveBtn = document.querySelector(".save-btn");
const finishSaveBtn = document.querySelector(".finish-save-btn");
const cancelCleaningBtn = document.querySelector(".cancel-cleaning-btn");

const predioSelect = document.getElementById("predioSelect");
const apartamentoSelect = document.getElementById("apartamentoSelect");
const faxineiraSelect = document.getElementById("faxineiraSelect");
const tipoFaxinaSelect = document.getElementById("tipoFaxinaSelect");
const qtdHospedesInput = document.getElementById("qtdHospedesInput");
const dataLimpeza = document.getElementById("dataLimpeza");
const horaLimpeza = document.getElementById("horaLimpeza");

const lavagemInput = document.getElementById("lavagemInput");
const secagemInput = document.getElementById("secagemInput");
const danoCheckbox = document.getElementById("danoCheckbox");
const faltamInsumos = document.getElementById("faltamInsumos");
const insumosBox = document.getElementById("insumosBox");
const observacoesInput = document.getElementById("observacoesInput");

const detailApartamento = document.getElementById("detailApartamento");
const detailInfos = document.getElementById("detailInfos");

const filterResponsavel = document.getElementById("filterResponsavel");
const filterPredio = document.getElementById("filterPredio");
const clearFiltersBtn = document.querySelector(".clear-filters-btn");
const quickFilters = document.querySelectorAll(".quick-filter");

const csvFileInput = document.getElementById("csvFileInput");
const importBtn = document.querySelector(".import-btn");
const airbnbFileInput = document.getElementById("airbnbFileInput");

const importAirbnbBtn = document.querySelector(".import-airbnb-btn");

const kpiPendentes = document.getElementById("kpiPendentes");

const kpiHoje = document.getElementById("kpiHoje");

const kpiVencidas = document.getElementById("kpiVencidas");

const kpiConcluidas = document.getElementById("kpiConcluidas");

let cardAtual = null;
let limpezas = [];
let contadorLimpezas = 1;
let periodoAtual = "today";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzgHwVU-ZEdKYrnpqPtOi9dtW_Vp8BZ1PKu6Ywj5AYlzRbLCu25VaZSLHpTB-8-sAhC/exec";

// =====================
// FILA DE RETRIES - GARANTIR DADOS NÃO SÃO PERDIDOS
// =====================

class FilaSheets {
  constructor() {
    this.filaLocal = [];
    this.tentandoProcessar = false;
    this.carregarFila();
    this.processarFilaPeriodicamente();
  }

  carregarFila() {
    const salva = localStorage.getItem("filaSheetsLocal");
    if (salva) {
      try {
        this.filaLocal = JSON.parse(salva);
        console.log(`[FilaSheets] Carregadas ${this.filaLocal.length} requisições pendentes`);
      } catch (e) {
        console.error("[FilaSheets] Erro ao carregar fila:", e);
        this.filaLocal = [];
      }
    }
  }

  salvarFila() {
    localStorage.setItem("filaSheetsLocal", JSON.stringify(this.filaLocal));
  }

  adicionar(acao, dados) {
    const item = {
      id: `${acao}-${Date.now()}-${Math.random()}`,
      acao,
      dados,
      criado: new Date().toISOString(),
      tentativas: 0
    };
    this.filaLocal.push(item);
    this.salvarFila();
    console.log(`[FilaSheets] Adicionado à fila (pendentes: ${this.filaLocal.length})`, item.id);
  }

  async processar() {
    if (this.tentandoProcessar || this.filaLocal.length === 0) {
      return;
    }

    this.tentandoProcessar = true;
    let processados = 0;
    let falhados = 0;

    for (let i = 0; i < this.filaLocal.length; i++) {
      const item = this.filaLocal[i];
      item.tentativas++;

      try {
        const resp = await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "cors",
          body: JSON.stringify({
            action: item.acao === "salvar" ? "salvar" : "atualizar",
            limpeza: item.dados
          })
        });

        if (!resp.ok) {
          throw new Error(`HTTP ${resp.status}`);
        }

        const data = await resp.json().catch(() => null);
        if (data && data.sucesso) {
          this.filaLocal.splice(i, 1);
          i--;
          processados++;
          console.log(`[FilaSheets] Sucesso (retry): ${item.id}`);
        } else {
          falhados++;
        }
      } catch (erro) {
        console.warn(`[FilaSheets] Falha na tentativa ${item.tentativas}: ${item.id}`, erro);
        if (item.tentativas >= 5) {
          console.error(`[FilaSheets] Máximo de tentativas atingido: ${item.id}`);
          this.filaLocal.splice(i, 1);
          i--;
        }
        falhados++;
      }
    }

    this.salvarFila();
    this.tentandoProcessar = false;

    if (processados > 0) {
      console.log(`[FilaSheets] Processadas ${processados} requisições da fila`);
    }
  }

  processarFilaPeriodicamente() {
    // Tenta processar a fila a cada 30 segundos
    setInterval(() => this.processar(), 30000);
  }
}

const filaSheetsLocal = new FilaSheets();


  const mapaImoveisAirbnb = {
  "Stúdio em Perdizes para 5 pessoas próx ao Allianz": {
    predio: "Bracon Perdizes",
    apartamento: "apto 86",
    faxineira: "Aniele"
  },
  "Stúdio em Perdizes próx do Allianz Park cama Queen": {
    predio: "Essential Perdizes",
    apartamento: "apto 401",
    faxineira: "Aniele"
  },
  "Studio Acessível PCD na Vila Mariana 100% Adaptado": {
    predio: "Haus Mitre",
    apartamento: "apto 709",
    faxineira: "Thais"
  },
  "Stúdio no Brooklin 2 camas próx Berrini Aeroporto": {
    predio: "Level",
    apartamento: "apto 1811",
    faxineira: "Aniele"
  },
  "Stúdio no Brooklin 2 camas próx Aeroporto Berrini": {
    predio: "Level",
    apartamento: "apto 1316",
    faxineira: "Thais"
  },
  "Stúdio Brooklin 4 pessoas próximo Berrini Morumbi": {
    predio: "Level",
    apartamento: "apto 1516",
    faxineira: "Thais"
  },
  "Stúdio moderno Campo Belo próx. Aeroporto e Metrô": {
    predio: "Movi Campo Belo",
    apartamento: "apto 2208",
    faxineira: "Aniele"
  },
  "Studio 2 camas Campo Belo próx Metrô e Aeroporto": {
    predio: "Movi Campo Belo",
    apartamento: "apto 1702",
    faxineira: "Aniele"
  },
  "Studio Moderno Campo Belo próx Aeroporto e Metrô": {
    predio: "Movi Campo Belo",
    apartamento: "apto 505",
    faxineira: "Aniele"
  },
  "Studio moderno Campo Belo próx Metrô e Aeroporto": {
    predio: "Movi Campo Belo",
    apartamento: "apto 2008",
    faxineira: "Aniele"
  },
  "Studio para 3 pessoas no Campo Belo c/ Cama Queen": {
    predio: "Movi Campo Belo",
    apartamento: "apto 604",
    faxineira: "Aniele"
  },
  "Studio Novo no Campo Belo próx Aeroporto e Berrini": {
    predio: "Movi Campo Belo",
    apartamento: "apto 1302",
    faxineira: "Aniele"
  },
  "Studio Novo no Campo Belo próx Aeroporto Berrini": {
    predio: "Movi Campo Belo",
    apartamento: "apto 2108",
    faxineira: "Thais"
  },
  "Studio Novo no Campo Belo próx Aeroporto e Berrini": {
    predio: "Movi Campo Belo",
    apartamento: "apto 1502",
    faxineira: "Thais"
  },
  "Apto 2Q em Moema, a 10min de Congonhas!": {
    predio: "Nex One Moema",
    apartamento: "apto 915",
    faxineira: "Aniele"
  },
  "Stúdio lindo para 4 pessoas a 500m do Allianz Park": {
    predio: "Smart Bourbon",
    apartamento: "apto 1010",
    faxineira: "Aniele"
  },
  "Stúdio moderno em Perdizes perto do Allianz Park": {
    predio: "Smart Bourbon",
    apartamento: "apto 1405",
    faxineira: "Aniele"
  },
  "Stúdio moderno para 4 pessoas próx. Allianz Park": {
    predio: "Smart Bourbon",
    apartamento: "apto 404",
    faxineira: "Aniele"
  },
  "Stúdio para 4 pessoas próx ao Allianz e São Camilo": {
    predio: "Viva Benx",
    apartamento: "apto 502",
    faxineira: "Aniele"
  }
};



const mapaImoveisBooking = {

  "Apartamento em Vila Mariana": {
    predio: "Haus Mitre",
    apartamento: "apto 709",
    faxineira: "Thais"
  },

  "Apartment in São Paulo": {
    predio: "Movi Campo Belo",
    apartamento: "apto 2208",
    faxineira: "Aniele"
  },

  "Apartamento em São Paulo": {
    predio: "Movi Campo Belo",
    apartamento: "apto 1702",
    faxineira: "Aniele"
  },

  "Apartamento em Campo Belo": {
    predio: "Movi Campo Belo",
    apartamento: "apto 505",
    faxineira: "Aniele"
  },

  "Apartamento em Brooklin Novo": {
    predio: "Level",
    apartamento: "apto 1811",
    faxineira: "Aniele"
  },

  "Apartamento em Vila Romana": {
    predio: "Smart Bourbon",
    apartamento: "apto 1010",
    faxineira: "Aniele"
  },

  "Apartamento em Perdizes": {
    predio: "Essential Perdizes",
    apartamento: "apto 401",
    faxineira: "Aniele"
  },

  "Apartamento em Indianópolis": {
    predio: "Nex One Moema",
    apartamento: "apto 915",
    faxineira: "Aniele"
  }
};

const apartamentosPorPredio = {
  "Nex One Moema": ["apto 915"],
  "Essential Perdizes": ["apto 401"],
  "Smart Bourbon": ["apto 1010", "apto 1405", "apto 404"],
  "Movi Campo Belo": [
    "apto 2208",
    "apto 1702",
    "apto 505",
    "apto 2008",
    "apto 604",
    "apto 1302",
    "apto 2108",
    "apto 1502"
  ],
  "Level": ["apto 1811", "apto 1316", "apto 1516"],
  "Viva Benx": ["apto 502"],
  "Bracon Perdizes": ["apto 86"],
  "Haus Mitre": ["apto 709"]
};

function dataLocalISO(data) {
  const ano = data.getFullYear();
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const dia = String(data.getDate()).padStart(2, "0");

  return `${ano}-${mes}-${dia}`;
}

function hojeISO() {
  return dataLocalISO(new Date());
}

function amanhaISO() {
  const data = new Date();
  data.setDate(data.getDate() + 1);
  return dataLocalISO(data);
}

function normalizarDataSistema(data, origem) {
  if (!data) return "";

  const texto = String(data).trim();

  if (texto.includes("T")) {
    return texto.split("T")[0];
  }

  if (texto.includes("-")) {
    const partes = texto.split("-");

    if (partes[0].length === 4) {
      return texto.split(" ")[0];
    }
  }

  if (texto.includes("/")) {
    const partes = texto.split("/");
    const mes = partes[0].padStart(2, "0");
    const dia = partes[1].padStart(2, "0");
    const ano = partes[2]?.trim().split(" ")[0];

    if (!ano) return texto;

    return `${ano}-${mes}-${dia}`;
  }

  return texto;
}

function formatarData(data) {
  if (!data) return "";

  const dataISO = normalizarDataSistema(data);
  const partes = dataISO.split("-");

  if (partes.length !== 3) return data;

  const ano = partes[0].slice(2);
  const mes = partes[1];
  const dia = partes[2];

  return `${dia}/${mes}/${ano}`;
}

function preencherDataPadrao() {
  dataLimpeza.value = hojeISO();
  horaLimpeza.value = "12:00";
}

function estaNaSemana(dataISO) {
  const hoje = new Date();
  const dataNormalizada = normalizarDataSistema(dataISO);
  const data = new Date(`${dataNormalizada}T00:00:00`);

  const inicioSemana = new Date(hoje);
  inicioSemana.setDate(hoje.getDate() - hoje.getDay());
  inicioSemana.setHours(0, 0, 0, 0);

  const fimSemana = new Date(inicioSemana);
  fimSemana.setDate(inicioSemana.getDate() + 6);
  fimSemana.setHours(23, 59, 59, 999);

  return data >= inicioSemana && data <= fimSemana;
}

function estaNoMes(dataISO) {
  const hoje = new Date();
  const dataNormalizada = normalizarDataSistema(dataISO);
  const data = new Date(`${dataNormalizada}T00:00:00`);

  return (
    data.getMonth() === hoje.getMonth() &&
    data.getFullYear() === hoje.getFullYear()
  );
}

function mesmaData(dataA, dataB) {
  const dataNormalizadaA = normalizarDataSistema(dataA);
  const dataNormalizadaB = normalizarDataSistema(dataB);

  return dataNormalizadaA && dataNormalizadaA === dataNormalizadaB;
}

function dataAnteriorAHoje(data) {
  const dataNormalizada = normalizarDataSistema(data);

  return dataNormalizada && dataNormalizada < hojeISO();
}

function normalizarHoraOrdenacao(hora) {
  if (!hora) return "00:00";

  const texto = String(hora).trim().toLowerCase();
  const partes = texto.match(/^(\d{1,2})(?::(\d{1,2}))?h?$/);

  if (!partes) return "00:00";

  const horas = partes[1].padStart(2, "0");
  const minutos = (partes[2] || "00").padStart(2, "0");

  return `${horas}:${minutos}`;
}

function compararLimpezasPorDataHora(a, b) {
  const dataA = normalizarDataSistema(a.data, a.origem);
  const dataB = normalizarDataSistema(b.data, b.origem);

  if (dataA !== dataB) {
    return dataA.localeCompare(dataB);
  }

  return normalizarHoraOrdenacao(a.hora).localeCompare(
    normalizarHoraOrdenacao(b.hora)
  );
}

function salvarLocalStorage() {
  localStorage.setItem("limpezas", JSON.stringify(limpezas));
}

function carregarLocalStorage() {
  const salvas = localStorage.getItem("limpezas");

  if (salvas) {
    limpezas = JSON.parse(salvas).map((item) => ({
      ...item,
      data: normalizarDataSistema(item.data, item.origem),
      hora: normalizarHora(item.hora)
    }));
    contadorLimpezas = limpezas.length + 1;
  }
}

function limparFormulario() {
  predioSelect.value = "";
  apartamentoSelect.innerHTML = '<option value="">Selecione o Apartamento</option>';
  faxineiraSelect.value = "";
  tipoFaxinaSelect.value = "";
  qtdHospedesInput.value = "";
  preencherDataPadrao();
}

 function definirClassePrazo(dataLimpezaCard) {
  if (dataAnteriorAHoje(dataLimpezaCard)) {
    return "status-vencido";
  }

  if (mesmaData(dataLimpezaCard, hojeISO())) {
    return "status-hoje";
  }

  return "status-futuro";
}

function definirTextoPrazo(dataLimpezaCard) {
  if (dataAnteriorAHoje(dataLimpezaCard)) {
    return "Vencido";
  }

  if (mesmaData(dataLimpezaCard, hojeISO())) {
    return "Hoje";
  }

  return "Futuro";
}

function definirClasseOrigem(origem) {
  if (origem === "booking") {
    return "badge-booking";
  }

  if (origem === "airbnb") {
    return "badge-airbnb";
  }

  return "badge-manual";
}

function definirTextoOrigem(origem) {
  if (origem === "booking") {
    return "BOOKING";
  }

  if (origem === "airbnb") {
    return "AIRBNB";
  }

  return "MANUAL";
}

function criarCard(limpeza) {
  const card = document.createElement("div");

  card.classList.add("card");

  card.dataset.id = limpeza.id;
  card.dataset.responsavel = limpeza.faxineira;
  card.dataset.predio = limpeza.predio;
  card.dataset.data = limpeza.data;
  card.dataset.fullData = JSON.stringify(limpeza);

  card.innerHTML = `
<div class="card-top">
  <div class="card-date">
    📅 ${formatarData(limpeza.data)}
  </div>

  <div class="origin-badge ${definirClasseOrigem(limpeza.origem)}">
    ${definirTextoOrigem(limpeza.origem)}
  </div>
</div>

    <div class="card-header">
      <div class="card-title">
        ${limpeza.predio}
      </div>

      <div class="card-apto">
        ${limpeza.apartamento}
      </div>
    </div>

    <div class="card-body">
      <div class="card-info">
        <div class="card-time">
          ${limpeza.hora}
        </div>

        <div class="card-person">
          ${limpeza.faxineira}
        </div>
      </div>

     <div class="card-status ${limpeza.status === "cancelado" ? "status-cancelado" : definirClassePrazo(limpeza.data)}">
  ${limpeza.status === "cancelado" ? "Cancelado" : definirTextoPrazo(limpeza.data)}
</div>
    </div>
  `;

  return card;
}

function renderizarCards() {
  cardsContainer.innerHTML = "";
  completedCardsContainer.innerHTML = "";
  canceledCardsContainer.innerHTML = "";

  limpezas.sort(compararLimpezasPorDataHora);

  limpezas.forEach((limpeza) => {
    const card = criarCard(limpeza);

if (limpeza.status === "concluido") {
  completedCardsContainer.appendChild(card);
} else if (limpeza.status === "cancelado") {
  canceledCardsContainer.appendChild(card);
} else {
  cardsContainer.appendChild(card);
}
  });

  atualizarKPIs();
  salvarLocalStorage();
  aplicarFiltros();
}

function atualizarKPIs() {

  const hoje = hojeISO();

  let cardsFiltrados = [...limpezas];

  const responsavel = filterResponsavel.value;
  const predio = filterPredio.value;

  if (responsavel) {
    cardsFiltrados = cardsFiltrados.filter((limpeza) => {
      return limpeza.faxineira === responsavel;
    });
  }

  if (predio) {
    cardsFiltrados = cardsFiltrados.filter((limpeza) => {
      return limpeza.predio === predio;
    });
  }

  if (periodoAtual === "today") {
    cardsFiltrados = cardsFiltrados.filter((limpeza) => {
      return mesmaData(limpeza.data, hoje);
    });
  }

  if (periodoAtual === "tomorrow") {
    const amanha = amanhaISO();
    cardsFiltrados = cardsFiltrados.filter((limpeza) => {
      return mesmaData(limpeza.data, amanha);
    });
  }

  if (periodoAtual === "week") {
    cardsFiltrados = cardsFiltrados.filter((limpeza) => {
      return estaNaSemana(limpeza.data);
    });
  }

  if (periodoAtual === "month") {
    cardsFiltrados = cardsFiltrados.filter((limpeza) => {
      return estaNoMes(limpeza.data);
    });
  }

const pendentes = cardsFiltrados.filter((limpeza) => {
  return (
    limpeza.status !== "concluido" &&
    limpeza.status !== "cancelado"
  );
});

  const hojeCards = cardsFiltrados.filter((limpeza) => {
    return mesmaData(limpeza.data, hoje);
  });

const vencidas = cardsFiltrados.filter((limpeza) => {
  return (
    limpeza.status !== "concluido" &&
    limpeza.status !== "cancelado" &&
    dataAnteriorAHoje(limpeza.data)
  );
  });

  const concluidas = cardsFiltrados.filter((limpeza) => {
    return limpeza.status === "concluido";
  });

  kpiPendentes.textContent = pendentes.length;
  kpiHoje.textContent = hojeCards.length;
  kpiVencidas.textContent = vencidas.length;
  kpiConcluidas.textContent = concluidas.length;
}

function aplicarFiltros() {
  const cards = document.querySelectorAll("#cardsContainer .card");

  const hoje = hojeISO();
  const responsavel = filterResponsavel.value;
  const predio = filterPredio.value;

  cards.forEach((card) => {
    const cardResponsavel = card.dataset.responsavel;
    const cardData = card.dataset.data;
    const cardPredio = card.dataset.predio;

    let mostrar = true;

    if (responsavel && responsavel !== cardResponsavel) {
      mostrar = false;
    }

    if (predio && predio !== cardPredio) {
      mostrar = false;
    }

    if (periodoAtual === "today" && !mesmaData(cardData, hoje)) {
      mostrar = false;
    }

    if (periodoAtual === "tomorrow" && !mesmaData(cardData, amanhaISO())) {
      mostrar = false;
    }

    if (periodoAtual === "week" && !estaNaSemana(cardData)) {
      mostrar = false;
    }

    if (periodoAtual === "month" && !estaNoMes(cardData)) {
      mostrar = false;
    }

    card.style.display = mostrar ? "block" : "none";
  });
  atualizarKPIs();
}

/* MENU */

const operacaoMenu =
  document.getElementById("operacaoMenu");

const operacaoTitle =
  operacaoMenu.querySelector(".menu-group-title");

operacaoTitle.addEventListener("click", () => {

  operacaoMenu.classList.toggle("closed");

  operacaoMenu.classList.toggle("open");

});

document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".menu-item").forEach((menu) => {
      menu.classList.remove("active");
    });

    document.querySelectorAll(".page").forEach((page) => {
      page.classList.remove("active-page");
    });

    item.classList.add("active");

    const pageId = item.dataset.page;
    document.getElementById(pageId).classList.add("active-page");
  });
});

/* MODAIS */

newCleaningBtn.addEventListener("click", () => {
  preencherDataPadrao();
  cleaningModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  cleaningModal.style.display = "none";
});

closeFinishModal.addEventListener("click", () => {
  finishModal.style.display = "none";
});

/* APARTAMENTOS POR PRÉDIO */

predioSelect.addEventListener("change", () => {
  const predioSelecionado = predioSelect.value;

  apartamentoSelect.innerHTML = '<option value="">Selecione o Apartamento</option>';

  if (!apartamentosPorPredio[predioSelecionado]) return;

  apartamentosPorPredio[predioSelecionado].forEach((apartamento) => {
    const option = document.createElement("option");
    option.value = apartamento;
    option.textContent = apartamento;
    apartamentoSelect.appendChild(option);
  });
});

/* INSUMOS */

faltamInsumos.addEventListener("change", () => {
  insumosBox.style.display = faltamInsumos.checked ? "block" : "none";
});

/* CRIAR LIMPEZA MANUAL */

saveBtn.addEventListener("click", async () => {
  const predio = predioSelect.value;
  const apartamento = apartamentoSelect.value;
  const faxineira = faxineiraSelect.value;
  const tipoFaxina = tipoFaxinaSelect.value;
  const qtdHospedes = qtdHospedesInput.value;
  const data = normalizarDataSistema(dataLimpeza.value, "manual");
  const hora = horaLimpeza.value;

  if (!predio || !apartamento || !faxineira || !tipoFaxina || !qtdHospedes || !data || !hora) {
    alert("Preencha todos os campos.");
    return;
  }

  const novaLimpeza = {
    id: `CLN-${Date.now()}-${contadorLimpezas}`,
    origem: "manual",
    status: "pendente",
    predio,
    apartamento,
    faxineira,
    tipoFaxina,
    qtdHospedes,
    data,
    hora,
    criadoEm: new Date().toISOString()
  };

  contadorLimpezas++;
  limpezas.push(novaLimpeza);

  await salvarLimpezaSheets(novaLimpeza);

  renderizarCards();

  cleaningModal.style.display = "none";
  limparFormulario();
});

/* ABRIR MODAL DE CONCLUSÃO */

cardsContainer.addEventListener("click", (event) => {
  const card = event.target.closest(".card");

  if (!card) return;

  cardAtual = card;

  const dados = JSON.parse(card.dataset.fullData);

  detailApartamento.innerHTML = `${dados.predio} - ${dados.apartamento}`;

  detailInfos.innerHTML = `
    ${formatarData(dados.data)} •
    ${dados.hora} •
    ${dados.faxineira} •
    ${dados.tipoFaxina} •
    ${dados.qtdHospedes} hóspedes
  `;

  lavagemInput.value = 0;
  secagemInput.value = 0;
  danoCheckbox.checked = false;
  faltamInsumos.checked = false;
  observacoesInput.value = "";
  insumosBox.style.display = "none";

  document.querySelectorAll("#insumosBox input[type='checkbox']").forEach((input) => {
    input.checked = false;
  });

  finishModal.style.display = "flex";
});

/* CONCLUIR LIMPEZA */

finishSaveBtn.addEventListener("click", () => {
  if (!cardAtual) return;

  const cardId = cardAtual.dataset.id;

  const limpeza = limpezas.find((item) => item.id === cardId);

  if (!limpeza) return;

  limpeza.status = "concluido";
  limpeza.lavagem = lavagemInput.value;
  limpeza.secagem = secagemInput.value;
  limpeza.teveDano = danoCheckbox.checked;
  limpeza.faltouInsumo = faltamInsumos.checked;
  limpeza.observacoes = observacoesInput.value || "";
  limpeza.insumos = Array.from(
    document.querySelectorAll("#insumosBox input[type='checkbox']:checked")
  ).map((item) => item.value);
  limpeza.concluidoEm = new Date().toISOString();

  finishModal.style.display = "none";
  cardAtual = null;

  atualizarLimpezaSheets(limpeza);
  renderizarCards();
});

async function salvarLimpezaSheets(limpeza) {
  try {
    const resp = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        action: "salvar",
        limpeza: limpeza
      })
    });

    if (!resp.ok) {
      const txt = await resp.text().catch(() => "<no-body>");
      throw new Error(`Sheets request failed: ${resp.status} ${resp.statusText} - ${txt}`);
    }

    // tentar ler json de resposta (se existir) para verificar sucesso
    try {
      const data = await resp.json();
      if (data && data.sucesso === false) {
        console.error("Sheets retornou sucesso=false:", data);
        throw new Error(data.erro || "Falha desconhecida");
      }
      return data;
    } catch (e) {
      // resposta não é JSON, mas o POST foi concluído
      return null;
    }
  } catch (erro) {
    console.error("Erro ao salvar no Sheets (adicionando à fila):", erro);
    filaSheetsLocal.adicionar("salvar", limpeza);
    return { erro: String(erro), filaLocal: true };
  }
}

async function atualizarLimpezaSheets(limpeza) {
  try {
    const resp = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        action: "atualizar",
        limpeza: limpeza
      })
    });

    if (!resp.ok) {
      const txt = await resp.text().catch(() => "<no-body>");
      throw new Error(`Sheets update failed: ${resp.status} ${resp.statusText} - ${txt}`);
    }

    try {
      const data = await resp.json();
      if (data && data.sucesso === false) {
        console.error("Sheets update retornou sucesso=false:", data);
        throw new Error(data.erro || "Falha desconhecida");
      }
      return data;
    } catch (e) {
      return null;
    }
  } catch (erro) {
    console.error("Erro ao atualizar no Sheets (adicionando à fila):", erro);
    filaSheetsLocal.adicionar("atualizar", limpeza);
    return { erro: String(erro), filaLocal: true };
  }
}

/* CANCELAR LIMPEZA */

cancelCleaningBtn.addEventListener("click", () => {
  if (!cardAtual) return;

  const cardId = cardAtual.dataset.id;

  const limpeza = limpezas.find((item) => item.id === cardId);

  if (!limpeza) return;

  const confirmar = confirm(
    "Tem certeza que deseja cancelar esta limpeza?"
  );

  if (!confirmar) return;

  limpeza.status = "cancelado";
  limpeza.canceladoEm = new Date().toISOString();

  finishModal.style.display = "none";
  cardAtual = null;

  atualizarLimpezaSheets(limpeza);
  renderizarCards();
});

/* FILTROS */

filterResponsavel.addEventListener("change", aplicarFiltros);
filterPredio.addEventListener("change", aplicarFiltros);

clearFiltersBtn.addEventListener("click", () => {
  filterResponsavel.value = "";
  filterPredio.value = "";
  periodoAtual = "all";

  quickFilters.forEach((btn) => {
    btn.classList.remove("active-quick");
  });

  aplicarFiltros();
});

/* FILTROS RÁPIDOS */

function aplicarFiltroRapido(periodo) {
  periodoAtual = periodo;

  aplicarFiltros();
}

quickFilters.forEach((btn) => {
  btn.addEventListener("click", () => {
    quickFilters.forEach((item) => {
      item.classList.remove("active-quick");
    });

    btn.classList.add("active-quick");

    aplicarFiltroRapido(btn.dataset.period);
  });
});

/* IMPORTAR CSV */

importBtn.addEventListener("click", () => {
  const arquivo = csvFileInput.files[0];

  if (!arquivo) {
    alert("Selecione um CSV.");
    return;
  }

  const reader = new FileReader();

  reader.onload = function (event) {
    const csv = event.target.result;
    processarCSV(csv);
  };

  reader.readAsText(arquivo, "UTF-8");
});

async function processarCSV(csv) {
  const linhas = csv
    .split("\n")
    .map((linha) => linha.trim())
    .filter((linha) => linha.length > 0);

  const cabecalho = linhas[0]
    .split(",")
    .map((coluna) => coluna.trim());

  const reservas = [];

  for (let i = 1; i < linhas.length; i++) {
    const valores = linhas[i].split(",");

    const reserva = {};

    cabecalho.forEach((coluna, index) => {
      reserva[coluna] = valores[index]?.trim();
    });

    reservas.push(reserva);
  }

  console.log("CSV headers:", cabecalho);
  const reservasValidas = reservas.filter((reserva) => {
    return reserva["Type/Transaction type"] === "Reservation";
  });
  console.log("Reservas válidas (booking):", reservasValidas.length);

  const hoje = hojeISO();

  let criadas = 0;
  let ignoradasHistorico = 0;
  let ignoradasDuplicadas = 0;

  let salvoFalhas = 0;
  const detalhesFalhas = [];
  for (let index = 0; index < reservasValidas.length; index++) {
    const reserva = reservasValidas[index];
    const checkout = normalizarDataSistema(reserva["Check-out date"], "booking");
    const referencia = reserva["Reference number"];
    const nomeImovel = reserva["Property name"];
    const dadosImovel = mapaImoveisBooking[nomeImovel];

    if (!checkout || checkout < hoje) {
      ignoradasHistorico++;
      continue;
    }

    const jaExiste = limpezas.some((limpeza) => {
      return limpeza.referenciaReserva === referencia;
    });

    if (jaExiste) {
      ignoradasDuplicadas++;
      continue;
    }

    const novaLimpeza = {
          id: `AUTO-${Date.now()}-${index}`,
          origem: "booking",
          referenciaReserva: referencia,
          nomeImovelBooking: nomeImovel,
          status: "pendente",

predio:dadosImovel?.predio || "A DEFINIR",
apartamento:dadosImovel?.apartamento || "A DEFINIR",
faxineira: dadosImovel?.faxineira || "Aniele",

      tipoFaxina: "Troca de hóspede",
      qtdHospedes: 2,

      data: checkout,
      hora: "12:00",

      criadoEm: new Date().toISOString()
    };

      limpezas.push(novaLimpeza);
      const result = await salvarLimpezaSheets(novaLimpeza).catch((e) => {
        console.error("Falha ao salvar limpeza automática (booking):", e);
        return { erro: String(e) };
      });

      if (result && result.erro) {
        salvoFalhas++;
        detalhesFalhas.push(`Booking ${novaLimpeza.referenciaReserva || novaLimpeza.id}: ${result.erro}`);
      }

        criadas++;
      }

  renderizarCards();

  alert(
    `Importação concluída!\n\n` +
    `Criadas: ${criadas}\n` +
    `Ignoradas por histórico: ${ignoradasHistorico}\n` +
    `Ignoradas por duplicidade: ${ignoradasDuplicadas}\n` +
    `Falhas ao salvar no Sheets: ${salvoFalhas}\n` +
    `${salvoFalhas ? 'Ver console para detalhes.' : ''}`
  );

  if (detalhesFalhas.length) {
    console.error("Detalhes das falhas (booking):", detalhesFalhas);
  }
}

/* IMPORTAR AIRBNB */

importAirbnbBtn.addEventListener("click", () => {

  const arquivo =
    airbnbFileInput.files[0];

  if (!arquivo) {

    alert("Selecione um CSV Airbnb.");

    return;
  }

  const reader = new FileReader();

  reader.onload = function(event) {

    const csv =
      event.target.result;

    processarAirbnbCSV(csv);
  };

  reader.readAsText(
    arquivo,
    "UTF-8"
  );
});

async function processarAirbnbCSV(csv) {

  const linhas = csv
    .split("\n")
    .map((linha) => linha.trim())
    .filter((linha) => linha.length > 0);

  const cabecalho = linhas[0]
    .split(",")
    .map((coluna) => coluna.trim());

  const reservas = [];

  for (let i = 1; i < linhas.length; i++) {

    const valores = linhas[i].split(",");

    const reserva = {};

    cabecalho.forEach((coluna, index) => {
      reserva[coluna] =
        valores[index]?.trim();
    });

    reservas.push(reserva);
  }

  console.log("CSV headers (Airbnb):", cabecalho);
  const reservasValidas = reservas.filter((reserva) => {
    return reserva["Tipo"] === "Reserva";
  });
  console.log("Reservas válidas (airbnb):", reservasValidas.length);

  const hoje = hojeISO();

  let criadas = 0;
  let ignoradasHistorico = 0;
  let ignoradasDuplicadas = 0;

  let salvoFalhas = 0;
  const detalhesFalhas = [];
  for (let index = 0; index < reservasValidas.length; index++) {
    const reserva = reservasValidas[index];

    const checkout = normalizarDataSistema(
      reserva["Data de término"],
      "airbnb"
    );

    const referencia =
      reserva["Código de Confirmação"];

    const anuncio =
      reserva["Anúncio"];

    const dadosImovel =
      mapaImoveisAirbnb[anuncio];  

    if (!checkout || checkout < hoje) {
      ignoradasHistorico++;
      continue;
    }

    const jaExiste =
      limpezas.some((limpeza) => {

        return (
          limpeza.referenciaReserva ===
          referencia
        );
      });

    if (jaExiste) {
      ignoradasDuplicadas++;
      continue;
    }

    const novaLimpeza = {

      id: `AIRBNB-${Date.now()}-${index}`,

      origem: "airbnb",

      referenciaReserva: referencia,

      status: "pendente",

      predio: dadosImovel?.predio || "A DEFINIR",

      apartamento: dadosImovel?.apartamento || "A DEFINIR",

      faxineira: dadosImovel?.faxineira || "Aniele",

      tipoFaxina: "Troca de hóspede",

      qtdHospedes: 2,

      hospede:
        reserva["Hóspede"],

      anuncio: anuncio,

      data: checkout,

      hora: "12:00",

      criadoEm:
        new Date().toISOString()
    };

      limpezas.push(novaLimpeza);


      const result = await salvarLimpezaSheets(novaLimpeza).catch((e) => {
        console.error("Falha ao salvar limpeza automática (airbnb):", e);
        return { erro: String(e) };
      });

      if (result && result.erro) {
        salvoFalhas++;
        detalhesFalhas.push(`Airbnb ${novaLimpeza.referenciaReserva || novaLimpeza.id}: ${result.erro}`);
      }

      criadas++;

  }

  renderizarCards();

  alert(
    `Importação Airbnb concluída!\n\n` +
    `Criadas: ${criadas}\n` +
    `Histórico ignorado: ${ignoradasHistorico}\n` +
    `Duplicadas ignoradas: ${ignoradasDuplicadas}\n` +
    `Falhas ao salvar no Sheets: ${salvoFalhas}\n` +
    `${salvoFalhas ? 'Ver console para detalhes.' : ''}`
  );

  if (detalhesFalhas.length) {
    console.error("Detalhes das falhas (airbnb):", detalhesFalhas);
  }
}

function normalizarHora(hora) {
  if (!hora) return "12:00";

  const texto = String(hora).trim();

  const match = texto.match(/^(\d{1,2}):(\d{2})$/);
  if (match) {
    return `${match[1].padStart(2, "0")}:${match[2]}`;
  }

  const horaNum = parseInt(texto);
  if (!Number.isNaN(horaNum) && horaNum >= 0 && horaNum < 24) {
    return `${String(horaNum).padStart(2, "0")}:00`;
  }

  return "12:00";
}


/* INICIAR SISTEMA */

window.addEventListener("load", () => {
  carregarLocalStorage();
  carregarLimpezasSheets();

  periodoAtual = "today";

  renderizarCards();
});

async function carregarLimpezasSheets() {

  try {

    const resposta = await fetch(
      `${GOOGLE_SCRIPT_URL}?action=listar`
    );

    const dados = await resposta.json();

    if (!dados.sucesso) return;

    limpezas = dados.limpezas.map((item) => ({

      ...item,

      data:
        normalizarDataSistema(item.data, item.origem),

      qtdHospedes:
        Number(item.qtdHospedes) || 0,

      lavagem:
        Number(item.lavagem) || 0,

      secagem:
        Number(item.secagem) || 0,

      hora: normalizarHora(item.hora),

      insumos:
        item.insumos
          ? String(item.insumos)
              .split(",")
              .map(i => i.trim())
          : []

    }));

    salvarLocalStorage();

    renderizarCards();

  } catch (erro) {

    console.error(
      "Erro ao carregar Sheets:",
      erro
    );

  }

}
