# reactjs-nodejs-mysql-pitu

# Semana full stack
## requirements
    *Visual Code
    *NodeJs LTS
    *MySQL Community Server
# Front-End

## build project for prod
    npm run build

## Tecnology
    ReactJs
## Packages
    React Project = 
    React Router Dom = npm install react-router-dom
    Axios for http = npm install axios
    React Bootstrap = npm install react-bootstrap bootstrap
    SASS for node support = npm install node-sass@4.14.1
    Styled components = npm install styled-components
    Font Awesome = npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
    date fns manipulação data = npm install date-fns

# Back-End
    Projeto com função de encurtar URL's.

## Run and build project
    run command "npm start"

## Tecnology
    NodeJS + Express

## Iniciar projeto nodeJS
    npm init -y

## Build NodeJS Project
    run command 'tsc' from backend folder

## Run NodeJS Project
    run command 'node server.js' from backend folder

## Run Build And Run NodeJS Project
    run custom command 'npm start'

## Packages
    Express = npm install express
    Types do Express = npm install @types/express
    Typescript = npm install typescript -g
        Iniciar TypeScript = tsc --init
    Sequelize = npm install sequelize
    Types do sequelize = npm install @types/validator
    MySql Library = npm install mysql2
    Cors = npm install cors --save
    Types do cors = npm install @types/cors --save-dev



# Deploy
    Política

    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "AllowPublicReadAccess",
                "Effect": "Allow",
                "Principal" : "*",
                "Action": "s3:GetObject",
                "Resource": "arn:aws:s3:::www.seubucket/*"
            }
        ]
    }


AWS Console Tutorial

Baixa o pacote do node JS
	curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
Intalar Node JS + NPM
	sudo yum install -y nodejs
		 node -v (verifica instalação efetuada do nodejs)
Baixa MySQL
	sudo rpm -Uvh https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm
Instala o MySQL
	sudo yum install mysql-community-server
Registrar o MySQL para iniciar junto ao servidor (Quando reiniciar)
	sudo systemctl enable mysqld
Iniciar o MySQL após instalação feito agora
	sudo systemctl start mysqld
Validar se o MySQL instalou
	mysql -v (vai mostrar um erro de login no banco)
Obter senha que o banco criou randomicamente pela primeira vez
	sudo grep 'temporary password' /var/log/mysqld.log
Rodar assistente de configuração do MySQL para deixar mais seguro
	sudo mysql_secure_installation (inserir a senha consultado anteriormente)
Conectar no banco MySQL
	mysql -u root -p
Criar Banco de dados no MySQL
	create schema pitu;
Sair do MySQL
	exit
Limpar terminal console
	clear
Instalar Git
	sudo yum install git -y
Clonar repositório na máquina
	git clone [endereço_repositório] (se tiver senha vai perdir senha)
Listar as pastas dentro do servidor
	ls
Ir para o diretório da aplicação clonada
	cd [nome_diretorio_acima]
		cd backend
			npm install (instala todos os pacotes da aplicação)
				sudo npm install -g typescript (instala typescript global)
					tsc (compila o projeto)
						cd dist (vai para o diretório compilado)
							nano database.js (abre o arquivo para edição e altera o password do banco)
								cd ..
									nano package.json (alterar a parte removendo o tsc e o e comercial)
										npm start (so para testar a aplicação)
Instalar pacote para subir o backend junto com o servidor e caso cair automaticamente se reinicie
	sudo npm install -g pm2
	sudo pm2 startup
Registrar no PM2 a aplicação backend para ser iniciado no start
	pm2 start npm --name pitu_backend -- start
Validar se funcionou o comando
	curl -i localhost:3001
	
Para atualizar a aplicação em produção
	git pull
	pm2 stop [nome_aplicação]
	pm2 start npm --name pitu_backend -- start
								