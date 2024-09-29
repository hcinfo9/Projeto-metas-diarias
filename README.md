# Projeto Metas Diárias (_FullStack_)

Projeto consiste em um **Gerenciador de Metas diarias**, a aplicação foi desenvolvida com **NodeJS**, utilizando **TypeScript**, **Drizzle-ORM**, **PostGreSQL**, **Docker** e **Biome** no backend. O FrontEnd foi desenvolvido com **React**, **Tailwind** e **Vite**. Foram aplicados principios de SOLID e CLEAN CODE para garantir uma estrutura sólida e componentes estilizados. 

<img align="center" width="500px" height="300px" src= "https://github.com/user-attachments/assets/81ad375c-4d9c-4c3c-a3c4-2e461b1fbb6d"/><br>

<img align="center" width="500px" height="300px" src= "https://github.com/user-attachments/assets/76fc7ca7-4164-4b67-b168-c45eebd2e9d9"/><br>


## Tecnologias Utilizadas


- **[NodeJS](https://nodejs.org/)**: Utilizado para criar o Servidor, comunicação com banco de dados e as rotas da API.
- **[React](https://react.dev/)**: Framework utilizado para criar a interface grafica para gerenciar e adicionar novas metas.
- **[Tailwind](https://tailwindcss.com/)**: Biblioteca CSS utilizada para estilizar a pagina , definir os elementos e aspectos visuais.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
- **[PostGreSQL](https://www.postgresql.org/)**: Banco de dados utilizado para organizar e manter nossas metas guardadas.
- **[Docker](https://www.docker.com/)**: Utilizado para criar uma imagem Postgres, assim permitindo executar o banco de dados mesmo sem instala-lo na maquina.
- **[Drizzle-ORM](https://orm.drizzle.team/)**: utilizado para integrar o servidor com o PostgreSQL e também para o gerenciamento do banco de dados. Ele oferece tipagem estática avançada com TypeScript, migrações automáticas e suporte a consultas complexas, além de ser otimizado para desempenho.




## Funcionalidades 

- Consultar metas pendentes e resumo geral.
- Criar metas.
- Marcar metas como concluídas.
- Deletar metas pendentes e metas concluídas.
- Interface limpa e responsiva, estilizada com Tailwind.






      

## Pré-requisitos

- **NodeJS**: [Instalar NodeJS](https://nodejs.org/)
- **npm**: (Gerenciador de pacotes) ou Yarn
- **Docker**:[Instalar Docker](https://www.docker.com/products/docker-desktop/)


## Instalação 

Siga as etapas para instalar e executar o projeto localmente:

1. Clone o repositório:

   ```bash
   git clone https://github.com/hcinfo9/Projeto-metas-diarias.git
   ```

2. Acesse o diretório do projeto:

- Realize o acesso ao back e front em terminais separados para evitar erros.
   
   ```bash
   # no backend
   cd Projeto-metas-diarias/backend
   ```


    ```bash
   # no frontend
   cd Projeto-metas-diarias/FrontEnd
   ```

3. Instale as dependências:
    
   - Instale as dependencias na janela do terminal back e front separamente.
  
   ```bash
   npm install
   ```

   ou, se estiver utilizando Yarn:

   ```bash
   yarn install
   ```

4. Execute o servidor e a interface web de desenvolvimento:

   - Execute o back e front em terminais separados .

   ```bash
   npm run dev
   ```

   ou

   ```bash
   yarn dev
   ```

5. Crie e inicie o container docker rodando a imagem do PostgreSQL:

    ```bash
    # execute o comando no terminal do diretorio backend da aplicação
   docker-compose up
   ```

6. abra o navegador e acesse:

   ```
   http://localhost:5173
   ```

## Scripts Disponíveis

## BackEnd
- **`npm run dev`**: Executa o servidor de desenvolvimento Node.js.
- **`npm run build`**: Cria uma versão de produção da aplicação.
- **`npm run start`**: Inicia o servidor em produção após o build.

## FrontEnd
- **`npm run dev`**: Executa nossa interface web de desenvolvimento em React.
- **`npm run build`**: Cria uma versão de produção da aplicação.


## Estrutura de Pastas

A estrutura principal do projeto é a seguinte:

```bash
# BackEnd
├── migrations/        # Arquivos que criam nossas tabelas no banco de dados 
├── src/
│   ├── db/            # Arquivos de conexão, schema e seed do banco de dados
│   ├── functions/     # Arquivos que executão as funções chamadas por cada rota da aplicação. 
│   ├── http/
|   |   ├── routes/    # Arquivos das rotas da aplicação
|   |   └── server.ts  # Arquivo que executa nosso servidor
|   | 
│   └── env.ts         # Arquivo que valida e exporta nossas variaveis de ambiente.
├── biome.json         # Configuração do biome
├── docker-compose.yml # Configuração do docker compose para rodar nossa imagem PostGreSQL
├── tsconfig.json      # Configuração do TypeScript
├── .env.example       # Arquivo de exemplo das variaveis de ambiente, crie o arquivo  .env e configure o corretamente.
└── package.json       # Dependências e scripts do projeto

```

```bash
# FrontEnd
├── public/                 # contém nosso arquivo com nosso icon.svg.
├── src/
│   ├── assets/             # contém nossas imagens da interface.
│   ├── components/         # Arquivos onde estão todos os nossos componentes React. 
│   ├── http/               # Arquivos que realizam requisições HTTP para nosso Server.
│   ├── app.tsx             # Arquivo que renderiza nossos componentes na tela e permite acessar interface atravez de uma URL.
|   ├── index.css           # Arquivo que importa as diferentes camadas de estilos do Tailwind CSS.
|   ├── main.tsx            # inicializa a aplicação React, renderizando o componente App dentro do StrictMode.
|   └── vite-env.d.ts       # define os tipos necessários para garantir que o TypeScript reconheça corretamente as config do Vite.
|                      
├── biome.json              # Configuração do biome.
├── postcss.config.js       # processa o CSS da sua aplicação com as funcionalidades do Tailwind CSS. 
├── docker-compose.yml      # Configuração do docker compose para rodar nossa imagem PostGreSQL.
├── tsconfig.json           # Configuração do TypeScript.
├── tailwind.config.js      # Arquivo de configuração do Tailwind.
├── vite.config.ts          # Arquivo de configuração do Vite
└── package.json            # Dependências e scripts do projeto.

```


## Autor

Este projeto foi desenvolvido por Henrique Donato como parte de um desafio pra aprimorar minhas habilidades.

