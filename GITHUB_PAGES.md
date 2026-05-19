# 🚀 Short Stay ADM - Guia GitHub Pages

## Passo 1: Criar Repositório no GitHub

1. Vá para **https://github.com/new**
2. Nome: `short-stay-adm` (ou escolha seu nome)
3. **Não marque** "Initialize with README" (vamos fazer local)
4. Clique "Create repository"
5. Copie a URL do repo (tipo: `https://github.com/SEU_USER/short-stay-adm.git`)

---

## Passo 2: Inicializar Git Localmente

Abra **PowerShell** (Win+X → PowerShell) na pasta do projeto:

```powershell
cd C:\Users\Usuario\Documents\short-stay-adm
```

Digite os comandos (um de cada vez):

```powershell
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

git init

git add .

git commit -m "Initial commit: Short Stay ADM v1"

git branch -M main

git remote add origin https://github.com/SEU_USER/short-stay-adm.git

git push -u origin main
```

**Substitua:**
- `SEU_USER` = seu username do GitHub
- `"Seu Nome"` e `"seu@email.com"` = seus dados

---

## Passo 3: Ativar GitHub Pages

1. Vá para seu repo no GitHub
2. **Settings** (tab à direita)
3. Esquerda: clique em **"Pages"**
4. Seção "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main** / **root**
5. Clique **Save**

Aguarde 1-2 minutos. Você verá:
```
✅ Your site is live at: https://SEU_USER.github.io/short-stay-adm
```

---

## Passo 4: Acessar o Sistema

1. Vá para: **`https://SEU_USER.github.io/short-stay-adm`**
2. Você deve ver o dashboard!
3. F12 → Console: verifique se **sem erros CORS**
4. Tente importar um CSV

---

## Se Não Vir a Página

- Aguarde mais 2-3 minutos (GitHub Pages demora um pouco)
- Limpe cache do navegador: **CTRL+SHIFT+DEL** (selecione "Tudo" e Clear)
- Recarregue: **CTRL+F5**

---

## Próximas Atualizações

Para fazer mudanças no código:

```powershell
# 1. Faça a alteração no arquivo
# 2. Salve
# 3. Abra PowerShell na pasta

git add .
git commit -m "Descrição da mudança"
git push
```

GitHub Pages atualiza automaticamente em 1-2 minutos.

---

## Checklist Final

- [ ] Repo criado no GitHub
- [ ] `git push` funcionou (vê os arquivos no GitHub)
- [ ] GitHub Pages ativado
- [ ] Site está online em `https://SEU_USER.github.io/short-stay-adm`
- [ ] F12 Console sem erros CORS
- [ ] Importação de CSV testada e salvando no Sheets

---

## Problemas?

**"Git command not found"**
- Instale Git: https://git-scm.com/download/win
- Reinicie PowerShell

**"Permission denied (publickey)"**
- Configure SSH: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
- Ou use HTTPS (acima, recomendado)

**Página em branco**
- Verifique se `index.html` está na raiz do repo (não em subpasta)
- GitHub Pages serve apenas conteúdo estático (HTML/CSS/JS/assets)

**Sheets não está salvando mesmo online**
- Abra DevTools → Console → procure por `[FilaSheets]`
- Se houver erros, copie e me envie
