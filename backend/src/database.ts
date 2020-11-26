import { Sequelize } from "sequelize";

const port = 3306;
const server = 'localhost'
const databaseName = 'pitu';
const sequelize = new Sequelize(`mysql://root:root@${server}:${port}/${databaseName}`); // user:password@server:port

export default { sequelize, port, server, databaseName }