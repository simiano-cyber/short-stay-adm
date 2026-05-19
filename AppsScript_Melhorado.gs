/**
 * APPS SCRIPT - SHORT STAY ADM
 * Versão melhorada com logging detalhado e tratamento de erros
 * 
 * PASSOS:
 * 1. No editor do Apps Script, delete todo conteúdo de Code.gs
 * 2. Cole este código
 * 3. Deploy → Manage deployments → New deployment
 *    - Type: Web app
 *    - Execute as: "Me" (sua conta)
 *    - Who has access: "Anyone"
 * 4. Copie a URL do novo deployment e atualize GOOGLE_SCRIPT_URL em script.js
 */

// =====================
// HANDLERS HTTP
// =====================

function doGet(e) {
  try {
    const action = e.parameter.action;
    Logger.log(`[doGet] Ação: ${action}`);

    if (action === "listar") {
      return listarLimpezas();
    }

    return resposta({
      sucesso: false,
      erro: "Ação inválida: " + action
    });
  } catch (erro) {
    Logger.log(`[doGet] Erro: ${erro.toString()}`);
    return resposta({
      sucesso: false,
      erro: `Erro no doGet: ${erro.toString()}`
    });
  }
}

function doPost(e) {
  try {
    const conteudo = e.postData.contents;
    Logger.log(`[doPost] Payload recebido: ${conteudo.substring(0, 200)}...`);

    if (!conteudo) {
      return resposta({
        sucesso: false,
        erro: "Payload vazio"
      });
    }

    let dados;
    try {
      dados = JSON.parse(conteudo);
    } catch (parseErro) {
      Logger.log(`[doPost] Erro ao parsear JSON: ${parseErro.toString()}`);
      return resposta({
        sucesso: false,
        erro: `JSON inválido: ${parseErro.toString()}`
      });
    }

    Logger.log(`[doPost] Action: ${dados.action}`);

    if (dados.action === "salvar") {
      return salvarLimpeza(dados.limpeza);
    }

    if (dados.action === "atualizar") {
      return atualizarLimpeza(dados.limpeza);
    }

    return resposta({
      sucesso: false,
      erro: "Ação inválida: " + dados.action
    });
  } catch (erro) {
    Logger.log(`[doPost] Erro geral: ${erro.toString()}\n${erro.stack}`);
    return resposta({
      sucesso: false,
      erro: `Erro no doPost: ${erro.toString()}`
    });
  }
}

// =====================
// LÓGICA DE DADOS
// =====================

function getSheet() {
  try {
    const planilha = SpreadsheetApp.getActiveSpreadsheet();
    
    if (!planilha) {
      throw new Error("Nenhuma planilha ativa encontrada");
    }

    let sheet = planilha.getSheetByName("Limpezas");
    
    if (!sheet) {
      Logger.log("[getSheet] Aba 'Limpezas' não encontrada. Criando...");
      sheet = criarAbaLimpezas();
    }

    return sheet;
  } catch (erro) {
    Logger.log(`[getSheet] Erro: ${erro.toString()}`);
    throw erro;
  }
}

function criarAbaLimpezas() {
  const planilha = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = planilha.insertSheet("Limpezas", 0);

  const cabecalho = [
    "id",
    "origem",
    "status",
    "predio",
    "apartamento",
    "faxineira",
    "tipoFaxina",
    "qtdHospedes",
    "data",
    "hora",
    "lavagem",
    "secagem",
    "teveDano",
    "faltouInsumo",
    "insumos",
    "observacoes",
    "criadoEm",
    "concluidoEm",
    "canceladoEm",
    "referenciaReserva",
    "nomeImovelBooking",
    "anuncio"
  ];

  sheet.appendRow(cabecalho);
  Logger.log(`[criarAbaLimpezas] Aba criada com cabecalho: ${cabecalho.join(", ")}`);

  return sheet;
}

function listarLimpezas() {
  try {
    const sheet = getSheet();
    const linhas = sheet.getDataRange().getValues();

    if (linhas.length === 0) {
      Logger.log("[listarLimpezas] Nenhuma linha encontrada");
      return resposta({
        sucesso: true,
        limpezas: []
      });
    }

    const cabecalho = linhas[0];
    const dados = linhas.slice(1);

    const limpezas = dados.map((linha) => {
      const item = {};
      cabecalho.forEach((coluna, index) => {
        item[coluna] = linha[index];
      });
      return item;
    });

    Logger.log(`[listarLimpezas] Retornando ${limpezas.length} limpezas`);

    return resposta({
      sucesso: true,
      limpezas: limpezas
    });
  } catch (erro) {
    Logger.log(`[listarLimpezas] Erro: ${erro.toString()}`);
    return resposta({
      sucesso: false,
      erro: `Erro ao listar: ${erro.toString()}`
    });
  }
}

function salvarLimpeza(limpeza) {
  try {
    if (!limpeza || !limpeza.id) {
      return resposta({
        sucesso: false,
        erro: "Limpeza sem ID"
      });
    }

    const sheet = getSheet();
    const linhas = sheet.getDataRange().getValues();

    // Verificar duplicata (coluna 0 = id)
    const ids = linhas.slice(1).map((linha) => linha[0]);

    if (ids.includes(limpeza.id)) {
      Logger.log(`[salvarLimpeza] ID duplicado: ${limpeza.id}`);
      return resposta({
        sucesso: true,
        ignorada: true,
        mensagem: "Limpeza já existe"
      });
    }

    const linha = montarLinha(limpeza);
    Logger.log(`[salvarLimpeza] Adicionando linha: ID=${limpeza.id}, Origem=${limpeza.origem}`);
    
    sheet.appendRow(linha);

    return resposta({
      sucesso: true,
      criada: true,
      id: limpeza.id
    });
  } catch (erro) {
    Logger.log(`[salvarLimpeza] Erro: ${erro.toString()}`);
    return resposta({
      sucesso: false,
      erro: `Erro ao salvar: ${erro.toString()}`
    });
  }
}

function atualizarLimpeza(limpeza) {
  try {
    if (!limpeza || !limpeza.id) {
      return resposta({
        sucesso: false,
        erro: "Limpeza sem ID"
      });
    }

    const sheet = getSheet();
    const linhas = sheet.getDataRange().getValues();

    for (let i = 1; i < linhas.length; i++) {
      if (linhas[i][0] === limpeza.id) {
        const linha = montarLinha(limpeza);
        Logger.log(`[atualizarLimpeza] Atualizando linha ${i + 1}: ID=${limpeza.id}`);
        
        sheet
          .getRange(i + 1, 1, 1, linha.length)
          .setValues([linha]);

        return resposta({
          sucesso: true,
          atualizada: true,
          id: limpeza.id
        });
      }
    }

    // Se não encontrar, inserir como nova
    Logger.log(`[atualizarLimpeza] ID não encontrado, criando novo: ${limpeza.id}`);
    const linha = montarLinha(limpeza);
    sheet.appendRow(linha);

    return resposta({
      sucesso: true,
      criada: true,
      id: limpeza.id
    });
  } catch (erro) {
    Logger.log(`[atualizarLimpeza] Erro: ${erro.toString()}`);
    return resposta({
      sucesso: false,
      erro: `Erro ao atualizar: ${erro.toString()}`
    });
  }
}

function montarLinha(dados) {
  return [
    dados.id || "",
    dados.origem || "",
    dados.status || "",
    dados.predio || "",
    dados.apartamento || "",
    dados.faxineira || "",
    dados.tipoFaxina || "",
    dados.qtdHospedes || "",
    dados.data || "",
    dados.hora || "",
    dados.lavagem || "",
    dados.secagem || "",
    dados.teveDano || "",
    dados.faltouInsumo || "",
    (dados.insumos || []).join(", "),
    dados.observacoes || "",
    dados.criadoEm || "",
    dados.concluidoEm || "",
    dados.canceladoEm || "",
    dados.referenciaReserva || "",
    dados.nomeImovelBooking || "",
    dados.anuncio || ""
  ];
}

function resposta(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// =====================
// UTILITÁRIOS (Opcional)
// =====================

/**
 * Função para testar manualmente
 * Abra Apps Script → Run → testeSalvar
 * Verifique os logs em Executions
 */
function testeSalvar() {
  const limpeza = {
    id: "TEST-" + Date.now(),
    origem: "manual",
    status: "pendente",
    predio: "Test Building",
    apartamento: "Apto 1",
    faxineira: "Test",
    tipoFaxina: "Troca",
    qtdHospedes: 1,
    data: "2026-05-19",
    hora: "12:00",
    criadoEm: new Date().toISOString()
  };

  Logger.log("[testeSalvar] Testando...");
  const resultado = salvarLimpeza(limpeza);
  Logger.log(`[testeSalvar] Resultado: ${resultado}`);
}
