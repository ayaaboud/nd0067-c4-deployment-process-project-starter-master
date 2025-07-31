import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

// export const sequelize = new Sequelize({
//   username: config.username,
//   password: config.password,
//   database: config.database,
//   host: config.host,

//   dialect: "postgres",
//   storage: ":memory:",
// });

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: "postgres",
    port: config.port,
    dialectOptions: config.dialectOptions, // ✅ هذه مهمة جداً
    logging: false,
  }
);
