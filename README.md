# Ebanx Assignment

Este é um projeto de gerenciamento de contas bancárias criado como uma tarefa de atribuição. O projeto utiliza Node.js com Express e TypeScript para fornecer uma API para gerenciar depósitos, saques, transferências e consultar saldos de contas.

## Funcionalidades

- **Depósito**: Adiciona um valor a uma conta existente ou cria uma nova conta se não existir.
- **Retirada**: Remove um valor de uma conta existente, sem permitir saldo negativo.
- **Transferência**: Transfere um valor de uma conta para outra, sem permitir saldo negativo.
- **Consulta de Saldo**: Retorna o saldo atual de uma conta.
- **Reset**: Reseta todas as contas, útil para reiniciar o estado do sistema.

## Tecnologias

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para construção de APIs em Node.js.
- **TypeScript**: Superset do JavaScript que adiciona tipos estáticos.
- **Jest**: Framework de testes para garantir a qualidade do código.

## Estrutura do Projeto

- **`src/`**: Código-fonte do projeto.
  - **`controllers/`**: Controladores que lidam com as requisições HTTP.
  - **`services/`**: Lógica de negócios para gerenciamento de contas.
  - **`models/`**: Definições de tipos e interfaces.
  - **`tests/`**: Testes unitários e de integração.
  - **`index.ts`**: Configuração e inicialização do servidor Express.
- **`tests/`**: Testes para validar o comportamento da aplicação.
- **`package.json`**: Gerenciador de pacotes e scripts do projeto.
- **`tsconfig.json`**: Configuração do TypeScript.
- **`.gitignore`**: Arquivo para ignorar arquivos e pastas não rastreados pelo Git.

## Instalação

Para configurar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/FHenriqueZiimer/ebanx-assignment.git

2. Navegue para o diretório do projeto:

   ```bash
   cd ebanx-assignment

3. Instale as dependências:

   ```bash
   npm install

4. Compile o código TypeScript:

   ```bash
   npm run build

   
5. Inicie o servidor:

   ```bash
   npm start

O servidor estará rodando em http://localhost:3000.

## Instalação

Para executar os testes, use o seguinte comando:

   ```bash
   npm test
  ```

Endpoints da API
* POST /reset: Reseta todas as contas.

* GET /balance: Retorna o saldo da conta especificada.
Exemplo: GET /balance?account_id=100. Retorna 200 OK com o saldo ou 404 Not Found se a conta não existir.

* POST /event: Cria um evento de depósito, retirada ou transferência.
Exemplo: POST /event com corpo JSON { "type": "deposit", "destination": "100", "amount": 10 }. Retorna 201 Created com os detalhes da conta ou 404 Not Found



