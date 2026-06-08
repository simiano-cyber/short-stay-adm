const cleaningModal = document.getElementById("cleaningModal");
const finishModal = document.getElementById("finishModal");

const newCleaningBtn = document.querySelector(".new-cleaning-btn");
const closeModal = document.querySelector(".close-modal");
const closeFinishModal = document.querySelector(".close-finish-modal");

const cardsContainer = document.getElementById("cardsContainer");
const completedCardsContainer = document.getElementById("completedCardsContainer");
const canceledCardsContainer = document.getElementById("canceledCardsContainer");
const apartamentosGrid = document.getElementById("apartamentosGrid");
const totalPredios = document.getElementById("totalPredios");
const totalApartamentos = document.getElementById("totalApartamentos");
const totalApartamentosAtivos = document.getElementById("totalApartamentosAtivos");
const financeiroList = document.getElementById("financeiroList");
const reservasList = document.getElementById("reservasList");
const reservasBuscaCodigo = document.getElementById("reservasBuscaCodigo");
const reservasFiltroOrigem = document.getElementById("reservasFiltroOrigem");
const reservasFiltroPredio = document.getElementById("reservasFiltroPredio");
const reservasFiltroMesEntrada = document.getElementById("reservasFiltroMesEntrada");
const reservaDetalheModal = document.getElementById("reservaDetalheModal");
const reservaDetalheConteudo = document.getElementById("reservaDetalheConteudo");
const closeReservaModal = document.querySelector(".close-reserva-modal");
const proprietariosGrid = document.getElementById("proprietariosGrid");
const proprietarioFiltroSelect = document.getElementById("proprietarioFiltroSelect");
const financeiroFiltroMes = document.getElementById("financeiroFiltroMes");
const financeiroFiltroPredio = document.getElementById("financeiroFiltroPredio");
const financeiroFiltroApartamento = document.getElementById("financeiroFiltroApartamento");
const financeiroFiltroCategoria = document.getElementById("financeiroFiltroCategoria");
const financeiroBusca = document.getElementById("financeiroBusca");
const financeiroTotalLancamentos = document.getElementById("financeiroTotalLancamentos");
const financeiroTotalSaidas = document.getElementById("financeiroTotalSaidas");
const financeiroTotalEntradas = document.getElementById("financeiroTotalEntradas");
const financeiroResultado = document.getElementById("financeiroResultado");
const financeiroLimparFiltrosBtn = document.getElementById("financeiroLimparFiltrosBtn");
const financeiroNovoLancamentoBtn = document.getElementById("financeiroNovoLancamentoBtn");
const financeiroModal = document.getElementById("financeiroModal");
const closeFinanceiroModal = document.querySelector(".close-financeiro-modal");
const financeiroTipoInput = document.getElementById("financeiroTipoInput");
const financeiroCategoriaInput = document.getElementById("financeiroCategoriaInput");
const financeiroDescricaoInput = document.getElementById("financeiroDescricaoInput");
const financeiroPredioInput = document.getElementById("financeiroPredioInput");
const financeiroApartamentoInput = document.getElementById("financeiroApartamentoInput");
const financeiroQuantidadeInput = document.getElementById("financeiroQuantidadeInput");
const financeiroValorUnitarioInput = document.getElementById("financeiroValorUnitarioInput");

financeiroValorUnitarioInput?.addEventListener("input", (e) => {
  let valor = e.target.value.replace(/\D/g, "");

  if (!valor) {
    e.target.value = "";
    calcularValorTotalFinanceiro();
    return;
  }

  valor = (parseInt(valor, 10) / 100).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  e.target.value = `R$ ${valor}`;
  calcularValorTotalFinanceiro();
});

const financeiroDataInput = document.getElementById("financeiroDataInput");
const financeiroTotalPreview = document.getElementById("financeiroTotalPreview");
const financeiroCancelBtn = document.getElementById("financeiroCancelBtn");
const financeiroSalvarBtn = document.getElementById("financeiroSalvarBtn");
const relatoriosMesCompetencia = document.getElementById("relatoriosMesCompetencia");
const relatoriosTabShortstayBtn = document.getElementById("relatoriosTabShortstayBtn");
const relatoriosTabProprietarioBtn = document.getElementById("relatoriosTabProprietarioBtn");
const relatoriosPanelShortstay = document.getElementById("relatoriosPanelShortstay");
const relatoriosPanelProprietario = document.getElementById("relatoriosPanelProprietario");
const relatorioShortstayTaxasFixas = document.getElementById("relatorioShortstayTaxasFixas");
const relatorioShortstayComissoes = document.getElementById("relatorioShortstayComissoes");
const relatorioShortstayCustosOperacionais = document.getElementById("relatorioShortstayCustosOperacionais");
const relatorioShortstayResultado = document.getElementById("relatorioShortstayResultado");
const relatorioProprietarioReceitaBruta = document.getElementById("relatorioProprietarioReceitaBruta");
const relatorioProprietarioCustos = document.getElementById("relatorioProprietarioCustos");
const relatorioProprietarioTaxaAdm = document.getElementById("relatorioProprietarioTaxaAdm");
const relatorioProprietarioComissao = document.getElementById("relatorioProprietarioComissao");
const relatorioProprietarioRepasseLiquido = document.getElementById("relatorioProprietarioRepasseLiquido");
const relatorioProprietarioFiltroSelect = document.getElementById("relatorioProprietarioFiltroSelect");
const relatorioApartamentoFiltroSelect = document.getElementById("relatorioApartamentoFiltroSelect");
const relatorioDetalheReceitas = document.getElementById("relatorioDetalheReceitas");
const relatorioDetalheCustos = document.getElementById("relatorioDetalheCustos");
const relatorioDetalheTaxaAdm = document.getElementById("relatorioDetalheTaxaAdm");
const relatorioDetalheComissao = document.getElementById("relatorioDetalheComissao");
const documentacaoBusca = document.getElementById("documentacaoBusca");
const documentacaoCategorias = document.getElementById("documentacaoCategorias");
const documentacaoLista = document.getElementById("documentacaoLista");
const loginScreen = document.getElementById("loginScreen");
const appContainer = document.getElementById("appContainer");
const loginForm = document.getElementById("loginForm");
const loginEmail = document.getElementById("loginEmail");
const loginSenha = document.getElementById("loginSenha");
const loginError = document.getElementById("loginError");
const userNome = document.getElementById("userNome");
const userPerfil = document.getElementById("userPerfil");
const logoutBtn = document.getElementById("logoutBtn");
const apartamentoModal = document.getElementById("apartamentoModal");
const novoApartamentoBtn = document.getElementById("novoApartamentoBtn");
const apartamentosFiltroPredio = document.getElementById("apartamentosFiltroPredio");
const closeApartamentoModal = document.querySelector(".close-apartamento-modal");
const apartamentoEditId = document.getElementById("apartamentoEditId");
const apartamentoPredioInput = document.getElementById("apartamentoPredioInput");
const apartamentoNumeroInput = document.getElementById("apartamentoNumeroInput");
const apartamentoProprietarioInput = document.getElementById("apartamentoProprietarioInput");
const apartamentoFaxineiraPadraoInput = document.getElementById("apartamentoFaxineiraPadraoInput");
const apartamentoCustoLimpezaInput = document.getElementById("apartamentoCustoLimpezaInput");
const apartamentoCustoLavagemInput = document.getElementById("apartamentoCustoLavagemInput");
const apartamentoCustoSecagemInput = document.getElementById("apartamentoCustoSecagemInput");
const apartamentoTaxaFixaMensalInput = document.getElementById("apartamentoTaxaFixaMensalInput");
const apartamentoPercentualComissaoInput = document.getElementById("apartamentoPercentualComissaoInput");
const apartamentoLimiteComissaoInput = document.getElementById("apartamentoLimiteComissaoInput");
const apartamentoPercentualComissaoAcimaLimiteInput = document.getElementById("apartamentoPercentualComissaoAcimaLimiteInput");
const apartamentoLimpezaDonoInput = document.getElementById("apartamentoLimpezaDonoInput");
const apartamentoLavagemSecagemDonoInput = document.getElementById("apartamentoLavagemSecagemDonoInput");
const apartamentoStatusInput = document.getElementById("apartamentoStatusInput");
const apartamentoSaveBtn = document.getElementById("apartamentoSaveBtn");
const apartamentoCancelBtn = document.getElementById("apartamentoCancelBtn");

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
const filterData = document.getElementById("filterData");
const filterPredio = document.getElementById("filterPredio");
const clearFiltersBtn = document.querySelector(".clear-filters-btn");
const quickFilters = document.querySelectorAll(".quick-filter");
const historyQuickFilters = document.querySelectorAll(".history-quick-filter");
const filterConcluidasResponsavel = document.getElementById("filterConcluidasResponsavel");
const filterConcluidasPredio = document.getElementById("filterConcluidasPredio");
const filterCanceladasResponsavel = document.getElementById("filterCanceladasResponsavel");
const filterCanceladasPredio = document.getElementById("filterCanceladasPredio");

const feedbackModal = document.getElementById("feedbackModal");
const feedbackIcon = document.getElementById("feedbackIcon");
const feedbackTitle = document.getElementById("feedbackTitle");
const feedbackMessage = document.getElementById("feedbackMessage");
const feedbackOkBtn = document.getElementById("feedbackOkBtn");

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
let fluxoCaixa = [];
let reservas = [];
let financeiroOrdenacaoData = "desc";
let contadorLimpezas = 1;
let periodoAtual = "today";
const periodosHistorico = {
  concluidas: "today",
  canceladas: "today"
};
let apartamentoEditandoId = null;
let apartamentoCriandoNovo = false;
let usuarioLogadoAtual = null;
let sistemaIniciado = false;
let relatorioTabAtual = "shortstay";
let documentacaoCategoriaAtiva = "Todos";

const documentacaoSistema = [
  {
    categoria: "Vis\u00E3o Geral",
    titulo: "Vis\u00E3o geral do sistema",
    tags: ["sistema", "stack", "deploy", "produ\u00E7\u00E3o", "dev"],
    conteudo: `Short Stay ADM \u00E9 um sistema web para gest\u00E3o operacional e financeira de apartamentos short stay.
Stack atual: HTML, CSS, JavaScript puro, Google Sheets, Apps Script e GitHub Pages.
O desenvolvimento local ocorre em short-stay-adm_dev e a produ\u00E7\u00E3o em short-stay-adm.
Fluxo recomendado: desenvolver local, testar via Live Server e depois replicar online.`
  },
  {
    categoria: "M\u00F3dulos",
    titulo: "M\u00F3dulos do sistema",
    tags: ["m\u00F3dulos", "opera\u00E7\u00E3o", "gest\u00E3o", "relat\u00F3rios"],
    conteudo: `M\u00F3dulos: Opera\u00E7\u00E3o Ativas, Opera\u00E7\u00E3o Conclu\u00EDdas, Opera\u00E7\u00E3o Canceladas, Importa\u00E7\u00F5es, Apartamentos, Financeiro, Propriet\u00E1rios, Relat\u00F3rios e Base de Conhecimento.`
  },
  {
    categoria: "Opera\u00E7\u00E3o",
    titulo: "Fluxo operacional",
    tags: ["fluxo", "csv", "limpeza", "finaliza\u00E7\u00E3o"],
    conteudo: `CSV Airbnb/Booking -> importa\u00E7\u00E3o -> cria\u00E7\u00E3o de limpeza -> opera\u00E7\u00E3o -> finaliza\u00E7\u00E3o -> gera\u00E7\u00E3o de custos -> relat\u00F3rios.`
  },
  {
    categoria: "Financeiro",
    titulo: "Fluxo financeiro",
    tags: ["financeiro", "receita", "fechamento", "recebimento"],
    conteudo: `Reserva importada -> receita prevista -> fechamento -> recebimento previsto -> recebido real futuro.`
  },
  {
    categoria: "Regras de Neg\u00F3cio",
    titulo: "Regras principais do neg\u00F3cio",
    tags: ["regras", "custos", "propriet\u00E1rio", "comiss\u00E3o", "taxa"],
    conteudo: `Limpeza \u00E9 custo do propriet\u00E1rio.
Suprimentos s\u00E3o custo da opera\u00E7\u00E3o.
Amenidades s\u00E3o custo da opera\u00E7\u00E3o.
Reposi\u00E7\u00E3o por quebra/mancha \u00E9 custo do propriet\u00E1rio.
Manuten\u00E7\u00E3o geral \u00E9 custo do propriet\u00E1rio.
Receita da opera\u00E7\u00E3o: R$ 150 fixos por apartamento + 10% sobre loca\u00E7\u00F5es.`
  },
  {
    categoria: "Financeiro",
    titulo: "Mem\u00F3ria de c\u00E1lculo financeira",
    tags: ["dataCompetencia", "fechamento", "repasse", "l\u00EDquido"],
    conteudo: `Conceitos: dataCompetencia, dataFechamento, dataRecebimentoPrevisto, statusReceita prevista, receita bruta, receita l\u00EDquida prevista, custos operacionais, taxa ADM fixa, comiss\u00E3o percentual e repasse l\u00EDquido previsto.
Regra de datas:
- reservas at\u00E9 dia 20: fechamento dia 20 do mesmo m\u00EAs e recebimento previsto dia 30 do mesmo m\u00EAs.
- reservas ap\u00F3s dia 20: fechamento dia 20 do m\u00EAs seguinte e recebimento previsto dia 30 do m\u00EAs seguinte.`
  },
  {
    categoria: "Financeiro",
    titulo: "Regras Financeiras e Crit\u00E9rios de C\u00E1lculo",
    tags: ["financeiro", "comiss\u00E3o", "taxa administrativa", "fluxo de caixa", "reservas", "propriet\u00E1rios"],
    conteudo: `C\u00F3digo \u00FAnico da reserva:
Airbnb: C\u00F3digo de Confirma\u00E7\u00E3o.
Booking: N\u00FAmero da reserva.
No sistema: codigoReserva / referenciaReserva.
Esse c\u00F3digo \u00FAnico relaciona Reservas, Limpezas e FluxoCaixa.

Valor Efetivo:
\u00C9 o valor cont\u00E1bil que entra no raz\u00E3o financeiro.
Airbnb: Valor Efetivo = Valor.
Booking: Valor Efetivo = Pagamento total - Comiss\u00E3o.

Valor Informativo:
\u00C9 usado como refer\u00EAncia gerencial e base futura para comiss\u00E3o.
Airbnb: Valor Informativo da Reserva = Valor + Taxa de servi\u00E7o.
Booking: Valor Informativo = Pagamento total.
No FluxoCaixa, Valor Inf. pode guardar informa\u00E7\u00F5es auxiliares do lan\u00E7amento, como taxa de limpeza no Airbnb.

Comiss\u00E3o administrativa:
Base de comiss\u00E3o = Valor Informativo.
Campos usados no cadastro do apartamento: percentualComissao, limiteComissao, percentualComissaoAcimaLimite.
Regra sem limite: Comiss\u00E3o = Base de comiss\u00E3o x percentualComissao.
Regra com limite: at\u00E9 o limite usa percentualComissao; acima do limite usa percentualComissaoAcimaLimite.
Regra pendente de valida\u00E7\u00E3o antes de automatizar totalmente.

Taxa administrativa fixa:
Cada apartamento pode ter taxaFixaMensal.
Essa taxa representa receita fixa mensal da Shortstay por apartamento.
Exemplo: taxaFixaMensal = R$ 150.

Custos de limpeza:
Ao concluir limpeza o sistema usa os custos cadastrados no apartamento: custoLimpeza, custoLavagem e custoSecagem.
Quando a limpeza \u00E9 conclu\u00EDda:
- busca o apartamento
- busca os custos
- gera sa\u00EDdas no FluxoCaixa
- vincula os lan\u00E7amentos com referenciaLimpeza e referenciaReserva

Reservas canceladas:
Status OK:
- salva reserva
- cria limpeza
- gera receita prevista
Status Cancelada:
- salva/atualiza reserva
- n\u00E3o cria nova limpeza
- n\u00E3o gera nova receita prevista
Regra futura:
- cancelar limpeza pendente
- cancelar ou remover receita prevista
- preservar hist\u00F3rico

Pontos pendentes de valida\u00E7\u00E3o:
- De-Para correto entre an\u00FAncios e apartamentos reais
- Nome do propriet\u00E1rio
- Faxineira padr\u00E3o
- Custos reais
- Percentual de comiss\u00E3o
- Limite de comiss\u00E3o
- Percentual acima do limite
- Regra final para cancelamentos
- Regra final para repasse aos propriet\u00E1rios`
  },
  {
    categoria: "CSV Airbnb",
    titulo: "De-Para de campos \u2014 Airbnb",
    tags: ["airbnb", "csv", "de-para", "campos"],
    conteudo: `Tipo -> identifica se a linha \u00E9 Reserva ou Payout -> tipo de movimenta\u00E7\u00E3o.
C\u00F3digo de Confirma\u00E7\u00E3o -> referenciaReserva -> refer\u00EAncia da reserva.
An\u00FAncio -> mapeia pr\u00E9dio, apartamento e faxineira padr\u00E3o -> unidade vinculada.
Data de t\u00E9rmino -> data da limpeza/check-out e dataCompetencia -> compet\u00EAncia da reserva.
H\u00F3spede -> informa\u00E7\u00E3o auxiliar da reserva -> detalhe operacional.
Valor -> fallback para receita prevista caso Ganhos brutos esteja vazio -> valor base alternativo.
Taxa de servi\u00E7o -> taxa da plataforma Airbnb -> custo/taxa futura.
Taxa de limpeza -> composi\u00E7\u00E3o da receita da reserva -> componente da receita.
Ganhos brutos -> valor principal para receita prevista Airbnb -> Receita bruta / Receita prevista.
Pago -> futuro recebimento real quando Tipo = Payout -> Recebido real futuro.`
  },
  {
    categoria: "CSV Booking",
    titulo: "De-Para de campos \u2014 Booking",
    tags: ["booking", "csv", "de-para", "campos"],
    conteudo: `Type/Transaction type -> identifica tipo de linha/reserva -> tipo de movimenta\u00E7\u00E3o.
Reference number -> referenciaReserva -> refer\u00EAncia da reserva.
Property name -> mapeia pr\u00E9dio, apartamento e faxineira padr\u00E3o -> unidade vinculada.
Check-out date -> data da limpeza/check-out e dataCompetencia -> compet\u00EAncia da reserva.
Gross amount -> receita bruta da reserva -> Receita bruta.
Commission -> comiss\u00E3o/custo da Booking -> taxa da plataforma futura.
Payable amount -> valor principal para receita prevista Booking -> Receita prevista / A receber.
Payout amount -> fallback para receita prevista e futuro recebido real -> Recebido real futuro.
Payout date -> data futura de concilia\u00E7\u00E3o/recebimento real -> Data de recebimento real futura.`
  },
  {
    categoria: "Estruturas",
    titulo: "Estrutura do FluxoCaixa",
    tags: ["fluxocaixa", "campos", "estrutura", "json"],
    conteudo: `Campos: id, data, dataCompetencia, dataFechamento, dataRecebimentoPrevisto, tipo, categoria, statusReceita, descricao, predio, apartamento, quantidade, valorUnitario, valor, origem, referenciaLimpeza, referenciaReserva, criadoEm.`
  },
  {
    categoria: "Estruturas",
    titulo: "Estrutura dos apartamentos",
    tags: ["apartamentos", "estrutura", "cadastro", "financeiro"],
    conteudo: `Campos: id, predio, apartamento, proprietario, faxineiraPadrao, custoLimpeza, custoLavagem, custoSecagem, financeiro.taxaFixaMensal, financeiro.percentualComissao, financeiro.limpezaDono, financeiro.lavagemSecagemDono e ativo.`
  },
  {
    categoria: "Sheets",
    titulo: "Google Sheets planejado",
    tags: ["sheets", "abas", "integra\u00E7\u00E3o", "auditoria"],
    conteudo: `Abas planejadas: Limpezas, Apartamentos, FluxoCaixa e Historico/Auditoria.`
  },
  {
    categoria: "T\u00E9cnico",
    titulo: "Cuidados t\u00E9cnicos",
    tags: ["boas pr\u00E1ticas", "utf-8", "mobile", "codex"],
    conteudo: `Evitar refactors grandes.
Salvar sempre em UTF-8.
Revisar diffs do Codex.
Priorizar altera\u00E7\u00F5es pequenas.
Manter compatibilidade mobile.
N\u00E3o usar frameworks.`
  }
];

const usuariosMock = [
  { usuario: "admin", senha: "123456", perfil: "admin", nome: "Admin" },
  { usuario: "gestao", senha: "123456", perfil: "gestao", nome: "Gestao" },
  { usuario: "aniele", senha: "123456", perfil: "faxineira", nome: "Aniele" },
  { usuario: "thais", senha: "123456", perfil: "faxineira", nome: "Thais" }
];

function obterUsuarioLogado() {
  const salvo = localStorage.getItem("usuarioLogado");

  if (!salvo) return null;

  try {
    return JSON.parse(salvo);
  } catch (erro) {
    return null;
  }
}

function obterResponsavelFixoUsuario() {
  if (usuarioLogadoAtual?.perfil !== "faxineira") return "";
  return usuarioLogadoAtual.nome;
}

function aplicarPermissoesUsuario() {
  if (!usuarioLogadoAtual) return;

  const permissoesPorPerfil = {
    admin: ["adminPage", "apartamentosPage", "financeiroPage", "reservasPage", "proprietariosPage", "relatoriosPage", "documentacaoPage"],
    gestao: ["adminPage", "apartamentosPage", "reservasPage"],
    faxineira: []
  };

  const paginasPermitidas = permissoesPorPerfil[usuarioLogadoAtual.perfil] || [];
  const menuOperacao = document.getElementById("operacaoMenu");
  const menuGestao = document.getElementById("gestaoMenu");
  const menuRelatorios = document.getElementById("relatoriosMenu");

  if (menuOperacao) {
    menuOperacao.style.display = "block";
  }
  if (menuGestao) {
    menuGestao.style.display = "block";
  }
  if (menuRelatorios) {
    menuRelatorios.style.display = "block";
  }

  ["adminPage", "apartamentosPage", "financeiroPage", "reservasPage", "proprietariosPage", "relatoriosPage", "documentacaoPage"].forEach((pageId) => {
    const menuItem = document.querySelector(`.menu-item[data-page="${pageId}"]`);

    if (!menuItem) return;

    menuItem.style.display = paginasPermitidas.includes(pageId) ? "block" : "none";
  });

  if (menuGestao) {
    const itensGestaoVisiveis = menuGestao.querySelectorAll('.submenu .menu-item:not([style*="display: none"])');
    menuGestao.style.display = itensGestaoVisiveis.length ? "block" : "none";
  }
  if (menuRelatorios) {
    const itensRelatoriosVisiveis = menuRelatorios.querySelectorAll('.submenu .menu-item:not([style*="display: none"])');
    menuRelatorios.style.display = itensRelatoriosVisiveis.length ? "block" : "none";
  }

  if (usuarioLogadoAtual.perfil === "faxineira") {
    filterResponsavel.value = usuarioLogadoAtual.nome;
    if (filterConcluidasResponsavel) filterConcluidasResponsavel.value = usuarioLogadoAtual.nome;
    if (filterCanceladasResponsavel) filterCanceladasResponsavel.value = usuarioLogadoAtual.nome;
    filterResponsavel.disabled = true;
    if (filterConcluidasResponsavel) filterConcluidasResponsavel.disabled = true;
    if (filterCanceladasResponsavel) filterCanceladasResponsavel.disabled = true;
  } else {
    filterResponsavel.disabled = false;
    if (filterConcluidasResponsavel) filterConcluidasResponsavel.disabled = false;
    if (filterCanceladasResponsavel) filterCanceladasResponsavel.disabled = false;
  }

  const paginaAtiva = document.querySelector(".page.active-page");
  const paginaAtivaId = paginaAtiva?.id || "";
  const paginaRestrita = ["adminPage", "apartamentosPage", "financeiroPage", "reservasPage", "proprietariosPage", "relatoriosPage", "documentacaoPage"];

  if (paginaRestrita.includes(paginaAtivaId) && !paginasPermitidas.includes(paginaAtivaId)) {
    document.querySelectorAll(".page").forEach((page) => page.classList.remove("active-page"));
    document.getElementById("ativasPage").classList.add("active-page");

    resetarMenuVisual();
  }
}

function fazerLogin(event) {
  if (event) event.preventDefault();

  const usuarioDigitado = (loginEmail?.value || "").trim().toLowerCase();
  const senha = (loginSenha?.value || "").trim();

  const usuario = usuariosMock.find(
    (item) => item.usuario === usuarioDigitado && item.senha === senha
  );

  if (!usuario) {
    if (loginError) loginError.textContent = "Usuário ou senha inválidos.";
    return;
  }

  localStorage.setItem("usuarioLogado", JSON.stringify({
    usuario: usuario.usuario,
    perfil: usuario.perfil,
    nome: usuario.nome
  }));

  usuarioLogadoAtual = obterUsuarioLogado();

  if (loginError) loginError.textContent = "";
  if (loginForm) loginForm.reset();

  if (loginScreen) loginScreen.style.display = "none";
  if (appContainer) appContainer.style.display = "flex";

  if (!sistemaIniciado) {
    iniciarSistema();
  }

  if (userNome) userNome.textContent = usuarioLogadoAtual.nome;
  if (userPerfil) userPerfil.textContent = usuarioLogadoAtual.perfil;

  aplicarPermissoesUsuario();
  renderizarCards();
}

function fazerLogout() {
  localStorage.removeItem("usuarioLogado");
  usuarioLogadoAtual = null;

  if (appContainer) appContainer.style.display = "none";
  if (loginScreen) loginScreen.style.display = "flex";
  if (loginError) loginError.textContent = "";
}

function verificarSessao() {
  usuarioLogadoAtual = obterUsuarioLogado();

  if (!usuarioLogadoAtual) {
    if (appContainer) appContainer.style.display = "none";
    if (loginScreen) loginScreen.style.display = "flex";
    return;
  }

  if (loginScreen) loginScreen.style.display = "none";
  if (appContainer) appContainer.style.display = "flex";

  if (!sistemaIniciado) {
    iniciarSistema();
  }

  if (userNome) userNome.textContent = usuarioLogadoAtual.nome;
  if (userPerfil) userPerfil.textContent = usuarioLogadoAtual.perfil;

  aplicarPermissoesUsuario();
  renderizarCards();
}

function mostrarFeedback({ titulo, mensagem, tipo = "success" }) {
  feedbackTitle.textContent = titulo;
  feedbackMessage.innerHTML = mensagem;
  feedbackIcon.textContent = tipo === "warning" ? "!" : "✓";
  feedbackIcon.classList.toggle("warning", tipo === "warning");
  feedbackModal.style.display = "flex";
}

function criarResumoImportacao({ criadas, ignoradasHistorico, ignoradasDuplicadas, salvoFalhas }) {
  return `
      <p>Processamento concluído.</p>
    <div class="feedback-summary">
      <div><span>Criadas</span><strong>${criadas}</strong></div>
      <div><span>Ignoradas por histórico</span><strong>${ignoradasHistorico}</strong></div>
      <div><span>Ignoradas por duplicidade</span><strong>${ignoradasDuplicadas}</strong></div>
      <div><span>Falhas ao salvar no Sheets</span><strong>${salvoFalhas}</strong></div>
    </div>
  `;
}

function setBotaoProcessando(botao, processando, textoProcessando) {
  if (!botao) return;

  if (processando) {
    botao.dataset.textoOriginal = botao.textContent;
    botao.textContent = textoProcessando;
    botao.disabled = true;
    botao.classList.add("is-loading");
    return;
  }

  botao.textContent = botao.dataset.textoOriginal || botao.textContent;
  botao.disabled = false;
  botao.classList.remove("is-loading");
  delete botao.dataset.textoOriginal;
}

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
  "StÃºdio em Perdizes para 5 pessoas próx ao Allianz": {
    predio: "Bracon Perdizes",
    apartamento: "apto 86",
    faxineira: "Aniele"
  },
  "StÃºdio em Perdizes próx do Allianz Park cama Queen": {
    predio: "Essential Perdizes",
    apartamento: "apto 401",
    faxineira: "Aniele"
  },
  "Studio AcessÃ­vel PCD na Vila Mariana 100% Adaptado": {
    predio: "Haus Mitre",
    apartamento: "apto 709",
    faxineira: "Thais"
  },
  "StÃºdio no Brooklin 2 camas próx Berrini Aeroporto": {
    predio: "Level",
    apartamento: "apto 1811",
    faxineira: "Aniele"
  },
  "StÃºdio no Brooklin 2 camas próx Aeroporto Berrini": {
    predio: "Level",
    apartamento: "apto 1316",
    faxineira: "Thais"
  },
  "StÃºdio Brooklin 4 pessoas próximo Berrini Morumbi": {
    predio: "Level",
    apartamento: "apto 1516",
    faxineira: "Thais"
  },
  "StÃºdio moderno Campo Belo próx. Aeroporto e MetrÃ´": {
    predio: "Movi Campo Belo",
    apartamento: "apto 2208",
    faxineira: "Aniele"
  },
  "Studio 2 camas Campo Belo próx MetrÃ´ e Aeroporto": {
    predio: "Movi Campo Belo",
    apartamento: "apto 1702",
    faxineira: "Aniele"
  },
  "Studio Moderno Campo Belo próx Aeroporto e MetrÃ´": {
    predio: "Movi Campo Belo",
    apartamento: "apto 505",
    faxineira: "Aniele"
  },
  "Studio moderno Campo Belo próx MetrÃ´ e Aeroporto": {
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
  "StÃºdio lindo para 4 pessoas a 500m do Allianz Park": {
    predio: "Smart Bourbon",
    apartamento: "apto 1010",
    faxineira: "Aniele"
  },
  "StÃºdio moderno em Perdizes perto do Allianz Park": {
    predio: "Smart Bourbon",
    apartamento: "apto 1405",
    faxineira: "Aniele"
  },
  "StÃºdio moderno para 4 pessoas próx. Allianz Park": {
    predio: "Smart Bourbon",
    apartamento: "apto 404",
    faxineira: "Aniele"
  },
  "StÃºdio para 4 pessoas próx ao Allianz e São Camilo": {
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

const custosApartamentos = Object.entries(apartamentosPorPredio).flatMap(
  ([predio, apartamentos]) =>
    apartamentos.map((apartamento) => ({
      id: `${predio}-${apartamento}`.toLowerCase().replace(/\s+/g, "-"),
      predio,
      apartamento,
      proprietario: "Ricardo",
      faxineiraPadrao: "",
      custoLimpeza: 0,
      custoLavagem: 0,
      custoSecagem: 0,
      financeiro: {
        taxaFixaMensal: 150,
        percentualComissao: 10,
        limiteComissao: "",
        percentualComissaoAcimaLimite: "",
        limpezaDono: true,
        lavagemSecagemDono: true
      },
      ativo: true
    }))
);

function formatarMoeda(valor) {
  return Number(valor || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function converterMoedaCsvParaNumero(valor) {
  if (valor === null || valor === undefined) return 0;

  const textoOriginal = String(valor).trim();
  if (!textoOriginal) return 0;

  const apenasNumero = textoOriginal
    .replace(/\s/g, "")
    .replace(/[Rr]\$/g, "")
    .replace(/[^0-9,.-]/g, "");

  if (!apenasNumero) return 0;

  const ultimoPonto = apenasNumero.lastIndexOf(".");
  const ultimaVirgula = apenasNumero.lastIndexOf(",");
  let normalizado = apenasNumero;

  if (ultimaVirgula > ultimoPonto) {
    normalizado = apenasNumero.replace(/\./g, "").replace(",", ".");
  } else if (ultimoPonto > ultimaVirgula) {
    normalizado = apenasNumero.replace(/,/g, "");
  } else {
    normalizado = apenasNumero.replace(",", ".");
  }

  const numero = Number(normalizado);
  return Number.isFinite(numero) ? numero : 0;
}

function adicionarDiasISO(dataISO, dias) {
  const dataNormalizada = normalizarDataSistema(dataISO);
  if (!dataNormalizada || !Number.isFinite(Number(dias))) return "";

  const [ano, mes, dia] = dataNormalizada.split("-").map(Number);
  const data = new Date(ano, mes - 1, dia);
  data.setDate(data.getDate() + Number(dias));

  const anoFinal = data.getFullYear();
  const mesFinal = String(data.getMonth() + 1).padStart(2, "0");
  const diaFinal = String(data.getDate()).padStart(2, "0");
  return `${anoFinal}-${mesFinal}-${diaFinal}`;
}

function primeiroDiaMesSeguinteISO(dataISO) {
  const dataNormalizada = normalizarDataSistema(dataISO);
  if (!dataNormalizada) return "";

  const [ano, mes] = dataNormalizada.split("-").map(Number);
  const data = new Date(ano, mes - 1, 1);
  data.setMonth(data.getMonth() + 1);

  const anoFinal = data.getFullYear();
  const mesFinal = String(data.getMonth() + 1).padStart(2, "0");
  return `${anoFinal}-${mesFinal}-01`;
}

function calcularDatasReceitaPrevista(dataBase, origem, dataEntrada = "") {
  const competenciaNormalizada = normalizarDataSistema(dataBase);
  if (!competenciaNormalizada) {
    return {
      dataCompetencia: "",
      dataFechamento: "",
      dataRecebimentoPrevisto: ""
    };
  }

  let dataRecebimentoPrevisto = "";

  if (origem === "receita_prevista_airbnb") {
    dataRecebimentoPrevisto = adicionarDiasISO(dataEntrada || dataBase, 1);
  } else if (origem === "receita_prevista_booking") {
    dataRecebimentoPrevisto = primeiroDiaMesSeguinteISO(dataBase);
  }

  return {
    dataCompetencia: competenciaNormalizada,
    dataFechamento: "",
    dataRecebimentoPrevisto
  };
}

function gerarReceitaPrevistaReserva(limpeza, origem, valorReceita, valorInfo = 0, datasReserva = {}) {
  const valorNumerico = Number(valorReceita);

  if (!limpeza || !limpeza.referenciaReserva || !valorNumerico || !Number.isFinite(valorNumerico)) return;

  const valorFinal = Math.abs(valorNumerico);
  if (valorFinal <= 0) return;

  const dataEntrada = datasReserva?.dataEntrada || "";
  const dataSaida = datasReserva?.dataSaida || limpeza.data;
  const datas = calcularDatasReceitaPrevista(dataSaida, origem, dataEntrada);
  if (!datas.dataRecebimentoPrevisto) return;

  fluxoCaixa = fluxoCaixa.filter((lancamento) => {
    const mesmaOrigem = lancamento.origem === origem;
    const mesmaReserva = lancamento.referenciaReserva === limpeza.referenciaReserva;
    return !(mesmaOrigem && mesmaReserva);
  });

  const novoLancamento = {
    id: `fcx-receita-${limpeza.id}-${Date.now()}`,
    data: datas.dataRecebimentoPrevisto,
    dataCompetencia: datas.dataCompetencia,
    dataFechamento: datas.dataFechamento,
    dataRecebimentoPrevisto: datas.dataRecebimentoPrevisto,
    tipo: "entrada",
    categoria: "Receita prevista",
    statusReceita: "prevista",
    descricao: `Receita prevista - ${limpeza.predio} ${limpeza.apartamento}`,
    predio: limpeza.predio,
    apartamento: limpeza.apartamento,
    quantidade: 1,
    valorUnitario: valorFinal,
    valor: valorFinal,
    valorInfo: Number(valorInfo) || 0,
    origem,
    referenciaLimpeza: limpeza.id,
    referenciaReserva: limpeza.referenciaReserva,
    criadoEm: new Date().toISOString()
  };

  fluxoCaixa.push(novoLancamento);
  salvarFluxoCaixaSheets(novoLancamento);
  salvarFluxoCaixaLocalStorage();
}

function carregarFluxoCaixaLocalStorage() {
  const dadosSalvos = localStorage.getItem("fluxoCaixa");

  if (!dadosSalvos) {
    fluxoCaixa = [];
    return;
  }

  try {
    const lista = JSON.parse(dadosSalvos);
    fluxoCaixa = Array.isArray(lista) ? lista : [];
  } catch (erro) {
    fluxoCaixa = [];
    console.error("Erro ao carregar fluxo de caixa local:", erro);
  }
}

function salvarFluxoCaixaLocalStorage() {
  localStorage.setItem("fluxoCaixa", JSON.stringify(fluxoCaixa));
}

function buscarCustosApartamento(predio, apartamento) {
  const normalizarChave = (valor) =>
    String(valor || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  let custos = custosApartamentos.find((item) => {
    return item.predio === predio && item.apartamento === apartamento;
  });

  if (!custos) {
    const predioNormalizado = normalizarChave(predio);
    const apartamentoNormalizado = normalizarChave(apartamento);

    custos = custosApartamentos.find((item) => {
      return (
        normalizarChave(item.predio) === predioNormalizado &&
        normalizarChave(item.apartamento) === apartamentoNormalizado
      );
    });
  }

  return (
    custos || {
      custoLimpeza: 0,
      custoLavagem: 0,
      custoSecagem: 0
    }
  );
}

function removerLancamentosFinanceirosPorLimpeza(limpezaId) {
  fluxoCaixa = fluxoCaixa.filter((lancamento) => {
    return lancamento.referenciaLimpeza !== limpezaId;
  });
}

function gerarLancamentosFinanceirosLimpeza(limpeza) {
  removerLancamentosFinanceirosPorLimpeza(limpeza.id);

  const custos = buscarCustosApartamento(limpeza.predio, limpeza.apartamento);
  const dataLancamento = normalizarDataSistema(
    limpeza.concluidoEm || limpeza.data || hojeISO(),
    limpeza.origem
  );

  const qtdLavagem = Number(limpeza.lavagem) || 0;
  const qtdSecagem = Number(limpeza.secagem) || 0;
  const novosLancamentos = [];

  const criarLancamento = (categoria, quantidade, valorUnitario, descricao) => {
    const valorTotal = Number((quantidade * valorUnitario * -1).toFixed(2));

    return {
      id: `fcx-${limpeza.id}-${categoria.toLowerCase()}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
      data: dataLancamento,
      tipo: "saida",
      categoria,
      descricao,
      predio: limpeza.predio,
      apartamento: limpeza.apartamento,
      quantidade,
      valorUnitario: Number(valorUnitario),
      valor: valorTotal,
      origem: "finalizacao_limpeza",
      referenciaLimpeza: limpeza.id,
      referenciaReserva: limpeza.referenciaReserva || "",
      criadoEm: new Date().toISOString()
    };
  };

  if (Number(custos.custoLimpeza) > 0) {
    novosLancamentos.push(
      criarLancamento(
        "Limpeza",
        1,
        Number(custos.custoLimpeza),
        `Limpeza operacional - ${limpeza.predio} ${limpeza.apartamento}`
      )
    );
  }

  if (qtdLavagem > 0 && Number(custos.custoLavagem) > 0) {
    novosLancamentos.push(
      criarLancamento(
        "Lavagem",
        qtdLavagem,
        Number(custos.custoLavagem),
        `Lavagem operacional - ${qtdLavagem} un. - ${limpeza.predio} ${limpeza.apartamento}`
      )
    );
  }

  if (qtdSecagem > 0 && Number(custos.custoSecagem) > 0) {
    novosLancamentos.push(
      criarLancamento(
        "Secagem",
        qtdSecagem,
        Number(custos.custoSecagem),
        `Secagem operacional - ${qtdSecagem} un. - ${limpeza.predio} ${limpeza.apartamento}`
      )
    );
  }

  fluxoCaixa.push(...novosLancamentos);

  return novosLancamentos;
}

function calcularTotalLancamentos(lancamentos) {
  return lancamentos.reduce((acc, item) => acc + (Number(item.valor) || 0), 0);
}

function formatarDataFinanceira(data) {
  if (!data) return "-";

  const normalizada = normalizarDataSistema(data);
  const [ano, mes, dia] = normalizada.split("-");

  if (!ano || !mes || !dia) return data;

  return `${dia}/${mes}/${ano}`;
}

function popularFiltrosFinanceiro() {
  if (!financeiroFiltroMes || !financeiroFiltroPredio || !financeiroFiltroApartamento || !financeiroFiltroCategoria) {
    return;
  }

  const manterMes = financeiroFiltroMes.value;
  const manterPredio = financeiroFiltroPredio.value;
  const manterApartamento = financeiroFiltroApartamento.value;
  const manterCategoria = financeiroFiltroCategoria.value;

  const meses = [...new Set(fluxoCaixa.map((item) => String(item.data || "").slice(0, 7)).filter(Boolean))].sort();
  const predios = [...new Set(fluxoCaixa.map((item) => item.predio).filter(Boolean))].sort();
  const apartamentosBase = manterPredio
    ? fluxoCaixa.filter((item) => item.predio === manterPredio)
    : fluxoCaixa;
  const apartamentos = [...new Set(apartamentosBase.map((item) => item.apartamento).filter(Boolean))].sort();
  const categorias = [...new Set(fluxoCaixa.map((item) => item.categoria).filter(Boolean))].sort();

  const preencher = (select, placeholder, valores) => {
    select.innerHTML = `<option value="">${placeholder}</option>`;
    valores.forEach((valor) => {
      const option = document.createElement("option");
      option.value = valor;
      option.textContent = valor;
      select.appendChild(option);
    });
  };

  preencher(financeiroFiltroMes, "Todos os meses", meses);
  preencher(financeiroFiltroPredio, "Todos os prédios", predios);
  preencher(financeiroFiltroApartamento, "Todos os apartamentos", apartamentos);
  preencher(financeiroFiltroCategoria, "Todas as categorias", categorias);

  financeiroFiltroMes.value = manterMes;
  financeiroFiltroPredio.value = manterPredio;
  financeiroFiltroApartamento.value = apartamentos.includes(manterApartamento) ? manterApartamento : "";
  financeiroFiltroCategoria.value = manterCategoria;
}

function aplicarFiltrosFinanceiro() {
  const filtroMes = financeiroFiltroMes?.value || "";
  const filtroPredio = financeiroFiltroPredio?.value || "";
  const filtroApartamento = financeiroFiltroApartamento?.value || "";
  const filtroCategoria = financeiroFiltroCategoria?.value || "";
  const busca = String(financeiroBusca?.value || "").trim().toLowerCase();

  return fluxoCaixa.filter((item) => {
    const mesItem = String(item.data || "").slice(0, 7);

    if (filtroMes && mesItem !== filtroMes) return false;
    if (filtroPredio && item.predio !== filtroPredio) return false;
    if (filtroApartamento && item.apartamento !== filtroApartamento) return false;
    if (filtroCategoria && item.categoria !== filtroCategoria) return false;

    const camposBusca = [
      item.descricao,
      item.categoria,
      item.referenciaReserva,
      item.origem,
      item.predio,
      item.apartamento
    ].map((valor) => String(valor || "").toLowerCase());

    if (busca && !camposBusca.some((valor) => valor.includes(busca))) return false;

    return true;
  });
}

function gerarOuGarantirTaxaFixaMensalApartamentos(dataBase = hojeISO()) {
  const mesCompetencia = String(normalizarDataSistema(dataBase) || hojeISO()).slice(0, 7);
  if (!mesCompetencia || mesCompetencia.length !== 7) return;

  const dataLancamento = `${mesCompetencia}-01`;

  custosApartamentos.forEach((apartamento) => {
    const taxaBruta = apartamento.financeiro?.taxaFixaMensal;
    const taxaFixaMensal = taxaBruta === undefined || taxaBruta === null || taxaBruta === ""
      ? 150
      : Number(taxaBruta);

    if (!Number.isFinite(taxaFixaMensal) || taxaFixaMensal <= 0) return;

    const jaExiste = fluxoCaixa.some((lancamento) => {
      return (
        lancamento.categoria === "taxa_fixa_administrativa" &&
        lancamento.predio === apartamento.predio &&
        lancamento.apartamento === apartamento.apartamento &&
        String(lancamento.data || "").slice(0, 7) === mesCompetencia
      );
    });

    if (jaExiste) return;

   const novoLancamento = {
  id: `fcx-taxa-fixa-${apartamento.id}-${mesCompetencia}`,
  data: dataLancamento,
  tipo: "entrada",
  categoria: "taxa_fixa_administrativa",
  descricao: "Taxa fixa administrativa mensal",
  predio: apartamento.predio,
  apartamento: apartamento.apartamento,
  quantidade: 1,
  valorUnitario: taxaFixaMensal,
  valor: taxaFixaMensal,
  origem: "taxa_fixa_administrativa",
  beneficiario: "Ricardo/Shortstay",
  referenciaLimpeza: "",
  criadoEm: new Date().toISOString()
};

fluxoCaixa.push(novoLancamento);
salvarFluxoCaixaSheets(novoLancamento);
});
  salvarFluxoCaixaLocalStorage();
}

function calcularFaturamentoApartamentoMes(apartamento, mesCompetencia) {
  if (!apartamento || !mesCompetencia) return 0;

  return fluxoCaixa
    .filter((lancamento) => {
      const mesLancamento = String(lancamento.dataCompetencia || lancamento.data || "").slice(0, 7);
      const mesmoApartamento = lancamento.predio === apartamento.predio && lancamento.apartamento === apartamento.apartamento;
      const mesmaCompetencia = mesLancamento === mesCompetencia;
      return mesmaCompetencia && mesmoApartamento && ehReceitaLocacao(lancamento);
    })
    .reduce((acc, lancamento) => acc + (Number(lancamento.valor) || 0), 0);
}

function ehReceitaLocacao(lancamento) {
  if (!lancamento) return false;

  const normalizar = (texto) => {
    return String(texto || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  };

  const origem = normalizar(lancamento.origem);
  const categoria = normalizar(lancamento.categoria);
  const descricao = normalizar(lancamento.descricao);
  const status = normalizar(lancamento.statusReceita);
  const ehEntrada = lancamento.tipo === "entrada" && Number(lancamento.valor) > 0;

  if (!ehEntrada) return false;
  if (["cancelado", "cancelada"].includes(status)) return false;
  if (["taxa_fixa_administrativa", "comissao_administrativa", "reembolso"].includes(categoria)) return false;
  if (["taxa_fixa_administrativa", "comissao_administrativa"].includes(origem)) return false;

  if (["receita_prevista_booking", "receita_prevista_airbnb"].includes(origem)) return true;

  const manualLocacao = origem === "manual" && categoria === "receita" && (descricao.includes("locacao") || descricao.includes("locação"));
  return manualLocacao;
}

function gerarOuGarantirComissaoMensalApartamentos(dataBase = hojeISO()) {
  const mesCompetencia = String(normalizarDataSistema(dataBase) || hojeISO()).slice(0, 7);
  if (!mesCompetencia || mesCompetencia.length !== 7) return;

  const [anoTexto, mesTexto] = mesCompetencia.split("-");
  let ano = Number(anoTexto);
  let mes = Number(mesTexto);
  mes += 1;
  if (mes > 12) {
    mes = 1;
    ano += 1;
  }
  const dataLancamento = `${ano}-${String(mes).padStart(2, "0")}-01`;

  custosApartamentos.forEach((apartamento) => {
    const percentualBruto = apartamento.financeiro?.percentualComissao;
    const percentualComissao = percentualBruto === undefined || percentualBruto === null || percentualBruto === ""
      ? 10
      : Number(percentualBruto);

    if (!Number.isFinite(percentualComissao) || percentualComissao <= 0) return;

    const faturamentoMes = calcularFaturamentoApartamentoMes(apartamento, mesCompetencia);
    if (!faturamentoMes || faturamentoMes <= 0) return;

    const jaExiste = fluxoCaixa.some((lancamento) => {
      return (
        lancamento.categoria === "comissao_administrativa" &&
        lancamento.predio === apartamento.predio &&
        lancamento.apartamento === apartamento.apartamento &&
        lancamento.mesCompetencia === mesCompetencia
      );
    });

    if (jaExiste) return;

    const valorComissao = Number((faturamentoMes * (percentualComissao / 100)).toFixed(2));
    if (valorComissao <= 0) return;

    const novoLancamento = {
      id: `fcx-comissao-${apartamento.id}-${mesCompetencia}`,
      data: dataLancamento,
      mesCompetencia,
      tipo: "entrada",
      categoria: "comissao_administrativa",
      descricao: "Comissão administrativa sobre faturamento",
      predio: apartamento.predio,
      apartamento: apartamento.apartamento,
      quantidade: 1,
      valorUnitario: valorComissao,
      valor: valorComissao,
      origem: "comissao_administrativa",
      beneficiario: "Ricardo/Shortstay",
      referenciaLimpeza: "",
      criadoEm: new Date().toISOString()
    };
   
      fluxoCaixa.push(novoLancamento);
      salvarFluxoCaixaSheets(novoLancamento);

  });

  salvarFluxoCaixaLocalStorage();
}

function atualizarResumoFinanceiro(lancamentos) {
  const total = lancamentos.length;
  const entradas = lancamentos
    .filter((item) => Number(item.valor) > 0)
    .reduce((acc, item) => acc + Number(item.valor), 0);
  const saidas = lancamentos
    .filter((item) => Number(item.valor) < 0)
    .reduce((acc, item) => acc + Number(item.valor), 0);
  const resultado = entradas + saidas;

  if (financeiroTotalLancamentos) financeiroTotalLancamentos.textContent = total;
  if (financeiroTotalSaidas) financeiroTotalSaidas.textContent = formatarMoeda(Math.abs(saidas));
  if (financeiroTotalEntradas) financeiroTotalEntradas.textContent = formatarMoeda(entradas);
  if (financeiroResultado) financeiroResultado.textContent = formatarMoeda(resultado);
}

function formatarCategoriaVisual(categoria) {
  const chave = String(categoria || "").toLowerCase();
  const mapa = {
    taxa_fixa_administrativa: "Taxa ADM",
    comissao_administrativa: "Comissão ADM",
    receita_prevista_airbnb: "Receita Airbnb",
    receita_prevista_booking: "Receita Booking",
    lavagem_secagem: "Lavagem/Secagem",
    manutencao: "Manutenção",
    reposicao: "Reposição"
  };

  return mapa[chave] || categoria || "-";
}

function formatarDescricaoFinanceiroVisual(descricao) {
  const texto = String(descricao || "");
  if (texto.toLowerCase().includes("comissão administrativa sobre faturamento") || texto.toLowerCase().includes("comissao administrativa sobre faturamento")) {
    return "Comissão sobre faturamento";
  }
  return (texto.split(" - ")[0] || texto || "-").trim() || "-";
}

function popularCategoriasDocumentacao() {
  if (!documentacaoCategorias) return;

  const categorias = ["Todos", ...new Set(documentacaoSistema.map((item) => item.categoria))];
  documentacaoCategorias.innerHTML = "";

  categorias.forEach((categoria) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `documentacao-categoria-btn ${documentacaoCategoriaAtiva === categoria ? "active" : ""}`;
    btn.textContent = categoria;
    btn.addEventListener("click", () => {
      documentacaoCategoriaAtiva = categoria;
      filtrarDocumentacao();
    });
    documentacaoCategorias.appendChild(btn);
  });
}

function filtrarDocumentacao() {
  if (!documentacaoLista) return;

  const termoBusca = String(documentacaoBusca?.value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

  const normalizar = (texto) => String(texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const itensFiltrados = documentacaoSistema.filter((item) => {
    const textoAlvo = [
      item.categoria,
      item.titulo,
      (item.tags || []).join(" "),
      item.conteudo
    ].map(normalizar).join(" ");

    const passouCategoria = documentacaoCategoriaAtiva === "Todos" || item.categoria === documentacaoCategoriaAtiva;
    const passouBusca = !termoBusca || textoAlvo.includes(termoBusca);

    return passouCategoria && passouBusca;
  });

  if (!itensFiltrados.length) {
    documentacaoLista.innerHTML = '<p class="documentacao-empty">Nenhum conteúdo encontrado.</p>';
    popularCategoriasDocumentacao();
    return;
  }

  const formatarTextoVisual = (texto) => {
    return String(texto || "")
      .replace(/\uFFFD/g, "•")
      .replace(/->/g, " -> ")
      .replace(/\s+/g, " ")
      .trim();
  };

  const obterConteudoCurtoPorTitulo = (item) => {
    const mapa = {
      "Módulos do sistema": [
        "Operação Ativas",
        "Operação Concluídas",
        "Operação Canceladas",
        "Importações",
        "Apartamentos",
        "Financeiro",
        "Proprietários",
        "Relatórios",
        "Base de Conhecimento"
      ],
      "Fluxo operacional": [
        "CSV Airbnb/Booking",
        "Importação",
        "Criação de limpeza",
        "Operação diária",
        "Finalização",
        "Geração de custos",
        "Relatórios"
      ],
      "Fluxo financeiro": [
        "Reserva importada",
        "Receita prevista",
        "Fechamento",
        "Recebimento previsto",
        "Recebido real (futuro)"
      ],
      "Regras principais do negócio": [
        "Limpeza: custo do proprietário.",
        "Suprimentos: custo da operação.",
        "Amenidades: custo da operação.",
        "Reposição por quebra/mancha: custo do proprietário.",
        "Manutenção geral: custo do proprietário.",
        "Receita da operação: R$ 150 fixos por apartamento + 10% sobre locações."
      ],
      "Cuidados técnicos": [
        "Evitar refactors grandes.",
        "Salvar sempre em UTF-8.",
        "Revisar diffs do Codex.",
        "Priorizar alterações pequenas.",
        "Manter compatibilidade mobile.",
        "Não usar frameworks."
      ]
    };

    return mapa[item.titulo] || null;
  };

  const formatarConteudoDocumentacao = (item) => {
    const conteudoCurto = obterConteudoCurtoPorTitulo(item);
    if (conteudoCurto) {
      return `
        <div class="doc-list">
          ${conteudoCurto.map((linha) => `
            <div class="doc-list-item">
              <span class="doc-list-icon">&#10003;</span>
              <span>${formatarTextoVisual(linha)}</span>
            </div>
          `).join("")}
        </div>
      `;
    }

    const linhas = String(item.conteudo || "")
      .split("\n")
      .map((linha) => linha.trim())
      .filter(Boolean);

    const titulo = String(item.titulo || "");
    const tecnico = titulo.includes("Memória de cálculo") ||
      titulo.includes("De-Para") ||
      titulo.includes("Estrutura");

    if (tecnico) {
      const htmlLinhas = linhas.map((linha) => {
        const texto = formatarTextoVisual(linha);
        if (texto.includes("->")) {
          const partes = texto.split("->").map((parte) => parte.trim());
          const primeira = partes.shift() || "";
          const restante = partes.join(' <span class="doc-highlight">&rarr;</span> ');
          return `<div><span class="doc-highlight">${primeira}</span> <span class="doc-highlight">&rarr;</span> ${restante}</div>`;
        }
        if (texto.startsWith("-")) {
          return `<div><span class="doc-highlight">•</span> ${texto.replace(/^-+\s*/, "")}</div>`;
        }
        return `<div>${texto}</div>`;
      }).join("");

      return `<div class="doc-code-block">${htmlLinhas}</div>`;
    }

    return `
      <div class="doc-list">
        ${linhas.map((linha) => `
          <div class="doc-list-item">
            <span class="doc-list-icon">•</span>
            <span>${formatarTextoVisual(linha)}</span>
          </div>
        `).join("")}
      </div>
    `;
  };

  documentacaoLista.innerHTML = itensFiltrados.map((item) => `
    <article class="documentacao-card ${item.titulo.includes("De-Para") ? "depara-card" : ""}">
      <div class="doc-section-label">${item.categoria}</div>
      <h3>${item.titulo}</h3>
      <div class="documentacao-meta">
        ${(item.tags || []).map((tag) => `<span class="documentacao-tag">${tag}</span>`).join("")}
      </div>
      <div class="documentacao-conteudo">${formatarConteudoDocumentacao(item)}</div>
    </article>
  `).join("");

  popularCategoriasDocumentacao();
}
function renderizarDocumentacao() {
  if (!documentacaoLista || !documentacaoCategorias) return;
  filtrarDocumentacao();
}

function renderizarFinanceiro() {
  if (!financeiroList) return;

  const mesFiltro = financeiroFiltroMes?.value || "";
  const dataBaseFinanceiro = /^\d{4}-\d{2}$/.test(mesFiltro) ? `${mesFiltro}-01` : hojeISO();

  gerarOuGarantirTaxaFixaMensalApartamentos(dataBaseFinanceiro);
  gerarOuGarantirComissaoMensalApartamentos(dataBaseFinanceiro);
  popularFiltrosFinanceiro();
  const lancamentos = aplicarFiltrosFinanceiro()
    .slice()
    .sort((a, b) => {
      if (financeiroOrdenacaoData === "asc") {
        return String(a.data || "").localeCompare(String(b.data || ""));
      }
      return String(b.data || "").localeCompare(String(a.data || ""));
    });

  atualizarResumoFinanceiro(lancamentos);

  if (!lancamentos.length) {
    financeiroList.innerHTML = '<p class="empty-financeiro">Nenhum lançamento financeiro registrado ainda.</p>';
    return;
  }

  financeiroList.innerHTML = lancamentos
    .map((item) => {
      const valor = Number(item.valor) || 0;
      const valorInfo = Number(item.valorInfo) || 0;
      const apartamentoVisual = String(item.apartamento || "-").replace(/^apto\s+/i, "");
      const natureza = valor > 0 ? "C" : valor < 0 ? "D" : "-";
      const origemMarcador = item.origem === "manual" ? "M" : "A";

      return `
        <article class="financeiro-item">
          <div class="financeiro-item-header">
            <span data-label="Data">${formatarDataFinanceira(item.data)}</span>
            <span data-label="Categoria">${formatarCategoriaVisual(item.categoria)}</span>
            <span data-label="Descrição">${formatarDescricaoFinanceiroVisual(item.descricao)}</span>
            <span data-label="Prédio">${item.predio || "-"}</span>
            <span data-label="Apto.">${apartamentoVisual}</span>
            <span data-label="Qtd">${item.quantidade ?? "-"}</span>
            <span data-label="Valor unit.">${formatarMoeda(item.valorUnitario || 0)}</span>
            <span data-label="Valor Efetivo" class="financeiro-valor ${valor < 0 ? "valor-saida" : "valor-entrada"}">${formatarMoeda(Math.abs(valor))}</span>
            <span data-label="Valor Inf." class="financeiro-valor">${valorInfo > 0 ? formatarMoeda(valorInfo) : "-"}</span>
            <span data-label="Reserva">${item.referenciaReserva || "-"}</span>
            <span data-label="Natureza">${natureza}</span>
            <span data-label="Origem"><small class="financeiro-origem-badge">${origemMarcador}</small></span>
          </div>
        </article>
      `;
    })
    .join("");
}

function formatarResumoCalculoFinanceiro(tipo, quantidade, valorUnitario) {
  const qtd = Number(quantidade) || 0;
  const unit = Number(valorUnitario) || 0;
  const totalBruto = qtd * unit;
  const prefixo = tipo === "entrada" ? "Entrada de" : "Total";
  return `${qtd} x ${formatarMoeda(unit)} = ${prefixo} ${formatarMoeda(totalBruto)}`;
}

function calcularValorTotalFinanceiro() {
  const quantidade = Number(financeiroQuantidadeInput?.value) || 0;
  const valorUnitario = Number(
        financeiroValorUnitarioInput?.value
          .replace("R$", "")
          .replace(/\./g, "")
          .replace(",", ".")
          .trim()
    ) || 0;
  const tipo = financeiroTipoInput?.value || "saida";
  const bruto = quantidade * valorUnitario;
  const total = tipo === "saida" ? bruto * -1 : bruto;

  if (financeiroTotalPreview) {
    financeiroTotalPreview.textContent = formatarResumoCalculoFinanceiro(tipo, quantidade, valorUnitario);
  }

  return total;
}

function abrirModalFinanceiro() {
  if (!financeiroModal) return;

  financeiroTipoInput.value = "saida";
  financeiroCategoriaInput.value = "Operacional";
  financeiroDescricaoInput.value = "";
  financeiroPredioInput.value = "";
  financeiroApartamentoInput.innerHTML = '<option value="">Selecione o apartamento</option>';
  financeiroQuantidadeInput.value = "";
  financeiroValorUnitarioInput.value = "";
  financeiroDataInput.value = hojeISO();

  const predios = [...new Set(custosApartamentos.map((item) => item.predio))].sort();
  financeiroPredioInput.innerHTML = '<option value="">Selecione o prédio</option>';
  predios.forEach((predio) => {
    const option = document.createElement("option");
    option.value = predio;
    option.textContent = predio;
    financeiroPredioInput.appendChild(option);
  });

  calcularValorTotalFinanceiro();
  financeiroModal.style.display = "flex";
}

function fecharModalFinanceiro() {
  if (!financeiroModal) return;
  financeiroModal.style.display = "none";
}

function salvarLancamentoManual() {
  const tipo = financeiroTipoInput.value;
  const categoria = financeiroCategoriaInput.value;
  const descricao = financeiroDescricaoInput.value.trim();
  const predio = financeiroPredioInput.value;
  const apartamento = financeiroApartamentoInput.value;
  const quantidade = Number(financeiroQuantidadeInput.value) || 0;
  const valorUnitario = Number(
  (financeiroValorUnitarioInput?.value || "")
    .replace("R$", "")
    .replace(/\./g, "")
    .replace(",", ".")
    .trim()
) || 0;
  const data = financeiroDataInput.value || hojeISO();

  if (!descricao || !predio || !apartamento || quantidade <= 0 || valorUnitario <= 0) {
    mostrarFeedback({
      titulo: "Campos incompletos",
      mensagem: "<p>Preencha todos os campos obrigatórios do lançamento manual.</p>",
      tipo: "warning"
    });
    return;
  }

  const valorBruto = Number((quantidade * valorUnitario).toFixed(2));
  const valor = tipo === "saida" ? valorBruto * -1 : valorBruto;

  const novoLancamento = {
    id: `fcx-manual-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    data,
    tipo,
    categoria,
    descricao,
    predio,
    apartamento,
    quantidade,
    valorUnitario,
    valor,
    origem: "manual",
    referenciaLimpeza: "",
    criadoEm: new Date().toISOString()
  };

  fluxoCaixa.push(novoLancamento);

  salvarFluxoCaixaLocalStorage();
  salvarFluxoCaixaSheets(novoLancamento);
  fecharModalFinanceiro();
  renderizarFinanceiro();

  mostrarFeedback({
    titulo: "Tudo certo",
    mensagem: "<p>Lançamento financeiro registrado.</p>"
  });
}

function limparFiltrosFinanceiro() {
  if (financeiroFiltroMes) financeiroFiltroMes.value = "";
  if (financeiroFiltroPredio) financeiroFiltroPredio.value = "";
  if (financeiroFiltroApartamento) financeiroFiltroApartamento.value = "";
  if (financeiroFiltroCategoria) financeiroFiltroCategoria.value = "";
  if (financeiroBusca) financeiroBusca.value = "";
  renderizarFinanceiro();
}

function salvarCustosApartamentosLocalStorage() {
  localStorage.setItem("custosApartamentos", JSON.stringify(custosApartamentos));
}

function carregarCustosApartamentosLocalStorage() {
  const dadosSalvos = localStorage.getItem("custosApartamentos");

  if (!dadosSalvos) return;

  try {
    const listaSalva = JSON.parse(dadosSalvos);

    if (!Array.isArray(listaSalva)) return;

    listaSalva.forEach((salvo) => {
      const atual = custosApartamentos.find((item) => item.id === salvo.id);

      if (!atual) return;

      atual.proprietario = salvo.proprietario ?? atual.proprietario;
      atual.faxineiraPadrao = salvo.faxineiraPadrao ?? atual.faxineiraPadrao;
      atual.custoLimpeza = Number(salvo.custoLimpeza) || 0;
      atual.custoLavagem = Number(salvo.custoLavagem) || 0;
      atual.custoSecagem = Number(salvo.custoSecagem) || 0;
      const percentualSalvo = salvo.financeiro?.percentualComissao;
      const limiteComissaoSalvo = salvo.financeiro?.limiteComissao;
      const percentualComissaoAcimaLimiteSalvo = salvo.financeiro?.percentualComissaoAcimaLimite;
      atual.financeiro = {
        taxaFixaMensal: Number(salvo.financeiro?.taxaFixaMensal) || 150,
        percentualComissao: percentualSalvo === undefined || percentualSalvo === null || percentualSalvo === "" ? 10 : Number(percentualSalvo),
        limiteComissao:
          limiteComissaoSalvo === undefined || limiteComissaoSalvo === null || limiteComissaoSalvo === ""
            ? ""
            : Number(limiteComissaoSalvo),
        percentualComissaoAcimaLimite:
          percentualComissaoAcimaLimiteSalvo === undefined ||
          percentualComissaoAcimaLimiteSalvo === null ||
          percentualComissaoAcimaLimiteSalvo === ""
            ? ""
            : Number(percentualComissaoAcimaLimiteSalvo),
        limpezaDono: typeof salvo.financeiro?.limpezaDono === "boolean" ? salvo.financeiro.limpezaDono : true,
        lavagemSecagemDono: typeof salvo.financeiro?.lavagemSecagemDono === "boolean" ? salvo.financeiro.lavagemSecagemDono : true
      };
      atual.ativo = typeof salvo.ativo === "boolean" ? salvo.ativo : atual.ativo;
    });
  } catch (erro) {
    console.error("Erro ao carregar custos dos apartamentos:", erro);
  }
}

function normalizarFluxoCaixaSheets(item) {
  const toNumber = (valor, fallback = 0) => {
    if (valor === undefined || valor === null || valor === "") return fallback;
    const numero = Number(String(valor).replace(",", "."));
    return Number.isFinite(numero) ? numero : fallback;
  };

  const toText = (valor) => {
    if (valor === undefined || valor === null) return "";
    return String(valor).trim();
  };

  const id = toText(item?.id);
  if (!id) return null;

  const valor = toNumber(item?.valor, 0);
  const tipoInformado = toText(item?.tipo).toLowerCase();
  const tipo = tipoInformado || (valor >= 0 ? "entrada" : "saida");

  return {
    id,
    data: toText(item?.data),
    dataCompetencia: toText(item?.dataCompetencia),
    dataFechamento: toText(item?.dataFechamento),
    dataRecebimentoPrevisto: toText(item?.dataRecebimentoPrevisto),
    tipo,
    categoria: toText(item?.categoria),
    statusReceita: toText(item?.statusReceita),
    descricao: toText(item?.descricao),
    predio: toText(item?.predio),
    apartamento: toText(item?.apartamento),
    quantidade: toNumber(item?.quantidade, 0),
    valorUnitario: toNumber(item?.valorUnitario, 0),
    valor,
    valorInfo: toNumber(item?.valorInfo, 0),
    origem: toText(item?.origem),
    referenciaLimpeza: toText(item?.referenciaLimpeza),
    referenciaReserva: toText(item?.referenciaReserva),
    criadoEm: toText(item?.criadoEm),
    atualizadoEm: toText(item?.atualizadoEm)
  };
}
async function sincronizarFluxoCaixaDoSheets() {
  try {
    const listaSheets = await listarFluxoCaixaSheets();
    const normalizados = (Array.isArray(listaSheets) ? listaSheets : [])
      .map((item) => normalizarFluxoCaixaSheets(item))
      .filter((item) => item !== null);

    if (!normalizados.length) {
      return false;
    }

    fluxoCaixa = normalizados;
    salvarFluxoCaixaLocalStorage();

    if (financeiroList) {
      renderizarFinanceiro();
    }

    if (relatoriosMesCompetencia && typeof renderizarRelatorios === "function") {
      renderizarRelatorios();
    }

    return true;
  } catch (erro) {
    console.error("Erro ao sincronizar fluxoCaixa do Sheets:", erro);
    return false;
  }
}
async function listarFluxoCaixaSheets() {
  try {
    const resposta = await fetch(`${GOOGLE_SCRIPT_URL}?action=listarFluxoCaixa`);

    if (!resposta.ok) {
      console.error("Erro ao listar fluxoCaixa no Sheets:", resposta.statusText);
      return [];
    }

    const data = await resposta.json();

    if (data?.sucesso === true && Array.isArray(data?.fluxoCaixa)) {
      return data.fluxoCaixa;
    }

    console.error("Erro ao listar fluxoCaixa no Sheets:", data?.erro || "Resposta inválida");
    return [];
  } catch (erro) {
    console.error("Erro ao listar fluxoCaixa no Sheets:", erro);
    return [];
  }
}
async function listarApartamentosSheets() {
  try {
    const resposta = await fetch(`${GOOGLE_SCRIPT_URL}?action=listarApartamentos`);
    const data = await resposta.json();

    if (!resposta.ok) return [];

    if (Array.isArray(data)) return data;
    if (Array.isArray(data?.apartamentos)) return data.apartamentos;
    return [];
  } catch (erro) {
    console.error("Erro ao listar apartamentos no Sheets:", erro);
    return [];
  }
}

function normalizarApartamentoSheets(item) {
  const toNumber = (valor, fallback = 0) => {
    if (valor === undefined || valor === null || valor === "") return fallback;
    const numero = Number(String(valor).replace(",", "."));
    return Number.isFinite(numero) ? numero : fallback;
  };

  const toBool = (valor, fallback = true) => {
    if (typeof valor === "boolean") return valor;
    if (valor === undefined || valor === null || valor === "") return fallback;
    const texto = String(valor).trim().toLowerCase();
    if (["true", "1", "sim", "yes"].includes(texto)) return true;
    if (["false", "0", "nao", "não", "no"].includes(texto)) return false;
    return fallback;
  };

  const predio = String(item?.predio || "").trim();
  const apartamento = String(item?.apartamento || "").trim();
  const limiteComissao = item?.financeiro?.limiteComissao ?? item?.limiteComissao;
  const percentualComissaoAcimaLimite =
    item?.financeiro?.percentualComissaoAcimaLimite ?? item?.percentualComissaoAcimaLimite;

  return {
    id: String(item?.id || `${predio}-${apartamento}`.toLowerCase().replace(/\s+/g, "-")),
    predio,
    apartamento,
    proprietario: String(item?.proprietario || "Ricardo").trim() || "Ricardo",
    faxineiraPadrao: String(item?.faxineiraPadrao || "").trim(),
    custoLimpeza: toNumber(item?.custoLimpeza, 0),
    custoLavagem: toNumber(item?.custoLavagem, 0),
    custoSecagem: toNumber(item?.custoSecagem, 0),
    financeiro: {
      taxaFixaMensal: toNumber(item?.financeiro?.taxaFixaMensal ?? item?.taxaFixaMensal, 150),
      percentualComissao: toNumber(item?.financeiro?.percentualComissao ?? item?.percentualComissao, 10),
      limiteComissao:
        limiteComissao === undefined || limiteComissao === null || limiteComissao === ""
          ? ""
          : toNumber(limiteComissao, 0),
      percentualComissaoAcimaLimite:
        percentualComissaoAcimaLimite === undefined ||
        percentualComissaoAcimaLimite === null ||
        percentualComissaoAcimaLimite === ""
          ? ""
          : toNumber(percentualComissaoAcimaLimite, 0),
      limpezaDono: toBool(item?.financeiro?.limpezaDono ?? item?.limpezaDono, true),
      lavagemSecagemDono: toBool(item?.financeiro?.lavagemSecagemDono ?? item?.lavagemSecagemDono, true)
    },
    ativo: toBool(item?.ativo, true)
  };
}

async function sincronizarApartamentosDoSheets() {
  const listaSheets = await listarApartamentosSheets();
  if (!Array.isArray(listaSheets) || !listaSheets.length) return;

  const normalizados = listaSheets
    .map(normalizarApartamentoSheets)
    .filter((item) => item.predio && item.apartamento);

  if (!normalizados.length) return;

  custosApartamentos.length = 0;
  normalizados.forEach((item) => custosApartamentos.push(item));

  Object.keys(apartamentosPorPredio).forEach((predio) => delete apartamentosPorPredio[predio]);
  normalizados.forEach((item) => {
    if (!apartamentosPorPredio[item.predio]) apartamentosPorPredio[item.predio] = [];
    if (!apartamentosPorPredio[item.predio].includes(item.apartamento)) {
      apartamentosPorPredio[item.predio].push(item.apartamento);
    }
  });

  salvarCustosApartamentosLocalStorage();
  renderizarApartamentos();
}

async function salvarFluxoCaixaSheets(item) {
  if (!item) return false;

  try {
    const resposta = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        action: "salvarFluxoCaixa",
        item
      })
    });

    if (!resposta.ok) {
      console.error("Erro ao salvar fluxoCaixa no Sheets:", resposta.statusText);
      return false;
    }

    const data = await resposta.json().catch(() => ({}));

    if (data?.sucesso === false) {
      console.error("Erro ao salvar fluxoCaixa no Sheets:", data?.erro || "Resposta inválida");
      return false;
    }

    return true;
  } catch (erro) {
    console.error("Erro ao salvar fluxoCaixa no Sheets:", erro);
    return false;
  }
}
async function salvarReservaSheets(reserva) {
  if (!reserva) return false;

  try {
    const resposta = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        action: "salvarReserva",
        reserva
      })
    });

    if (!resposta.ok) {
      console.error("Erro ao salvar reserva no Sheets:", resposta.statusText);
      return false;
    }

    const data = await resposta.json().catch(() => ({}));

    if (data?.sucesso === false) {
      console.error("Erro ao salvar reserva no Sheets:", data?.erro || "Resposta inválida");
      return false;
    }

    return true;
  } catch (erro) {
    console.error("Erro ao salvar reserva no Sheets:", erro);
    return false;
  }
}
async function listarReservasSheets() {
  try {
    const resposta = await fetch(`${GOOGLE_SCRIPT_URL}?action=listarReservas`);

    if (!resposta.ok) {
      console.error("Erro ao listar reservas no Sheets:", resposta.statusText);
      return [];
    }

    const data = await resposta.json();

    if (data?.sucesso === true && Array.isArray(data?.reservas)) {
      return data.reservas;
    }

    console.error("Erro ao listar reservas no Sheets:", data?.erro || "Resposta inválida");
    return [];
  } catch (erro) {
    console.error("Erro ao listar reservas no Sheets:", erro);
    return [];
  }
}

function normalizarReservaSheets(item) {
  const toText = (valor) => {
    if (valor === undefined || valor === null) return "";
    return String(valor).trim();
  };

  const toNumber = (valor, fallback = 0) => {
    if (valor === undefined || valor === null || valor === "") return fallback;
    const numero = Number(String(valor).replace(",", "."));
    return Number.isFinite(numero) ? numero : fallback;
  };

  const codigoReserva = toText(item?.codigoReserva);
  if (!codigoReserva) return null;

  return {
    codigoReserva,
    origem: toText(item?.origem),
    nomeApartamento: toText(item?.nomeApartamento),
    predio: toText(item?.predio),
    apartamento: toText(item?.apartamento),
    hospede: toText(item?.hospede),
    telefone: toText(item?.telefone),
    dataEntrada: toText(item?.dataEntrada),
    dataSaida: toText(item?.dataSaida),
    dataLimpeza: toText(item?.dataLimpeza),
    valorEfetivo: toNumber(item?.valorEfetivo, 0),
    valorInfo: toNumber(item?.valorInfo, 0),
    statusReserva: toText(item?.statusReserva),
    dataReserva: toText(item?.dataReserva),
    criadoEm: toText(item?.criadoEm),
    atualizadoEm: toText(item?.atualizadoEm)
  };
}

async function sincronizarReservasDoSheets() {
  const listaSheets = await listarReservasSheets();
  reservas = (Array.isArray(listaSheets) ? listaSheets : [])
    .map(normalizarReservaSheets)
    .filter((item) => item !== null);

  popularFiltrosReservas();
  renderizarReservas();
}

function popularFiltrosReservas() {
  if (!reservasFiltroOrigem || !reservasFiltroPredio) return;

  const manterOrigem = reservasFiltroOrigem.value || "";
  const manterPredio = reservasFiltroPredio.value || "";
  const origens = [...new Set(reservas.map((item) => item.origem).filter(Boolean))].sort();
  const predios = [...new Set(reservas.map((item) => item.predio).filter(Boolean))].sort();

  reservasFiltroOrigem.innerHTML = '<option value="">Todas as origens</option>';
  origens.forEach((origem) => {
    const option = document.createElement("option");
    option.value = origem;
    option.textContent = origem;
    reservasFiltroOrigem.appendChild(option);
  });

  reservasFiltroPredio.innerHTML = '<option value="">Todos os prédios</option>';
  predios.forEach((predio) => {
    const option = document.createElement("option");
    option.value = predio;
    option.textContent = predio;
    reservasFiltroPredio.appendChild(option);
  });

  reservasFiltroOrigem.value = origens.includes(manterOrigem) ? manterOrigem : "";
  reservasFiltroPredio.value = predios.includes(manterPredio) ? manterPredio : "";
}

function aplicarFiltrosReservas() {
  const busca = String(reservasBuscaCodigo?.value || "").trim().toLowerCase();
  const filtroOrigem = reservasFiltroOrigem?.value || "";
  const filtroPredio = reservasFiltroPredio?.value || "";
  const filtroMesEntrada = reservasFiltroMesEntrada?.value || "";

  return reservas.filter((item) => {
    const codigo = String(item.codigoReserva || "").toLowerCase();
    const hospede = String(item.hospede || "").toLowerCase();
    const mesEntrada = String(item.dataEntrada || "").slice(0, 7);

    if (busca && !codigo.includes(busca) && !hospede.includes(busca)) return false;
    if (filtroOrigem && item.origem !== filtroOrigem) return false;
    if (filtroPredio && item.predio !== filtroPredio) return false;
    if (filtroMesEntrada && mesEntrada !== filtroMesEntrada) return false;

    return true;
  });
}

function renderizarReservas() {
  if (!reservasList) return;

  popularFiltrosReservas();

  const lista = aplicarFiltrosReservas()
    .slice()
    .sort((a, b) => String(b.dataEntrada || "").localeCompare(String(a.dataEntrada || "")));

  if (!lista.length) {
    reservasList.innerHTML = '<p class="empty-reservas">Nenhuma reserva encontrada.</p>';
    return;
  }

  reservasList.innerHTML = lista
    .map((item) => `
      <article class="reserva-item" onclick="abrirModalReserva('${item.codigoReserva}')">
        <div class="reserva-item-header">
          <span data-label="Código">${item.codigoReserva || "-"}</span>
          <span data-label="Origem">${item.origem || "-"}</span>
          <span data-label="Hóspede">${item.hospede || "-"}</span>
          <span data-label="Entrada">${formatarDataFinanceira(item.dataEntrada)}</span>
          <span data-label="Saída">${formatarDataFinanceira(item.dataSaida)}</span>
          <span data-label="Prédio">${item.predio || "-"}</span>
          <span data-label="Apartamento">${item.apartamento || "-"}</span>
          <span data-label="Valor Efetivo" class="reserva-valor">${formatarMoeda(item.valorEfetivo || 0)}</span>
        </div>
      </article>
    `)
    .join("");
}

function abrirModalReserva(codigoReserva) {
  const reserva = reservas.find((item) => item.codigoReserva === codigoReserva);
  if (!reserva || !reservaDetalheModal || !reservaDetalheConteudo) return;

  const campos = [
    ["Código Reserva", reserva.codigoReserva],
    ["Origem", reserva.origem],
    ["Nome Apartamento", reserva.nomeApartamento],
    ["Hóspede", reserva.hospede],
    ["Telefone", reserva.telefone],
    ["Entrada", formatarDataFinanceira(reserva.dataEntrada)],
    ["Saída", formatarDataFinanceira(reserva.dataSaida)],
    ["Data Limpeza", formatarDataFinanceira(reserva.dataLimpeza)],
    ["Prédio", reserva.predio],
    ["Apartamento", reserva.apartamento],
    ["Valor Efetivo", formatarMoeda(reserva.valorEfetivo || 0)],
    ["Valor Informativo", formatarMoeda(reserva.valorInfo || 0)],
    ["Status Reserva", reserva.statusReserva],
    ["Data Reserva", reserva.dataReserva],
    ["Criado Em", reserva.criadoEm],
    ["Atualizado Em", reserva.atualizadoEm]
  ];

  reservaDetalheConteudo.innerHTML = campos
    .map(([label, valor]) => `
      <div class="reserva-detail-item">
        <span>${label}</span>
        <strong>${valor || "-"}</strong>
      </div>
    `)
    .join("");

  reservaDetalheModal.style.display = "flex";
}

function fecharModalReserva() {
  if (!reservaDetalheModal) return;
  reservaDetalheModal.style.display = "none";
}
async function salvarApartamentoSheets(apartamento) {
  if (!apartamento) return;

  try {
    const resposta = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        action: "salvarApartamento",
        apartamento
      })
    });

    const data = await resposta.json().catch(() => ({}));
    if (!resposta.ok || data?.erro) {
      console.error("Erro ao salvar apartamento no Sheets:", data?.erro || resposta.statusText);
    }
  } catch (erro) {
    console.error("Erro ao salvar apartamento no Sheets:", erro);
  }
}

function abrirModalApartamento(id) {
  const apartamento = custosApartamentos.find((item) => item.id === id);

  if (!apartamento || !apartamentoModal) return;

  apartamentoCriandoNovo = false;
  apartamentoEditandoId = id;
  apartamentoEditId.value = apartamento.id;
  apartamentoPredioInput.value = apartamento.predio || "";
  apartamentoNumeroInput.value = apartamento.apartamento || "";
  apartamentoPredioInput.readOnly = true;
  apartamentoNumeroInput.readOnly = true;
  apartamentoProprietarioInput.value = apartamento.proprietario || "";
  apartamentoFaxineiraPadraoInput.value = apartamento.faxineiraPadrao || "";
  apartamentoCustoLimpezaInput.value = apartamento.custoLimpeza ?? 0;
  apartamentoCustoLavagemInput.value = apartamento.custoLavagem ?? 0;
  apartamentoCustoSecagemInput.value = apartamento.custoSecagem ?? 0;
  apartamentoTaxaFixaMensalInput.value = apartamento.financeiro?.taxaFixaMensal ?? 150;
  apartamentoPercentualComissaoInput.value = apartamento.financeiro?.percentualComissao ?? 10;
  apartamentoLimiteComissaoInput.value = apartamento.financeiro?.limiteComissao ?? "";
  apartamentoPercentualComissaoAcimaLimiteInput.value = apartamento.financeiro?.percentualComissaoAcimaLimite ?? "";
  apartamentoLimpezaDonoInput.checked = typeof apartamento.financeiro?.limpezaDono === "boolean" ? apartamento.financeiro.limpezaDono : true;
  apartamentoLavagemSecagemDonoInput.checked = typeof apartamento.financeiro?.lavagemSecagemDono === "boolean" ? apartamento.financeiro.lavagemSecagemDono : true;
  apartamentoStatusInput.value = apartamento.ativo ? "true" : "false";

  apartamentoModal.style.display = "flex";
}

function abrirModalNovoApartamento() {
  if (!apartamentoModal) return;

  apartamentoCriandoNovo = true;
  apartamentoEditandoId = null;
  apartamentoEditId.value = "";
  apartamentoPredioInput.value = "";
  apartamentoNumeroInput.value = "";
  apartamentoPredioInput.readOnly = false;
  apartamentoNumeroInput.readOnly = false;
  apartamentoProprietarioInput.value = "";
  apartamentoFaxineiraPadraoInput.value = "";
  apartamentoCustoLimpezaInput.value = 0;
  apartamentoCustoLavagemInput.value = 0;
  apartamentoCustoSecagemInput.value = 0;
  apartamentoTaxaFixaMensalInput.value = 150;
  apartamentoPercentualComissaoInput.value = 10;
  apartamentoLimiteComissaoInput.value = "";
  apartamentoPercentualComissaoAcimaLimiteInput.value = "";
  apartamentoLimpezaDonoInput.checked = true;
  apartamentoLavagemSecagemDonoInput.checked = true;
  apartamentoStatusInput.value = "true";

  apartamentoModal.style.display = "flex";
}

function fecharModalApartamento() {
  if (!apartamentoModal) return;

  apartamentoModal.style.display = "none";
  apartamentoCriandoNovo = false;
  apartamentoEditandoId = null;
  apartamentoEditId.value = "";
}

function salvarCustosApartamento() {
  const id = apartamentoEditandoId || apartamentoEditId.value;
  let apartamento = custosApartamentos.find((item) => item.id === id);

  const parseValor = (valor) => {
    const normalizado = String(valor || "0").replace(",", ".");
    const numero = Number(normalizado);
    return Number.isNaN(numero) ? 0 : numero;
  };

  const predioInformado = (apartamentoPredioInput.value || "").trim();
  const numeroInformado = (apartamentoNumeroInput.value || "").trim();

  if (!apartamento && apartamentoCriandoNovo) {
    if (!predioInformado || !numeroInformado) {
      mostrarFeedback({
        titulo: "Campos incompletos",
        mensagem: "<p>Preencha prédio e apartamento para cadastrar a unidade.</p>",
        tipo: "warning"
      });
      return;
    }

    const jaExiste = custosApartamentos.some((item) => {
      return item.predio === predioInformado && item.apartamento === numeroInformado;
    });

    if (jaExiste) {
      mostrarFeedback({
        titulo: "Apartamento já existe",
        mensagem: "<p>Já existe um cadastro para este prédio/apartamento.</p>",
        tipo: "warning"
      });
      return;
    }

    apartamento = {
      id: `${predioInformado}-${numeroInformado}`.toLowerCase().replace(/\s+/g, "-"),
      predio: predioInformado,
      apartamento: numeroInformado,
      proprietario: "Ricardo",
      faxineiraPadrao: "",
      custoLimpeza: 0,
      custoLavagem: 0,
      custoSecagem: 0,
      financeiro: {
        taxaFixaMensal: 150,
        percentualComissao: 10,
        limpezaDono: true,
        lavagemSecagemDono: true
      },
      ativo: true
    };
    custosApartamentos.push(apartamento);

    if (!apartamentosPorPredio[predioInformado]) {
      apartamentosPorPredio[predioInformado] = [];
    }
    if (!apartamentosPorPredio[predioInformado].includes(numeroInformado)) {
      apartamentosPorPredio[predioInformado].push(numeroInformado);
    }
  }

  if (!apartamento) return;

  apartamento.proprietario = apartamentoProprietarioInput.value.trim() || "Ricardo";
  apartamento.faxineiraPadrao = apartamentoFaxineiraPadraoInput.value.trim();
  apartamento.custoLimpeza = parseValor(apartamentoCustoLimpezaInput.value);
  apartamento.custoLavagem = parseValor(apartamentoCustoLavagemInput.value);
  apartamento.custoSecagem = parseValor(apartamentoCustoSecagemInput.value);
  const parseValorOpcional = (valor) => {
    if (valor === undefined || valor === null || String(valor).trim() === "") return "";
    return parseValor(valor);
  };
  apartamento.financeiro = {
    taxaFixaMensal: parseValor(apartamentoTaxaFixaMensalInput.value),
    percentualComissao: parseValor(apartamentoPercentualComissaoInput.value),
    limiteComissao: parseValorOpcional(apartamentoLimiteComissaoInput.value),
    percentualComissaoAcimaLimite: parseValorOpcional(apartamentoPercentualComissaoAcimaLimiteInput.value),
    limpezaDono: apartamentoLimpezaDonoInput.checked,
    lavagemSecagemDono: apartamentoLavagemSecagemDonoInput.checked
  };
  apartamento.ativo = apartamentoStatusInput.value === "true";

  salvarCustosApartamentosLocalStorage();
  salvarApartamentoSheets(apartamento);
  fecharModalApartamento();
  renderizarApartamentos();

  mostrarFeedback({
    titulo: "Custos atualizados",
    mensagem: "<p>Os dados do apartamento foram salvos no dispositivo.</p>"
  });
}

function renderizarApartamentos() {
  if (!apartamentosGrid) return;

  apartamentosGrid.innerHTML = "";

  const prediosOrdenados = [...new Set(custosApartamentos.map((item) => item.predio).filter(Boolean))].sort();
  const filtroPredioAtual = apartamentosFiltroPredio?.value || "";

  if (apartamentosFiltroPredio) {
    apartamentosFiltroPredio.innerHTML = '<option value="">Todos os prédios</option>';
    prediosOrdenados.forEach((predio) => {
      const option = document.createElement("option");
      option.value = predio;
      option.textContent = predio;
      apartamentosFiltroPredio.appendChild(option);
    });
    apartamentosFiltroPredio.value = prediosOrdenados.includes(filtroPredioAtual) ? filtroPredioAtual : "";
  }

  const filtroPredio = apartamentosFiltroPredio?.value || "";
  const apartamentosFiltrados = filtroPredio
    ? custosApartamentos.filter((item) => item.predio === filtroPredio)
    : custosApartamentos;
  const prediosFiltrados = [...new Set(apartamentosFiltrados.map((item) => item.predio).filter(Boolean))];

  if (totalPredios) totalPredios.textContent = prediosFiltrados.length;
  if (totalApartamentos) totalApartamentos.textContent = apartamentosFiltrados.length;
  if (totalApartamentosAtivos) {
    totalApartamentosAtivos.textContent = apartamentosFiltrados.filter((item) => item.ativo).length;
  }

  Object.entries(apartamentosPorPredio).forEach(([predio, apartamentosPredio]) => {
    if (filtroPredio && predio !== filtroPredio) return;

    const card = document.createElement("article");
    card.className = "apartamento-building-card";

    const lista = apartamentosPredio
      .map((apto) => {
        const dados = custosApartamentos.find(
          (item) => item.predio === predio && item.apartamento === apto
        );

        if (!dados) return "";

        const financeiro = dados.financeiro || {};
        const taxaFixaMensal = Number.isFinite(Number(financeiro.taxaFixaMensal))
          ? Number(financeiro.taxaFixaMensal)
          : 150;
        const percentualComissao = Number.isFinite(Number(financeiro.percentualComissao))
          ? Number(financeiro.percentualComissao)
          : 10;
        const limpezaDono = financeiro.limpezaDono !== false;
        const lavagemSecagemDono = financeiro.lavagemSecagemDono !== false;

        return `
          <li class="apartamento-unit-card">
            <strong>${dados.apartamento}</strong>
            <span>Proprietário: ${dados.proprietario}</span>
            <span>Faxineira padrão: ${dados.faxineiraPadrao || "Não definida"}</span>
            <div class="apartamento-costs">
              <span>Limpeza: ${formatarMoeda(dados.custoLimpeza)}</span>
              <span>Lavagem: ${formatarMoeda(dados.custoLavagem)}</span>
              <span>Secagem: ${formatarMoeda(dados.custoSecagem)}</span>
            </div>
            <div class="apartamento-financeiro-resumo">
              <span>Taxa fixa mensal ADM: ${formatarMoeda(taxaFixaMensal)}</span>
              <span>Comissão sobre faturamento: ${percentualComissao}%</span>
              <span>Limpeza por conta do Dono: ${limpezaDono ? "Sim" : "Não"}</span>
              <span>Lavagem/Secagem por conta do Dono: ${lavagemSecagemDono ? "Sim" : "Não"}</span>
            </div>
            <span class="apartamento-status ${dados.ativo ? "ativo" : "inativo"}">
              ${dados.ativo ? "Ativo" : "Inativo"}
            </span>
            <button class="apartamento-edit-btn" onclick="abrirModalApartamento('${dados.id}')">Editar custos</button>
          </li>
        `;
      })
      .join("");

    card.innerHTML = `
      <div class="apartamento-building-header">
        <h3>${predio}</h3>
        <p>${apartamentosPredio.length} apartamento(s)</p>
      </div>
      <ul class="apartamento-unit-list">${lista}</ul>
    `;

    apartamentosGrid.appendChild(card);
  });
}

function renderizarProprietarios() {
  if (!proprietariosGrid || !proprietarioFiltroSelect) return;

  const proprietarios = [...new Set(custosApartamentos.map((item) => item.proprietario || "Não informado"))].sort();
  const filtroAtual = proprietarioFiltroSelect.value || "";

  proprietarioFiltroSelect.innerHTML = '<option value="">Todos os proprietários</option>';
  proprietarios.forEach((nome) => {
    const option = document.createElement("option");
    option.value = nome;
    option.textContent = nome;
    proprietarioFiltroSelect.appendChild(option);
  });

  proprietarioFiltroSelect.value = proprietarios.includes(filtroAtual) ? filtroAtual : "";

  const filtroProprietario = proprietarioFiltroSelect.value || "";
  const unidades = custosApartamentos.filter((item) => {
    if (!item.ativo) return false;
    if (!filtroProprietario) return true;
    return (item.proprietario || "Não informado") === filtroProprietario;
  });

  proprietariosGrid.innerHTML = "";

  if (!unidades.length) {
    proprietariosGrid.innerHTML = '<article class="proprietario-card"><p>Nenhuma unidade encontrada para o filtro selecionado.</p></article>';
    return;
  }

  unidades.forEach((item) => {
    const resultadoUnidade = fluxoCaixa
      .filter((lancamento) => lancamento.predio === item.predio && lancamento.apartamento === item.apartamento)
      .reduce((acc, lancamento) => acc + (Number(lancamento.valor) || 0), 0);

    const card = document.createElement("article");
    card.className = "proprietario-card";
    card.innerHTML = `
      <strong>${item.proprietario || "Não informado"}</strong>
      <span>Prédio: ${item.predio}</span>
      <span>Apartamento: ${item.apartamento}</span>
      <span>Custo limpeza: ${formatarMoeda(item.custoLimpeza)}</span>
      <span>Custo lavagem: ${formatarMoeda(item.custoLavagem)}</span>
      <span>Custo secagem: ${formatarMoeda(item.custoSecagem)}</span>
      <span class="proprietario-resultado">Resultado financeiro: ${formatarMoeda(resultadoUnidade)}</span>
    `;

    proprietariosGrid.appendChild(card);
  });
}

function alternarPainelRelatorios(tab) {
  const isShortstay = tab === "shortstay";
  relatorioTabAtual = isShortstay ? "shortstay" : "proprietario";

  if (relatoriosTabShortstayBtn) relatoriosTabShortstayBtn.classList.toggle("active", isShortstay);
  if (relatoriosTabProprietarioBtn) relatoriosTabProprietarioBtn.classList.toggle("active", !isShortstay);
  if (relatoriosPanelShortstay) relatoriosPanelShortstay.classList.toggle("active", isShortstay);
  if (relatoriosPanelProprietario) relatoriosPanelProprietario.classList.toggle("active", !isShortstay);
  atualizarEstadoMenu("relatoriosPage");
  atualizarCardsPainelShortstay();
  atualizarCardsPainelProprietario();
}

function somarLancamentosPainelShortstayMes(mesCompetencia) {
  const mesAlvo = /^\d{4}-\d{2}$/.test(String(mesCompetencia || "")) ? mesCompetencia : String(hojeISO()).slice(0, 7);

  const somarPorCategoria = (categoria) => {
    return fluxoCaixa
      .filter((lancamento) => {
        const mesLancamento = String(lancamento.dataCompetencia || lancamento.mesCompetencia || lancamento.data || "").slice(0, 7);
        const categoriaNormalizada = String(lancamento.categoria || "").toLowerCase();
        const origemNormalizada = String(lancamento.origem || "").toLowerCase();
        return (
          lancamento.tipo === "entrada" &&
          Number(lancamento.valor) > 0 &&
          mesLancamento === mesAlvo &&
          (categoriaNormalizada === categoria || origemNormalizada === categoria)
        );
      })
      .reduce((acc, lancamento) => acc + (Number(lancamento.valor) || 0), 0);
  };

  const taxasFixas = somarPorCategoria("taxa_fixa_administrativa");
  const comissoes = somarPorCategoria("comissao_administrativa");

  return {
    taxasFixas,
    comissoes,
    resultadoShortstay: taxasFixas + comissoes
  };
}

function atualizarCardsPainelShortstay() {
  if (!relatorioShortstayTaxasFixas || !relatorioShortstayComissoes || !relatorioShortstayResultado || !relatorioShortstayCustosOperacionais) return;

  const mesSelecionado = relatoriosMesCompetencia?.value || "";
  const mesBase = /^\d{4}-\d{2}$/.test(mesSelecionado) ? mesSelecionado : String(hojeISO()).slice(0, 7);
  const resumo = somarLancamentosPainelShortstayMes(mesBase);

  relatorioShortstayTaxasFixas.textContent = formatarMoeda(resumo.taxasFixas);
  relatorioShortstayComissoes.textContent = formatarMoeda(resumo.comissoes);
  relatorioShortstayCustosOperacionais.textContent = "--";
  relatorioShortstayResultado.textContent = formatarMoeda(resumo.resultadoShortstay);
}

function somarLancamentosPainelProprietarioMes(mesCompetencia) {
  const mesAlvo = /^\d{4}-\d{2}$/.test(String(mesCompetencia || "")) ? mesCompetencia : String(hojeISO()).slice(0, 7);
  const unidadesFiltro = obterUnidadesFiltroRelatorioProprietario();

  if (!unidadesFiltro) {
    return {
      receitaBruta: 0,
      taxaAdm: 0,
      comissao: 0,
      custosProprietario: 0,
      repasseLiquido: 0
    };
  }

  const somaReceitaBruta = fluxoCaixa
    .filter((lancamento) => {
      const mesLancamento = String(lancamento.dataCompetencia || lancamento.mesCompetencia || lancamento.data || "").slice(0, 7);
      const unidadeChave = `${lancamento.predio}|||${lancamento.apartamento}`;
      return (
        ehReceitaLocacao(lancamento) &&
        mesLancamento === mesAlvo &&
        unidadesFiltro.has(unidadeChave)
      );
    })
    .reduce((acc, lancamento) => acc + (Number(lancamento.valor) || 0), 0);

  const somarPorCategoria = (categoria) => {
    return fluxoCaixa
      .filter((lancamento) => {
        const mesLancamento = String(lancamento.dataCompetencia || lancamento.mesCompetencia || lancamento.data || "").slice(0, 7);
        const categoriaNormalizada = String(lancamento.categoria || "").toLowerCase();
        const origemNormalizada = String(lancamento.origem || "").toLowerCase();
        const unidadeChave = `${lancamento.predio}|||${lancamento.apartamento}`;
        return (
          lancamento.tipo === "entrada" &&
          Number(lancamento.valor) > 0 &&
          mesLancamento === mesAlvo &&
          unidadesFiltro.has(unidadeChave) &&
          (categoriaNormalizada === categoria || origemNormalizada === categoria)
        );
      })
      .reduce((acc, lancamento) => acc + (Number(lancamento.valor) || 0), 0);
  };

  const taxaAdm = somarPorCategoria("taxa_fixa_administrativa");
  const comissao = somarPorCategoria("comissao_administrativa");
  const custosProprietario = calcularCustosProprietarioMes(mesAlvo, unidadesFiltro);

  return {
    receitaBruta: somaReceitaBruta,
    taxaAdm,
    comissao,
    custosProprietario,
    repasseLiquido: somaReceitaBruta - taxaAdm - comissao - custosProprietario
  };
}

function obterUnidadesFiltroRelatorioProprietario() {
  const proprietarioSelecionado = relatorioProprietarioFiltroSelect?.value || "";
  const apartamentoSelecionado = relatorioApartamentoFiltroSelect?.value || "";

  if (!proprietarioSelecionado) return null;

  const unidades = custosApartamentos
    .filter((item) => item.ativo)
    .filter((item) => (item.proprietario || "Não informado") === proprietarioSelecionado)
    .filter((item) => {
      if (!apartamentoSelecionado) return true;
      return `${item.predio} - ${item.apartamento}` === apartamentoSelecionado;
    })
    .map((item) => `${item.predio}|||${item.apartamento}`);

  return new Set(unidades);
}

function calcularCustosProprietarioMes(mesCompetencia, unidadesFiltro) {
  const mesAlvo = /^\d{4}-\d{2}$/.test(String(mesCompetencia || "")) ? mesCompetencia : String(hojeISO()).slice(0, 7);
  const unidadesPermitidas = unidadesFiltro || obterUnidadesFiltroRelatorioProprietario();
  if (!unidadesPermitidas) return 0;

  const normalizarCategoria = (texto) => {
    return String(texto || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "_")
      .trim();
  };

  const categoriasLimpeza = ["limpeza"];
  const categoriasLavagemSecagem = ["lavagem", "secagem", "lavagem_secagem"];
  const categoriasSempreDono = ["manutencao", "reposicao", "quebra", "manchas", "mancha"];

  return fluxoCaixa
    .filter((lancamento) => {
      const mesLancamento = String(lancamento.dataCompetencia || lancamento.mesCompetencia || lancamento.data || "").slice(0, 7);
      if (mesLancamento !== mesAlvo) return false;
      if (lancamento.tipo !== "saida") return false;
      if (!unidadesPermitidas.has(`${lancamento.predio}|||${lancamento.apartamento}`)) return false;

      const categoria = normalizarCategoria(lancamento.categoria);
      const origem = normalizarCategoria(lancamento.origem);
      const categoriaBase = categoria || origem;

      if (!categoriaBase) return false;

      const apartamento = custosApartamentos.find((item) => {
        return item.predio === lancamento.predio && item.apartamento === lancamento.apartamento;
      });

      const limpezaDono = typeof apartamento?.financeiro?.limpezaDono === "boolean" ? apartamento.financeiro.limpezaDono : true;
      const lavagemSecagemDono = typeof apartamento?.financeiro?.lavagemSecagemDono === "boolean" ? apartamento.financeiro.lavagemSecagemDono : true;

      if (categoriasLimpeza.includes(categoriaBase)) return limpezaDono;
      if (categoriasLavagemSecagem.includes(categoriaBase)) return lavagemSecagemDono;
      if (categoriasSempreDono.includes(categoriaBase)) return true;

      return false;
    })
    .reduce((acc, lancamento) => acc + Math.abs(Number(lancamento.valor) || 0), 0);
}

function filtrarCustosProprietarioDetalhamento(mesCompetencia, unidadesFiltro) {
  const mesAlvo = /^\d{4}-\d{2}$/.test(String(mesCompetencia || "")) ? mesCompetencia : String(hojeISO()).slice(0, 7);
  const unidadesPermitidas = unidadesFiltro || obterUnidadesFiltroRelatorioProprietario();
  if (!unidadesPermitidas) return [];

  const normalizarCategoria = (texto) => {
    return String(texto || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "_")
      .trim();
  };

  const categoriasLimpeza = ["limpeza"];
  const categoriasLavagemSecagem = ["lavagem", "secagem", "lavagem_secagem"];
  const categoriasSempreDono = ["manutencao", "reposicao", "quebra", "manchas", "mancha"];

  return fluxoCaixa.filter((lancamento) => {
    const mesLancamento = String(lancamento.dataCompetencia || lancamento.mesCompetencia || lancamento.data || "").slice(0, 7);
    if (mesLancamento !== mesAlvo) return false;
    if (lancamento.tipo !== "saida") return false;
    if (!unidadesPermitidas.has(`${lancamento.predio}|||${lancamento.apartamento}`)) return false;

    const categoria = normalizarCategoria(lancamento.categoria);
    const origem = normalizarCategoria(lancamento.origem);
    const categoriaBase = categoria || origem;
    if (!categoriaBase) return false;

    const apartamento = custosApartamentos.find((item) => {
      return item.predio === lancamento.predio && item.apartamento === lancamento.apartamento;
    });

    const limpezaDono = typeof apartamento?.financeiro?.limpezaDono === "boolean" ? apartamento.financeiro.limpezaDono : true;
    const lavagemSecagemDono = typeof apartamento?.financeiro?.lavagemSecagemDono === "boolean" ? apartamento.financeiro.lavagemSecagemDono : true;

    if (categoriasLimpeza.includes(categoriaBase)) return limpezaDono;
    if (categoriasLavagemSecagem.includes(categoriaBase)) return lavagemSecagemDono;
    if (categoriasSempreDono.includes(categoriaBase)) return true;

    return false;
  });
}

function renderizarListaDetalhamentoRelatorio(container, lancamentos) {
  if (!container) return;

  if (!lancamentos.length) {
    container.innerHTML = '<p class="relatorio-detalhamento-empty">Nenhum lançamento encontrado.</p>';
    return;
  }

  const itensOrdenados = lancamentos
    .slice()
    .sort((a, b) => String(a.data || "").localeCompare(String(b.data || "")));

  container.innerHTML = `
    <div class="relatorio-detalhamento-header">
      <span>Data</span>
      <span>Categoria</span>
      <span>Descrição</span>
      <span>Prédio</span>
      <span>Apartamento</span>
      <span>Valor</span>
    </div>
    <div class="relatorio-detalhamento-body">
      ${itensOrdenados
        .map((item) => `
          <article class="relatorio-detalhamento-item">
            <span data-label="Data">${formatarDataFinanceira(item.data)}</span>
            <span data-label="Categoria">${formatarCategoriaVisual(item.categoria || item.origem)}</span>
            <span data-label="Descrição">${formatarDescricaoFinanceiroVisual(item.descricao)}</span>
            <span data-label="Prédio">${item.predio || "-"}</span>
            <span data-label="Apartamento">${item.apartamento || "-"}</span>
            <span data-label="Valor" class="relatorio-detalhamento-valor">${formatarMoeda(Math.abs(Number(item.valor) || 0))}</span>
          </article>
        `)
        .join("")}
    </div>
  `;
}

function atualizarDetalhamentoPainelProprietario() {
  if (!relatorioDetalheReceitas || !relatorioDetalheCustos || !relatorioDetalheTaxaAdm || !relatorioDetalheComissao) return;

  const mesSelecionado = relatoriosMesCompetencia?.value || "";
  const mesBase = /^\d{4}-\d{2}$/.test(mesSelecionado) ? mesSelecionado : String(hojeISO()).slice(0, 7);
  const unidadesFiltro = obterUnidadesFiltroRelatorioProprietario();

  if (!unidadesFiltro) {
    const vazio = [];
    renderizarListaDetalhamentoRelatorio(relatorioDetalheReceitas, vazio);
    renderizarListaDetalhamentoRelatorio(relatorioDetalheCustos, vazio);
    renderizarListaDetalhamentoRelatorio(relatorioDetalheTaxaAdm, vazio);
    renderizarListaDetalhamentoRelatorio(relatorioDetalheComissao, vazio);
    return;
  }

  const lancamentosBase = fluxoCaixa.filter((lancamento) => {
    const mesLancamento = String(lancamento.dataCompetencia || lancamento.mesCompetencia || lancamento.data || "").slice(0, 7);
    const unidadeChave = `${lancamento.predio}|||${lancamento.apartamento}`;
    return mesLancamento === mesBase && unidadesFiltro.has(unidadeChave);
  });

  const receitas = lancamentosBase.filter((lancamento) => ehReceitaLocacao(lancamento));
  const taxaAdm = lancamentosBase.filter((lancamento) => {
    const categoriaNormalizada = String(lancamento.categoria || "").toLowerCase();
    const origemNormalizada = String(lancamento.origem || "").toLowerCase();
    return lancamento.tipo === "entrada" && Number(lancamento.valor) > 0 && (categoriaNormalizada === "taxa_fixa_administrativa" || origemNormalizada === "taxa_fixa_administrativa");
  });
  const comissao = lancamentosBase.filter((lancamento) => {
    const categoriaNormalizada = String(lancamento.categoria || "").toLowerCase();
    const origemNormalizada = String(lancamento.origem || "").toLowerCase();
    return lancamento.tipo === "entrada" && Number(lancamento.valor) > 0 && (categoriaNormalizada === "comissao_administrativa" || origemNormalizada === "comissao_administrativa");
  });
  const custos = filtrarCustosProprietarioDetalhamento(mesBase, unidadesFiltro);

  renderizarListaDetalhamentoRelatorio(relatorioDetalheReceitas, receitas);
  renderizarListaDetalhamentoRelatorio(relatorioDetalheCustos, custos);
  renderizarListaDetalhamentoRelatorio(relatorioDetalheTaxaAdm, taxaAdm);
  renderizarListaDetalhamentoRelatorio(relatorioDetalheComissao, comissao);
}

function atualizarCardsPainelProprietario() {
  if (!relatorioProprietarioReceitaBruta || !relatorioProprietarioTaxaAdm || !relatorioProprietarioComissao || !relatorioProprietarioRepasseLiquido || !relatorioProprietarioCustos) return;

  const mesSelecionado = relatoriosMesCompetencia?.value || "";
  const mesBase = /^\d{4}-\d{2}$/.test(mesSelecionado) ? mesSelecionado : String(hojeISO()).slice(0, 7);
  const resumo = somarLancamentosPainelProprietarioMes(mesBase);

  relatorioProprietarioReceitaBruta.textContent = formatarMoeda(resumo.receitaBruta);
  relatorioProprietarioTaxaAdm.textContent = formatarMoeda(resumo.taxaAdm);
  relatorioProprietarioComissao.textContent = formatarMoeda(resumo.comissao);
  relatorioProprietarioCustos.textContent = formatarMoeda(resumo.custosProprietario);
  relatorioProprietarioRepasseLiquido.textContent = formatarMoeda(resumo.repasseLiquido);
  atualizarDetalhamentoPainelProprietario();
}

function atualizarFiltroApartamentoRelatorioProprietario() {
  if (!relatorioApartamentoFiltroSelect || !relatorioProprietarioFiltroSelect) return;

  const proprietarioSelecionado = relatorioProprietarioFiltroSelect.value || "";
  const manterApartamento = relatorioApartamentoFiltroSelect.value || "";

  const apartamentos = custosApartamentos
    .filter((item) => item.ativo)
    .filter((item) => {
      if (!proprietarioSelecionado) return false;
      return (item.proprietario || "Não informado") === proprietarioSelecionado;
    })
    .map((item) => `${item.predio} - ${item.apartamento}`);

  const apartamentosUnicos = [...new Set(apartamentos)].sort();

  relatorioApartamentoFiltroSelect.innerHTML = proprietarioSelecionado
    ? '<option value="">Todos os apartamentos</option>'
    : '<option value="">Selecione um proprietário</option>';
  apartamentosUnicos.forEach((nome) => {
    const option = document.createElement("option");
    option.value = nome;
    option.textContent = nome;
    relatorioApartamentoFiltroSelect.appendChild(option);
  });

  relatorioApartamentoFiltroSelect.value = apartamentosUnicos.includes(manterApartamento) ? manterApartamento : "";
}

function renderizarFiltrosPainelProprietario() {
  if (!relatorioProprietarioFiltroSelect || !relatorioApartamentoFiltroSelect) return;

  const manterProprietario = relatorioProprietarioFiltroSelect.value || "";
  const proprietarios = [...new Set(
    custosApartamentos
      .filter((item) => item.ativo)
      .map((item) => item.proprietario || "Não informado")
  )].sort();

  relatorioProprietarioFiltroSelect.innerHTML = "";

  if (!proprietarios.length) {
    relatorioProprietarioFiltroSelect.innerHTML = '<option value="">Nenhum proprietário cadastrado</option>';
    relatorioApartamentoFiltroSelect.innerHTML = '<option value="">Todos os apartamentos</option>';
    return;
  }

  relatorioProprietarioFiltroSelect.innerHTML = '<option value="">Selecione o proprietário</option>';
  proprietarios.forEach((nome) => {
    const option = document.createElement("option");
    option.value = nome;
    option.textContent = nome;
    relatorioProprietarioFiltroSelect.appendChild(option);
  });

  relatorioProprietarioFiltroSelect.value = proprietarios.includes(manterProprietario) ? manterProprietario : "";
  atualizarFiltroApartamentoRelatorioProprietario();
}

function renderizarRelatoriosEstrutura() {
  if (!relatoriosMesCompetencia) return;

  const manterValor = relatoriosMesCompetencia.value;
  const meses = [...new Set(fluxoCaixa.map((item) => String(item.data || "").slice(0, 7)).filter(Boolean))].sort();

  relatoriosMesCompetencia.innerHTML = '<option value="">Competência (mês)</option>';
  meses.forEach((mes) => {
    const option = document.createElement("option");
    option.value = mes;
    option.textContent = mes;
    relatoriosMesCompetencia.appendChild(option);
  });

  relatoriosMesCompetencia.value = meses.includes(manterValor) ? manterValor : "";
  renderizarFiltrosPainelProprietario();
  alternarPainelRelatorios(relatorioTabAtual);
  atualizarCardsPainelShortstay();
  atualizarCardsPainelProprietario();
}

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

function normalizarDataAirbnb(data) {
  const texto = String(data || "").trim();
  const match = texto.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);

  if (!match) return texto;

  const mes = match[1].padStart(2, "0");
  const dia = match[2].padStart(2, "0");
  const ano = match[3];

  return `${ano}-${mes}-${dia}`;
}

function normalizarDataBooking(data) {
  const texto = String(data || "").trim();

  const normalizarTextoChave = (valor) => {
    return String(valor || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, " ");
  };

  const meses = {
    janeiro: "01",
    fevereiro: "02",
    marco: "03",
    abril: "04",
    maio: "05",
    junho: "06",
    julho: "07",
    agosto: "08",
    setembro: "09",
    outubro: "10",
    novembro: "11",
    dezembro: "12"
  };

  const match = texto.match(/^(\d{1,2})\s+de\s+([a-zç]+)\s+de\s+(\d{4})$/i);
  if (!match) return texto;

  const dia = match[1].padStart(2, "0");
  const mesTexto = normalizarTextoChave(match[2]);
  const mes = meses[mesTexto];
  const ano = match[3];

  if (!mes) return texto;

  return `${ano}-${mes}-${dia}`;
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

  if (origem === "airbnb") {
    const dataAirbnb = normalizarDataAirbnb(texto);
    if (/^\d{4}-\d{2}-\d{2}$/.test(dataAirbnb)) return dataAirbnb;
  }

  if (origem === "booking") {
    const dataBooking = normalizarDataBooking(texto);
    if (/^\d{4}-\d{2}-\d{2}$/.test(dataBooking)) return dataBooking;
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

function normalizarHoraSistema(valor) {
  if (!valor) return "12:00";

  const texto = String(valor).trim();

  const matchHora = texto.match(/^(\d{1,2}):(\d{2})$/);
  if (matchHora) {
    return `${matchHora[1].padStart(2, "0")}:${matchHora[2]}`;
  }

  if (texto.includes("T")) {
    const iso = texto.match(/T(\d{2}):(\d{2})/);
    if (iso) {
      return `${iso[1]}:${iso[2]}`;
    }
  }

  const horaNum = parseInt(texto, 10);
  if (!Number.isNaN(horaNum) && horaNum >= 0 && horaNum < 24) {
    return `${String(horaNum).padStart(2, "0")}:00`;
  }

  return "12:00";
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

function correspondeAoPeriodo(dataISO, periodo) {
  const dataNormalizada = normalizarDataSistema(dataISO);

  if (!dataNormalizada || periodo === "all" || periodo === "custom") {
    return true;
  }

  if (periodo === "today") {
    return dataNormalizada === hojeISO();
  }

  if (periodo === "tomorrow") {
    return dataNormalizada === amanhaISO();
  }

  if (periodo === "week") {
    return estaNaSemana(dataNormalizada);
  }

  if (periodo === "month") {
    return estaNoMes(dataNormalizada);
  }

  return true;
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

function dataHistoricoEmPeriodo(dataISO, periodo) {
  const dataNormalizada = normalizarDataSistema(dataISO);

  if (!dataNormalizada || periodo === "all") {
    return true;
  }

  const hoje = hojeISO();

  if (periodo === "today") {
    return dataNormalizada === hoje;
  }

  if (periodo === "7d") {
    const inicio = new Date(`${hoje}T00:00:00`);
    inicio.setDate(inicio.getDate() - 6);

    return dataNormalizada >= dataLocalISO(inicio) && dataNormalizada <= hoje;
  }

  if (periodo === "current") {
    return estaNoMes(dataNormalizada);
  }

  if (periodo === "previous") {
    const hojeData = new Date(`${hoje}T00:00:00`);
    const mesAnterior = new Date(hojeData.getFullYear(), hojeData.getMonth() - 1, 1);
    const inicio = dataLocalISO(mesAnterior);
    const fim = dataLocalISO(new Date(hojeData.getFullYear(), hojeData.getMonth(), 0));

    return dataNormalizada >= inicio && dataNormalizada <= fim;
  }

  return true;
}

function extrairHoraMinuto(hora) {
  if (!hora) {
    return { horas: 12, minutos: 0 };
  }

  const texto = String(hora).trim();

  if (texto.includes("T")) {
    const data = new Date(texto);

    if (!Number.isNaN(data.getTime())) {
      return {
        horas: data.getHours(),
        minutos: data.getMinutes()
      };
    }
  }

  const partes = texto.match(/^(\d{1,2})(?::(\d{1,2}))?h?$/i);

  if (partes) {
    return {
      horas: Number(partes[1]),
      minutos: Number(partes[2] || 0)
    };
  }

  return { horas: 12, minutos: 0 };
}

function formatarHora(hora) {
  const { horas, minutos } = extrairHoraMinuto(hora);

  return minutos === 0
    ? `${horas}h`
    : `${horas}h${String(minutos).padStart(2, "0")}`;
}

function normalizarHoraOrdenacao(hora) {
  const { horas, minutos } = extrairHoraMinuto(hora);

  return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}`;
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
    limpezas = JSON.parse(salvas).map((limpeza) => ({
      ...limpeza,
      data: normalizarDataSistema(limpeza.data, limpeza.origem),
      hora: normalizarHora(limpeza.hora)
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
    📅 ${formatarData(limpeza.data)} - ${formatarHora(limpeza.hora)}
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
        ${limpeza.apartamento} • ${limpeza.qtdHospedes || 2} hósp.
      </div>
    </div>

    <div class="card-body">
      <div class="card-info">
        <div class="card-person">
          ${limpeza.faxineira}
        </div>
        <div class="card-reserva">
          Reserva: ${limpeza.referenciaReserva || "-"}
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
  aplicarFiltrosHistorico();
}

function atualizarKPIs() {

  const hoje = hojeISO();

  let cardsFiltrados = [...limpezas];

  const responsavelForcado = obterResponsavelFixoUsuario();
  const responsavel = responsavelForcado || filterResponsavel.value;
  const data = filterData ? filterData.value : "";
  const predio = filterPredio.value;

  if (responsavel) {
    cardsFiltrados = cardsFiltrados.filter((limpeza) => {
      return limpeza.faxineira === responsavel;
    });
  }

  if (data) {
    cardsFiltrados = cardsFiltrados.filter((limpeza) => {
      return mesmaData(limpeza.data, data);
    });
  }

  if (predio) {
    cardsFiltrados = cardsFiltrados.filter((limpeza) => {
      return limpeza.predio === predio;
    });
  }

  if (periodoAtual !== "custom") {
    cardsFiltrados = cardsFiltrados.filter((limpeza) => {
      return correspondeAoPeriodo(limpeza.data, periodoAtual);
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

  const responsavelForcado = obterResponsavelFixoUsuario();
  const responsavel = responsavelForcado || filterResponsavel.value;
  const data = filterData ? filterData.value : "";
  const predio = filterPredio.value;

  cards.forEach((card) => {
    const cardResponsavel = card.dataset.responsavel;
    const cardData = card.dataset.data;
    const cardPredio = card.dataset.predio;

    let mostrar = true;

    if (responsavel && responsavel !== cardResponsavel) {
      mostrar = false;
    }

    if (data && !mesmaData(cardData, data)) {
      mostrar = false;
    }

    if (predio && predio !== cardPredio) {
      mostrar = false;
    }

    if (!correspondeAoPeriodo(cardData, periodoAtual)) {
      mostrar = false;
    }

    card.style.display = mostrar ? "block" : "none";
  });
  atualizarKPIs();
}

function aplicarFiltroHistorico(config) {
  const cards = document.querySelectorAll(`#${config.containerId} .card`);
  const responsavelForcado = obterResponsavelFixoUsuario();
  const responsavel = responsavelForcado || config.responsavelSelect?.value || "";
  const predio = config.predioSelect?.value || "";
  const periodo = periodosHistorico[config.tipo];

  cards.forEach((card) => {
    const cardResponsavel = card.dataset.responsavel;
    const cardPredio = card.dataset.predio;
    const cardData = card.dataset.data;

    let mostrar = true;

    if (responsavel && responsavel !== cardResponsavel) {
      mostrar = false;
    }

    if (predio && predio !== cardPredio) {
      mostrar = false;
    }

    if (!dataHistoricoEmPeriodo(cardData, periodo)) {
      mostrar = false;
    }

    card.style.display = mostrar ? "block" : "none";
  });
}

function aplicarFiltrosHistorico() {
  aplicarFiltroHistorico({
    tipo: "concluidas",
    containerId: "completedCardsContainer",
    responsavelSelect: filterConcluidasResponsavel,
    predioSelect: filterConcluidasPredio
  });

  aplicarFiltroHistorico({
    tipo: "canceladas",
    containerId: "canceledCardsContainer",
    responsavelSelect: filterCanceladasResponsavel,
    predioSelect: filterCanceladasPredio
  });
}

/* MENU */

const operacaoMenu =
  document.getElementById("operacaoMenu");
const gestaoMenu =
  document.getElementById("gestaoMenu");
const relatoriosMenu =
  document.getElementById("relatoriosMenu");

const operacaoTitle =
  operacaoMenu.querySelector(".menu-group-title");
const gestaoTitle =
  gestaoMenu?.querySelector(".menu-group-title");
const relatoriosTitle =
  relatoriosMenu?.querySelector(".menu-group-title");

operacaoTitle.addEventListener("click", () => {
  resetarMenuVisual();
  operacaoMenu.classList.toggle("closed");
  operacaoMenu.classList.toggle("open");
});

if (gestaoTitle) {
  gestaoTitle.addEventListener("click", () => {
    resetarMenuVisual();
    gestaoMenu.classList.toggle("closed");
    gestaoMenu.classList.toggle("open");
  });
}

if (relatoriosTitle) {
  relatoriosTitle.addEventListener("click", () => {
    resetarMenuVisual();
    relatoriosMenu.classList.toggle("closed");
    relatoriosMenu.classList.toggle("open");
  });
}

function resetarMenuVisual() {
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.classList.remove("active");
  });

  document.querySelectorAll(".menu-group").forEach((group) => {
    group.classList.remove("active-group");
  });
}

function fecharTodosMenus() {
  document.querySelectorAll(".menu-group").forEach((group) => {
    group.classList.remove("open");
    group.classList.add("closed");
  });
}

function atualizarEstadoMenu(pageId) {
  document.querySelectorAll(".menu-item").forEach((item) => {
    const itemPage = item.dataset.page;
    const itemRelatorioTab = item.dataset.relatorioTab || "";
    const ativoRelatorio = pageId === "relatoriosPage" && itemPage === "relatoriosPage" && itemRelatorioTab === relatorioTabAtual;
    const ativoComum = pageId !== "relatoriosPage" && itemPage === pageId;
    item.classList.toggle("active", ativoRelatorio || ativoComum);
  });

  document.querySelectorAll(".menu-group").forEach((group) => {
    group.classList.remove("active-group");
  });

  const operacaoPages = ["ativasPage", "concluidasPage", "canceladasPage"];
  const gestaoPages = ["adminPage", "apartamentosPage", "financeiroPage", "reservasPage", "proprietariosPage"];
  const relatoriosPages = ["relatoriosPage"];

  if (operacaoPages.includes(pageId)) {
    operacaoMenu.classList.add("active-group");
  }

  if (gestaoMenu && gestaoPages.includes(pageId)) {
    gestaoMenu.classList.add("active-group");
  }

  if (relatoriosMenu && relatoriosPages.includes(pageId)) {
    relatoriosMenu.classList.add("active-group");
  }
}

document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", () => {
    const pageId = item.dataset.page;
    const relatorioTab = item.dataset.relatorioTab;

    document.querySelectorAll(".page").forEach((page) => {
      page.classList.remove("active-page");
    });

    document.getElementById(pageId).classList.add("active-page");

    if (pageId === "proprietariosPage") {
      renderizarProprietarios();
    }

    if (pageId === "reservasPage") {
      renderizarReservas();
    }

    if (pageId === "relatoriosPage") {
      if (relatorioTab) relatorioTabAtual = relatorioTab;
      renderizarRelatoriosEstrutura();
    }

    if (pageId === "documentacaoPage") {
      renderizarDocumentacao();
    }

    atualizarEstadoMenu(pageId);

    const operacaoPages = ["ativasPage", "concluidasPage", "canceladasPage"];
    const gestaoPages = ["adminPage", "apartamentosPage", "financeiroPage", "reservasPage", "proprietariosPage"];
    const relatoriosPages = ["relatoriosPage"];
    const mobileMenu = window.matchMedia("(max-width: 900px)").matches;

    if (mobileMenu && item.closest("#operacaoMenu") && operacaoPages.includes(pageId)) {
      operacaoMenu.classList.remove("open");
      operacaoMenu.classList.add("closed");
    }

    if (mobileMenu && gestaoMenu && item.closest("#gestaoMenu") && gestaoPages.includes(pageId)) {
      gestaoMenu.classList.remove("open");
      gestaoMenu.classList.add("closed");
    }

    if (mobileMenu && relatoriosMenu && item.closest("#relatoriosMenu") && relatoriosPages.includes(pageId)) {
      relatoriosMenu.classList.remove("open");
      relatoriosMenu.classList.add("closed");
    }
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

feedbackOkBtn.addEventListener("click", () => {
  feedbackModal.style.display = "none";
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
    mostrarFeedback({
      titulo: "Campos incompletos",
      mensagem: "<p>Preencha todos os campos da limpeza manual antes de salvar.</p>",
      tipo: "warning"
    });
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

  setBotaoProcessando(saveBtn, true, "Salvando...");

  try {
    await salvarLimpezaSheets(novaLimpeza);
  } finally {
    setBotaoProcessando(saveBtn, false);
  }

  renderizarCards();

  cleaningModal.style.display = "none";
  limparFormulario();

  mostrarFeedback({
    titulo: "Limpeza manual criada",
    mensagem: `
      <p>A limpeza foi criada e enviada para o Sheets.</p>
      <div class="feedback-summary">
        <div><span>Origem</span><strong>Manual</strong></div>
        <div><span>Data</span><strong>${formatarData(novaLimpeza.data)}</strong></div>
        <div><span>Horário</span><strong>${novaLimpeza.hora}</strong></div>
      </div>
    `
  });
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
    <br>
    Reserva: ${dados.referenciaReserva || "-"}
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
  limpeza.lavagem = Number(lavagemInput.value) || 0;
  limpeza.secagem = Number(secagemInput.value) || 0;
  limpeza.teveDano = danoCheckbox.checked;
  limpeza.faltouInsumo = faltamInsumos.checked;
  limpeza.observacoes = observacoesInput.value || "";
  limpeza.insumos = Array.from(
    document.querySelectorAll("#insumosBox input[type='checkbox']:checked")
  ).map((item) => item.value);
  limpeza.concluidoEm = new Date().toISOString();
  limpeza.referenciaReserva = limpeza.referenciaReserva || "";

  finishModal.style.display = "none";
  cardAtual = null;
  const lancamentos = gerarLancamentosFinanceirosLimpeza(limpeza);
  salvarLocalStorage();
  salvarFluxoCaixaLocalStorage();
  lancamentos.forEach((lancamento) => {
    salvarFluxoCaixaSheets(lancamento);
  });

  atualizarLimpezaSheets(limpeza);
  renderizarCards();
  renderizarFinanceiro();

  const danos = limpeza.teveDano ? "Sim" : "Não";
  const insumos = limpeza.faltouInsumo ? "Sim" : "Não";
  const itensSinalizados = Array.isArray(limpeza.insumos) ? limpeza.insumos.length : 0;
  const semOcorrencias = !limpeza.teveDano && !limpeza.faltouInsumo;

  mostrarFeedback({
    titulo: "Limpeza concluída",
    mensagem: `
      <p>Registros operacionais atualizados.</p>
      <div class="feedback-summary">
        <div><span>Tipo de faxina</span><strong>${limpeza.tipoFaxina || "-"}</strong></div>
        <div><span>Lavagem</span><strong>${limpeza.lavagem}</strong></div>
        <div><span>Secagem</span><strong>${limpeza.secagem}</strong></div>
        <div><span>Danos</span><strong>${danos}</strong></div>
        <div><span>Insumos/trocas</span><strong>${insumos}</strong></div>
        ${limpeza.faltouInsumo ? `<div><span>Itens sinalizados</span><strong>${itensSinalizados}</strong></div>` : ""}
        ${semOcorrencias ? `<div><span>Ocorrências</span><strong>Nenhuma</strong></div>` : ""}
      </div>
    `
  });
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

if (filterData) {
  filterData.addEventListener("change", () => {
    periodoAtual = "custom";

    quickFilters.forEach((btn) => {
      btn.classList.remove("active-quick");
    });

    aplicarFiltros();
  });
}

clearFiltersBtn.addEventListener("click", () => {
  filterResponsavel.value = "";
  filterData.value = "";
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

  if (filterData) {
    filterData.value = "";
  }

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

historyQuickFilters.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tipo = btn.dataset.historyFilter;

    periodosHistorico[tipo] = btn.dataset.period;

    historyQuickFilters.forEach((item) => {
      if (item.dataset.historyFilter === tipo) {
        item.classList.remove("active-quick");
      }
    });

    btn.classList.add("active-quick");

    aplicarFiltrosHistorico();
  });
});

[
  filterConcluidasResponsavel,
  filterConcluidasPredio,
  filterCanceladasResponsavel,
  filterCanceladasPredio
].forEach((select) => {
  if (select) {
    select.addEventListener("change", aplicarFiltrosHistorico);
  }
});

/* IMPORTAR CSV */

importBtn.addEventListener("click", () => {
  const arquivo = csvFileInput.files[0];

  if (!arquivo) {
    mostrarFeedback({
      titulo: "Arquivo não selecionado",
      mensagem: "<p>Selecione um arquivo CSV do Booking para continuar.</p>",
      tipo: "warning"
    });
    return;
  }

  const nomeArquivo = String(arquivo.name || "").toLowerCase();
  const ehCsv = nomeArquivo.endsWith(".csv");
  const ehExcel = nomeArquivo.endsWith(".xls") || nomeArquivo.endsWith(".xlsx");

  if (!ehCsv && !ehExcel) {
    mostrarFeedback({
      titulo: "Arquivo inválido",
      mensagem: "<p>Selecione um arquivo CSV ou Excel do Booking.</p>",
      tipo: "warning"
    });
    return;
  }

  if (ehExcel && typeof XLSX === "undefined") {
    mostrarFeedback({
      titulo: "Erro na leitura",
      mensagem: "<p>Biblioteca de leitura Excel não carregada.</p>",
      tipo: "warning"
    });
    return;
  }

  setBotaoProcessando(importBtn, true, "Importando...");

  const reader = new FileReader();

  reader.onload = async function (event) {
    try {
      let csv = event.target.result;

      if (ehExcel) {
        const workbook = XLSX.read(event.target.result, { type: "array" });
        const primeiraAba = workbook.SheetNames[0];
        const sheet = workbook.Sheets[primeiraAba];
        csv = XLSX.utils.sheet_to_csv(sheet);
      }

      await processarCSV(csv);
    } finally {
      setBotaoProcessando(importBtn, false);
    }
  };

  reader.onerror = function () {
    setBotaoProcessando(importBtn, false);
    mostrarFeedback({
      titulo: "Erro na leitura",
      mensagem: "<p>Não foi possível ler o arquivo selecionado. Tente novamente.</p>",
      tipo: "warning"
    });
  };

  if (ehExcel) {
    reader.readAsArrayBuffer(arquivo);
  } else {
    reader.readAsText(arquivo, "UTF-8");
  }
});

async function processarCSV(csv) {
  const parseCsvBooking = (texto) => {
    const linhas = [];
    let linha = [];
    let campo = "";
    let dentroAspas = false;

    for (let i = 0; i < texto.length; i++) {
      const char = texto[i];
      const proximo = texto[i + 1];

      if (char === '"' && dentroAspas && proximo === '"') {
        campo += '"';
        i++;
        continue;
      }

      if (char === '"') {
        dentroAspas = !dentroAspas;
        continue;
      }

      if (char === "," && !dentroAspas) {
        linha.push(campo.trim());
        campo = "";
        continue;
      }

      if ((char === "\n" || char === "\r") && !dentroAspas) {
        if (char === "\r" && proximo === "\n") i++;
        linha.push(campo.trim());

        if (linha.some((valor) => valor !== "")) {
          linhas.push(linha);
        }

        linha = [];
        campo = "";
        continue;
      }

      campo += char;
    }

    linha.push(campo.trim());

    if (linha.some((valor) => valor !== "")) {
      linhas.push(linha);
    }

    return linhas;
  };

  const linhas = parseCsvBooking(csv);

  if (!linhas.length) {
    return;
  }

  const cabecalho = linhas[0].map((coluna) => coluna.trim());
  const reservas = [];

  for (let i = 1; i < linhas.length; i++) {
    const valores = linhas[i];
    const reserva = {};

    cabecalho.forEach((coluna, index) => {
      reserva[coluna] = valores[index]?.trim();
    });

    reservas.push(reserva);
  }

  console.log("CSV headers:", cabecalho);

  const reservasValidas = reservas.filter((reserva) => {
    const status = String(reserva["Status"] || "").trim();
    const statusNormalizado = status.toLowerCase();
    return statusNormalizado === "ok" || statusNormalizado === "cancelada";
  });

  console.log("Reservas válidas (booking):", reservasValidas.length);

  const normalizarTextoChave = (texto) => {
    return String(texto || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, " ");
  };

  const normalizarDataBookingExcel = (data) => {
    const texto = String(data || "").trim();
    const dataSistema = normalizarDataSistema(texto, "booking");

    if (/^\d{4}-\d{2}-\d{2}$/.test(dataSistema)) {
      return dataSistema;
    }

    const meses = {
      janeiro: "01",
      fevereiro: "02",
      marco: "03",
      abril: "04",
      maio: "05",
      junho: "06",
      julho: "07",
      agosto: "08",
      setembro: "09",
      outubro: "10",
      novembro: "11",
      dezembro: "12"
    };

    const match = texto.match(/^(\d{1,2})\s+de\s+([a-zç]+)\s+de\s+(\d{4})$/i);

    if (!match) {
      return dataSistema;
    }

    const dia = match[1].padStart(2, "0");
    const mesTexto = normalizarTextoChave(match[2]);
    const mes = meses[mesTexto];
    const ano = match[3];

    if (!mes) {
      return dataSistema;
    }

    return `${ano}-${mes}-${dia}`;
  };

  const buscarDadosImovelBooking = (nomeImovel) => {
    const nomeNormalizado = normalizarTextoChave(nomeImovel);
    const chaveEncontrada = Object.keys(mapaImoveisBooking).find((chave) => {
      return normalizarTextoChave(chave) === nomeNormalizado;
    });

    return chaveEncontrada ? mapaImoveisBooking[chaveEncontrada] : undefined;
  };
  const hoje = hojeISO();

  let criadas = 0;
  let ignoradasHistorico = 0;
  let ignoradasDuplicadas = 0;

  let salvoFalhas = 0;
  const detalhesFalhas = [];
  for (let index = 0; index < reservasValidas.length; index++) {
    const reserva = reservasValidas[index];
    const statusReserva = String(reserva["Status"] || "").trim();
    const checkout = normalizarDataBookingExcel(reserva["Saída"]);
    const referencia = reserva["Número da reserva"];
    const nomeImovel = String(reserva["Nome da propriedade"] || "").trim();
    const dadosImovel = buscarDadosImovelBooking(nomeImovel);
    const pagamentoTotalBooking = converterMoedaCsvParaNumero(reserva["Pagamento total"]);
    const comissaoBooking = converterMoedaCsvParaNumero(reserva["Comissão"]);
    const valorEfetivoBooking = pagamentoTotalBooking - comissaoBooking;
    console.log("BOOKING DEBUG CAMPOS", {
      statusReserva,
      referencia,
      nomeImovel,
      checkout,
      pagamentoTotalBooking,
      comissaoBooking,
      valorEfetivoBooking,
      dadosImovel
    });

    const dataEntradaBooking = normalizarDataSistema(reserva["Chegada"], "booking");
    const dataSaidaBooking = normalizarDataSistema(reserva["Saída"], "booking");
    const dataReservaBooking = normalizarDataSistema(reserva["Reservado em"], "booking");

    const reservaSheets = {
      codigoReserva: referencia,
      origem: "booking",
      nomeApartamento: nomeImovel,
      predio: dadosImovel?.predio || "A DEFINIR",
      apartamento: dadosImovel?.apartamento || "A DEFINIR",
      hospede: reserva["Nome de quem fez a reserva"] || "",
      telefone: "",
      dataEntrada: dataEntradaBooking,
      dataSaida: dataSaidaBooking,
      dataLimpeza: dataSaidaBooking,
      valorEfetivo: valorEfetivoBooking,
      valorInfo: pagamentoTotalBooking,
      statusReserva,
      dataReserva: dataReservaBooking,
      criadoEm: new Date().toISOString(),
      atualizadoEm: new Date().toISOString()
    };

    salvarReservaSheets(reservaSheets);

    if (statusReserva.toLowerCase() === "cancelada") {
      continue;
    }

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
      } else {
        console.log("BOOKING DEBUG GERAR RECEITA", {
          referenciaReserva: novaLimpeza.referenciaReserva,
          data: novaLimpeza.data,
          predio: novaLimpeza.predio,
          apartamento: novaLimpeza.apartamento,
          valorEfetivoBooking
        });
        gerarReceitaPrevistaReserva(
          novaLimpeza,
          "receita_prevista_booking",
          valorEfetivoBooking,
          0,
          {
            dataSaida: checkout
          }
        );
      }

        criadas++;
      }

  renderizarCards();

  mostrarFeedback({
    titulo: "Importação Booking concluída",
    mensagem: criarResumoImportacao({
      criadas,
      ignoradasHistorico,
      ignoradasDuplicadas,
      salvoFalhas
    }),
    tipo: salvoFalhas ? "warning" : "success"
  });

  if (detalhesFalhas.length) {
    console.error("Detalhes das falhas (booking):", detalhesFalhas);
  }
}
/* IMPORTAR AIRBNB */

importAirbnbBtn.addEventListener("click", () => {

  const arquivo =
    airbnbFileInput.files[0];

  if (!arquivo) {

    mostrarFeedback({
      titulo: "Arquivo não selecionado",
      mensagem: "<p>Selecione um arquivo CSV do Airbnb para continuar.</p>",
      tipo: "warning"
    });

    return;
  }

  setBotaoProcessando(importAirbnbBtn, true, "Importando...");

  const reader = new FileReader();

  reader.onload = async function(event) {

    const csv =
      event.target.result;

    try {
      await processarAirbnbCSV(csv);
    } finally {
      setBotaoProcessando(importAirbnbBtn, false);
    }
  };

  reader.onerror = function() {
    setBotaoProcessando(importAirbnbBtn, false);
    mostrarFeedback({
      titulo: "Erro na leitura",
      mensagem: "<p>Não foi possível ler o arquivo selecionado. Tente novamente.</p>",
      tipo: "warning"
    });
  };

  reader.readAsText(
    arquivo,
    "UTF-8"
  );
});

async function processarAirbnbCSV(csv) {

  const parseLinhaCsvAirbnb = (linha) => {
    const colunas = [];
    let atual = "";
    let dentroAspas = false;

    for (let i = 0; i < linha.length; i++) {
      const char = linha[i];
      const proximo = linha[i + 1];

      if (char === '"' && proximo === '"') {
        atual += '"';
        i++;
        continue;
      }

      if (char === '"') {
        dentroAspas = !dentroAspas;
        continue;
      }

      if (char === "," && !dentroAspas) {
        colunas.push(atual.trim());
        atual = "";
        continue;
      }

      atual += char;
    }

    colunas.push(atual.trim());
    return colunas;
  };

  const normalizarHeaderAirbnb = (texto) => {
    return String(texto || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const linhas = csv
    .split("\n")
    .map((linha) => linha.trim())
    .filter((linha) => linha.length > 0);

  const cabecalho = parseLinhaCsvAirbnb(linhas[0])
    .map((coluna) => coluna.trim());

  const mapaCabecalho = cabecalho.reduce((mapa, coluna) => {
    mapa[normalizarHeaderAirbnb(coluna)] = coluna;
    return mapa;
  }, {});

  const obterCampoAirbnb = (reserva, nome) => {
    const coluna = mapaCabecalho[normalizarHeaderAirbnb(nome)];
    return coluna ? reserva[coluna] : "";
  };

  const reservas = [];

  for (let i = 1; i < linhas.length; i++) {

    const valores = parseLinhaCsvAirbnb(linhas[i]);

    const reserva = {};

    cabecalho.forEach((coluna, index) => {
      reserva[coluna] =
        valores[index]?.trim();
    });

    reservas.push(reserva);
  }

  console.log("CSV headers (Airbnb):", cabecalho);
  const reservasValidas = reservas.filter((reserva) => {
    return obterCampoAirbnb(reserva, "Tipo") === "Reserva";
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
      obterCampoAirbnb(reserva, "Data de término"),
      "airbnb"
    );

    const referencia =
      obterCampoAirbnb(reserva, "Código de Confirmação");

    const anuncio =
      obterCampoAirbnb(reserva, "AnÃºncio");

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
        obterCampoAirbnb(reserva, "Hóspede"),

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
      } else {
        const valorReceita = converterMoedaCsvParaNumero(obterCampoAirbnb(reserva, "Valor"));
        const valorInfo = converterMoedaCsvParaNumero(obterCampoAirbnb(reserva, "Taxa de limpeza"));
        const taxaServico = converterMoedaCsvParaNumero(obterCampoAirbnb(reserva, "Taxa de serviÃ§o"));

        const dataEntradaAirbnb = normalizarDataSistema(obterCampoAirbnb(reserva, "Data de início"), "airbnb");
        const dataSaidaAirbnb = normalizarDataSistema(obterCampoAirbnb(reserva, "Data de término"), "airbnb");
        const dataReservaAirbnb = normalizarDataSistema(obterCampoAirbnb(reserva, "Data da reserva"), "airbnb");

        const reservaSheets = {
          codigoReserva: referencia,
          origem: "airbnb",
          nomeApartamento: anuncio,
          predio: novaLimpeza.predio,
          apartamento: novaLimpeza.apartamento,
          hospede: obterCampoAirbnb(reserva, "Hóspede"),
          telefone: "",
          dataEntrada: dataEntradaAirbnb,
          dataSaida: dataSaidaAirbnb,
          dataLimpeza: dataSaidaAirbnb,
          valorEfetivo: valorReceita,
          valorInfo: valorReceita + taxaServico,
          statusReserva: obterCampoAirbnb(reserva, "Tipo"),
          dataReserva: dataReservaAirbnb,
          criadoEm: new Date().toISOString(),
          atualizadoEm: new Date().toISOString()
        };

        salvarReservaSheets(reservaSheets);

        gerarReceitaPrevistaReserva(
          novaLimpeza,
          "receita_prevista_airbnb",
          valorReceita,
          valorInfo,
          {
            dataEntrada: obterCampoAirbnb(reserva, "Data de in\u00EDcio"),
            dataSaida: obterCampoAirbnb(reserva, "Data de t\u00E9rmino")
          }
        );
      }

      criadas++;

  }

  renderizarCards();

  mostrarFeedback({
    titulo: "Importação Airbnb concluída",
    mensagem: criarResumoImportacao({
      criadas,
      ignoradasHistorico,
      ignoradasDuplicadas,
      salvoFalhas
    }),
    tipo: salvoFalhas ? "warning" : "success"
  });

  if (detalhesFalhas.length) {
    console.error("Detalhes das falhas (airbnb):", detalhesFalhas);
  }
}

function normalizarHora(hora) {
  return normalizarHoraSistema(hora);
}

/* INICIAR SISTEMA */

function iniciarSistema() {
  if (sistemaIniciado) return;

  sistemaIniciado = true;
  carregarLocalStorage();
  carregarLimpezasSheets();
  carregarCustosApartamentosLocalStorage();
  sincronizarApartamentosDoSheets();
  carregarFluxoCaixaLocalStorage();
  sincronizarFluxoCaixaDoSheets();
  sincronizarReservasDoSheets();
  renderizarApartamentos();
  renderizarFinanceiro();

  filterData.value = hojeISO();
  periodoAtual = "today";

  renderizarCards();
  fecharTodosMenus();
  resetarMenuVisual();
}

window.addEventListener("load", () => {
  verificarSessao();
});

if (closeApartamentoModal) {
  closeApartamentoModal.addEventListener("click", fecharModalApartamento);
}

if (apartamentoCancelBtn) {
  apartamentoCancelBtn.addEventListener("click", fecharModalApartamento);
}

if (apartamentoSaveBtn) {
  apartamentoSaveBtn.addEventListener("click", salvarCustosApartamento);
}

if (novoApartamentoBtn) {
  novoApartamentoBtn.addEventListener("click", abrirModalNovoApartamento);
}

if (apartamentosFiltroPredio) {
  apartamentosFiltroPredio.addEventListener("change", renderizarApartamentos);
}

if (loginForm) {
  loginForm.addEventListener("submit", fazerLogin);
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", fazerLogout);
}

[
  financeiroFiltroMes,
  financeiroFiltroPredio,
  financeiroFiltroApartamento,
  financeiroFiltroCategoria
].forEach((select) => {
  if (select) {
    select.addEventListener("change", renderizarFinanceiro);
  }
});

if (financeiroBusca) {
  financeiroBusca.addEventListener("input", renderizarFinanceiro);
}

if (financeiroLimparFiltrosBtn) {
  financeiroLimparFiltrosBtn.addEventListener("click", limparFiltrosFinanceiro);
}

[reservasBuscaCodigo, reservasFiltroOrigem, reservasFiltroPredio, reservasFiltroMesEntrada].forEach((campo) => {
  if (campo) {
    campo.addEventListener("input", renderizarReservas);
    campo.addEventListener("change", renderizarReservas);
  }
});

if (closeReservaModal) {
  closeReservaModal.addEventListener("click", fecharModalReserva);
}

if (proprietarioFiltroSelect) {
  proprietarioFiltroSelect.addEventListener("change", renderizarProprietarios);
}

if (relatoriosTabShortstayBtn) {
  relatoriosTabShortstayBtn.addEventListener("click", () => alternarPainelRelatorios("shortstay"));
}

if (relatoriosTabProprietarioBtn) {
  relatoriosTabProprietarioBtn.addEventListener("click", () => alternarPainelRelatorios("proprietario"));
}

if (relatoriosMesCompetencia) {
  relatoriosMesCompetencia.addEventListener("change", () => {
    atualizarCardsPainelShortstay();
    atualizarCardsPainelProprietario();
  });
}

if (relatorioProprietarioFiltroSelect) {
  relatorioProprietarioFiltroSelect.addEventListener("change", () => {
    atualizarFiltroApartamentoRelatorioProprietario();
    atualizarCardsPainelProprietario();
  });
}

if (relatorioApartamentoFiltroSelect) {
  relatorioApartamentoFiltroSelect.addEventListener("change", atualizarCardsPainelProprietario);
}

if (documentacaoBusca) {
  documentacaoBusca.addEventListener("input", filtrarDocumentacao);
}

if (financeiroNovoLancamentoBtn) {
  financeiroNovoLancamentoBtn.addEventListener("click", abrirModalFinanceiro);
}

if (closeFinanceiroModal) {
  closeFinanceiroModal.addEventListener("click", fecharModalFinanceiro);
}

if (financeiroCancelBtn) {
  financeiroCancelBtn.addEventListener("click", fecharModalFinanceiro);
}

if (financeiroSalvarBtn) {
  financeiroSalvarBtn.addEventListener("click", salvarLancamentoManual);
}

const financeiroDataHeader = document.querySelector(".financeiro-table-header span:first-child");

if (financeiroDataHeader) {
  financeiroDataHeader.addEventListener("click", () => {
    financeiroOrdenacaoData = financeiroOrdenacaoData === "desc" ? "asc" : "desc";
    renderizarFinanceiro();
  });
}

[financeiroTipoInput, financeiroQuantidadeInput, financeiroValorUnitarioInput].forEach((input) => {
  if (input) {
    input.addEventListener("input", calcularValorTotalFinanceiro);
    input.addEventListener("change", calcularValorTotalFinanceiro);
  }
});

if (financeiroPredioInput) {
  financeiroPredioInput.addEventListener("change", () => {
    const predio = financeiroPredioInput.value;
    const aptos = custosApartamentos
      .filter((item) => item.predio === predio)
      .map((item) => item.apartamento);

    financeiroApartamentoInput.innerHTML = '<option value="">Selecione o apartamento</option>';
    aptos.forEach((apto) => {
      const option = document.createElement("option");
      option.value = apto;
      option.textContent = apto;
      financeiroApartamentoInput.appendChild(option);
    });
  });
}

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

      hora:
        normalizarHoraSistema(item?.hora),

      qtdHospedes:
        Number(item.qtdHospedes) || 0,

      lavagem:
        Number(item.lavagem) || 0,

      secagem:
        Number(item.secagem) || 0,

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


