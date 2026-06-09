/**
 * PATCH PARA EXCLUIR LANÇAMENTOS DO FLUXO DE CAIXA
 *
 * 1. No seu doPost(e), depois de ler o payload JSON, adicione no switch/if de actions:
 *
 *    case "excluirFluxoCaixa":
 *      return jsonOutput_(
 *        excluirFluxoCaixaPorId_(payload.id)
 *      );
 *
 * 2. Se seu projeto não tiver um helper `jsonOutput_`, use a função deste arquivo.
 * 3. Este patch assume que a aba se chama `FluxoCaixa` e que existe uma coluna `id` no cabeçalho.
 */

function excluirFluxoCaixaPorId_(itemId) {
  try {
    var id = String(itemId || "").trim();

    if (!id) {
      return {
        sucesso: false,
        erro: "ID do lançamento não informado."
      };
    }

    var planilha = SpreadsheetApp.getActiveSpreadsheet();
    var aba = planilha.getSheetByName("FluxoCaixa");

    if (!aba) {
      return {
        sucesso: false,
        erro: "Aba FluxoCaixa não encontrada."
      };
    }

    var valores = aba.getDataRange().getValues();

    if (!valores || valores.length < 2) {
      return {
        sucesso: false,
        erro: "Nenhum lançamento encontrado para excluir."
      };
    }

    var cabecalho = valores[0].map(function(coluna) {
      return String(coluna || "").trim();
    });

    var indiceId = cabecalho.indexOf("id");

    if (indiceId === -1) {
      return {
        sucesso: false,
        erro: "Coluna id não encontrada na aba FluxoCaixa."
      };
    }

    for (var linha = 1; linha < valores.length; linha++) {
      var valorId = String(valores[linha][indiceId] || "").trim();

      if (valorId === id) {
        aba.deleteRow(linha + 1);
        return {
          sucesso: true,
          id: id
        };
      }
    }

    return {
      sucesso: false,
      erro: "Lançamento não encontrado para exclusão."
    };
  } catch (erro) {
    return {
      sucesso: false,
      erro: String(erro)
    };
  }
}

function jsonOutput_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
