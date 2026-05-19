# 🏨 Short Stay ADM

Sistema operacional para gerenciar limpezas de short stays (Airbnb, Booking, etc).

**Status:** v1.0 - Operacional  
**Hospedagem:** GitHub Pages (estático) + Google Sheets (banco de dados)

---

## ✨ Funcionalidades

### 📋 Operação
- **Ativas** — Limpezas pendentes com filtros por período, faxineira, prédio
- **Concluídas** — Histórico de limpezas finalizadas
- **Canceladas** — Limpezas canceladas com rastreabilidade

### 📊 KPIs em Tempo Real
- Pendentes
- Hoje
- Vencidas
- Concluídas

### 🔄 Importação Automática
- **Booking CSV** — Detecta check-outs e cria limpezas automaticamente
- **Airbnb CSV** — Mesmo fluxo para Airbnb
- Evita duplicatas automaticamente

### 🛠 Administração
- Criar limpeza manual (ajustes/extras)
- Conclusão com checklist (lavagem, secagem, danos, insumos, observações)
- Cancelamento com rastreabilidade

### 💾 Persistência
- **LocalStorage** — Dados locais (cache rápido)
- **Google Sheets** — Armazenamento oficial
- **Fila de retries** — Garante que dados não são perdidos

---

## 🚀 Como Usar

### Online (Recomendado)
Acesse: **https://SEU_USER.github.io/short-stay-adm**

### Localmente (Desenvolvimento)
```bash
# Com Python 3 instalado
cd short-stay-adm
python server.py
# Acesse: http://localhost:8000
```

---

## 📁 Estrutura

```
short-stay-adm/
├── index.html           # UI principal
├── script.js            # Lógica (450+ linhas)
├── style.css            # Estilos responsivos
├── server.py            # Servidor local (Python)
├── AppsScript_Melhorado.gs  # Backend Google Sheets
├── assets/              # Logos
│   └── img/
│       ├── Logo_trans_reduzido.png
│       └── logo_shortstay_cortado.png
├── data/                # (Reservado)
├── pages/               # (Reservado)
└── docs/                # (Reservado)
```

---

## ⚙️ Configuração

### 1. Google Apps Script (Backend)

1. Vá para **https://script.google.com**
2. Novo projeto
3. Cole o conteúdo de `AppsScript_Melhorado.gs`
4. Deploy → Web app
   - Execute as: "Me"
   - Who has access: "Anyone"
5. Copie a URL do deployment
6. Cole em `script.js` (linha ~60):
   ```javascript
   const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/...";
   ```

### 2. Google Sheets (Banco de Dados)

1. Crie planilha em **https://sheets.google.com**
2. Crie aba "Limpezas" (ou deixe o Apps Script criar automaticamente)
3. Cabeçalho (se criar manual):
   ```
   id | origem | status | predio | apartamento | faxineira | tipoFaxina | 
   qtdHospedes | data | hora | lavagem | secagem | teveDano | faltouInsumo | 
   insumos | observacoes | criadoEm | concluidoEm | canceladoEm | 
   referenciaReserva | nomeImovelBooking | anuncio
   ```

### 3. Mapear Imóveis

Edite em `script.js`:
- `mapaImoveisAirbnb` — mapeia anúncio Airbnb → prédio/apto/faxineira
- `mapaImoveisBooking` — mapeia imóvel Booking → prédio/apto/faxineira

---

## 📊 Fluxo de Dados

```
CSV (Booking/Airbnb)
         ↓
  Importação + Validação
         ↓
  LocalStorage + Fila de Retries
         ↓
  Google Sheets (via Apps Script)
         ↓
  UI atualiza (cards, KPIs, filtros)
```

---

## 🔧 Troubleshooting

| Problema | Solução |
|----------|---------|
| Erro CORS "null origin" | Serve via HTTP: `python server.py` ou GitHub Pages |
| Sheets não salva | Verifique deploy do Apps Script (Executar como "Anyone") |
| CSV não importa | Verifique cabeçalhos (deve ter "Check-out date", "Property name", etc) |
| Dados desaparecem ao recarregar | Fila local com retries automáticos a cada 30s |

---

## 📝 Notas de Desenvolvimento

- **Sem banco de dados** — v1 usa Sheets como armazenamento
- **Banco oficial** — v2 usará banco real (PostgreSQL, Firebase, etc)
- **Estrutura Sheets** — Pronto para crescer: Imóveis, Reservas, Fluxo de Caixa, DRE, Proprietários

---

## 📅 Roadmap

- ✅ v1.0 — Operacional (limpezas, importação, filtros)
- 🔄 v1.1 — UX mobile melhorado
- 📦 v2.0 — Banco de dados real + API
- 📱 v2.1 — App mobile nativo
- 💰 v3.0 — Financeiro integrado

---

## 👥 Contribuir

Abra issues ou PRs para melhorias.

---

## 📄 Licença

MIT

---

**Última atualização:** 19/05/2026
