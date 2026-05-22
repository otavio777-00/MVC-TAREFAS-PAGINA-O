Express e EJS atualizados em fev/25

1. Para adicionar as dependências, use:
    ```bash
    npm config set strict-ssl false (se necessário)
    npm install
    ```

2. Crie um arquivo `.env` a partir de `.env.example` e ajuste os valores de conexão MySQL:
    ```bash
    cp .env.example .env
    ```

3. Execute a aplicação:
    ```bash
    node app.js
    ```
