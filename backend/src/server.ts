import app from './app';
import database from "./database";

// database.sequelize.sync({force: true}); // force true => força a criação de tabelas no banco de dados (destroy e recria se já existir)
database.sequelize.sync();
console.log(`The database ${database.databaseName} is running at server ${database.server} with port ${database.port}`);

const port = 3000;
app.listen(port);
console.log(`Server running at ${port}`);