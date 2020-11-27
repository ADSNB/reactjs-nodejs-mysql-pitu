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