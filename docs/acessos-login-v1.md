# Login V1 - Acessos (Local DEV)

Este projeto usa um Login V1 local (mockado) para organizar permissões por perfil.

## Usuários de teste

- `admin` / `123456`  
  Perfil: `admin`  
  Nome exibido: `Admin`

- `gestao` / `123456`  
  Perfil: `gestao`  
  Nome exibido: `Gestao`

- `aniele` / `123456`  
  Perfil: `faxineira`  
  Nome exibido: `Aniele`

- `thais` / `123456`  
  Perfil: `faxineira`  
  Nome exibido: `Thais`

## Permissões por perfil

- `admin`: Operação, Gestão, Apartamentos, Financeiro e Relatórios.
- `gestao`: Operação, Gestão e Apartamentos.
- `faxineira`: apenas Operação.

## Regra especial para faxineira

- O sistema filtra automaticamente os cards para mostrar apenas a própria faxineira logada.
  - `Aniele` vê apenas registros de `Aniele`.
  - `Thais` vê apenas registros de `Thais`.

## Sessão

- Sessão salva em `localStorage` na chave `usuarioLogado`.
- Botão `Sair` encerra a sessão local.
