"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = require("./config/config");
// export const sequelize = new Sequelize({
//   username: config.username,
//   password: config.password,
//   database: config.database,
//   host: config.host,
//   dialect: "postgres",
//   storage: ":memory:",
// });
exports.sequelize = new sequelize_typescript_1.Sequelize(config_1.config.database, config_1.config.username, config_1.config.password, {
    host: config_1.config.host,
    dialect: "postgres",
    port: config_1.config.port,
    dialectOptions: config_1.config.dialectOptions,
    logging: false,
});
//# sourceMappingURL=sequelize.js.map