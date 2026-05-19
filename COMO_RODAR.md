# Como Rodar Short Stay ADM Localmente

## Problema Encontrado
O arquivo HTML está sendo aberto via `file://` (local), o que causa bloqueio **CORS** ao tentar comunicar com Google Apps Script.

**Solução:** Servir via HTTP local.

---

## Opção 1: Windows + Python (Rápido ✅)

### Pré-requisito
- Python 3 instalado (baixe de https://www.python.org/downloads/)
- No instalador, **marque "Add Python to PATH"**

### Passos
1. Abra o Explorador de Arquivos e vá para:
   ```
   c:\Users\Usuario\Documents\short-stay-adm\
   ```

2. **Clique 2x em `iniciar-servidor.bat`**
   - Uma janela PowerShell/CMD abrirá
   - Você verá:
     ```
     ✅ Servidor rodando em: http://localhost:8000
     Abra no navegador: 👉 http://localhost:8000
     ```

3. **Abra seu navegador** e vá para:
   ```
   http://localhost:8000
   ```

4. **Pronto!** O sistema agora consegue se comunicar com o Google Apps Script.

### Parar o servidor
- Na janela do terminal, pressione **CTRL + C**

---

## Opção 2: Terminal / PowerShell (Alternativa)

1. Abra **PowerShell** em `c:\Users\Usuario\Documents\short-stay-adm\`

2. Digite:
   ```powershell
   python server.py
   ```

3. Vá no navegador para `http://localhost:8000`

---

## Opção 3: Sem Python (usar Node.js)

Se não tiver Python, use Node.js:

1. Instale Node.js: https://nodejs.org/

2. No diretório do projeto, abra PowerShell e rode:
   ```powershell
   npx http-server
   ```

3. Acesse `http://localhost:8080`

---

## Opção 4: Publicar Online (Produção)

Para usar sem servidor local:
- **GitHub Pages** (gratuito, público)
- **Vercel** (gratuito)
- **Netlify** (gratuito)
- Seu próprio servidor

---

## Checklist Após Executar

- [ ] Servidor está rodando (vê a mensagem na janela do terminal)
- [ ] Navegador abre `http://localhost:8000`
- [ ] Page loads e você vê o dashboard
- [ ] F12 → Console mostra **sem erros CORS**
- [ ] Tenta importar um CSV Airbnb
- [ ] Vê mensagens `[FilaSheets]` no console (fila funcionando)
- [ ] Sem erros de "CORS policy" ou "Failed to fetch"

---

## Troubleshooting

### Erro: "Python não encontrado"
- Reinstale Python e **marque "Add Python to PATH"** durante instalação
- Reinicie o PowerShell após instalar

### Erro: "Port 8000 já está em uso"
- Outro servidor está rodando na mesma porta
- Use Opção 3 (Node.js) ou mude a porta em `server.py`:
  ```python
  PORT = 8001  # mude de 8000 para 8001
  ```

### Google Apps Script ainda não funciona
- Verifique em DevTools → Network a requisição POST para `script.google.com`
- Status esperado: **200** (sucesso) ou **204** (sem resposta)
- Se for **403/401**: Apps Script não foi publicado como "Anyone" (veja "AppsScript_Melhorado.gs")

---

## Próxima Etapa

Após rodar localmente e testar a importação:
1. Copie logs do Console (F12)
2. Verifique se a fila está funcionando (`[FilaSheets]` mensagens)
3. Confirme que dados estão sendo salvos no Sheets
