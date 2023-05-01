# manage_documents

Projeto Manage Documents
A aplicação desenvolvida tem como objetivo facilitar a gestão de documentos cadastrais de funcionários. Com essa aplicação, o usuário pode cadastrar um novo funcionário, atualizar os dados de funcionários existentes e excluir esses documentos. Além disso todo pode ser gerado um Pdf atualizado com os dados do funcionário ou seu histórico na empresa.

Configuração mínima
Na sua máquina você deve ter:

Sistema Operacional Distribuição Unix
Node versão 16
Tecnologias Utilizadas
Linguagem de Programação: JavaScript
React
Node.js
Banco de Dados: Firebase
Funcionalidades da API
Adicionar, pesquisar, alterar e excluir funcionários.
Instalação
Passo 1:
Clone este repositório em sua máquina local.
Passo 2:
Com o projeto em sua máquina local, execute o comando npm install nas pastas front e backend para instalar as dependências.
npm install
Passo 3:
Para subir a aplicação no backend utilize o comando npm run dev dentro da pasta backend.
npm run dev
Para subir o frontend utilize npm start dentro da pasta frontend:
npm run db:reset
Execução
Ao rodar a aplicação, sera direcionado a uma tela de login, onde tera a opção de acessar a aplicação ou criar sua conta, o processo de criação e autenticação é baseado no metodo de Authentication do firebase. Segue uma conta de acesso padrão:

admin@admin.com

123456

Ao realizar o login, o usuario é redirecionado para home do projeto, onde pode registrar um novo funcionario, excluir, editar, pesquisar e gerar pdf's com seu momento atual na empresa e seu histórico.

Considerações Finais
Este é um projeto de exemplo, não recomendado para uso em produção sem uma revisão criteriosa e ajustes nas configurações de segurança.
