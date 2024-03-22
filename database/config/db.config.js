import dotenv from "dotenv";

dotenv.config();

const config = {
  development: {
    database: "book_reservation",
    username: "root",
    password: "935115",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
    logging: false,
  },

  production: {
    database: process.env.database,
    username: process.env.DBusername,
    password: process.env.DBpassword,
    host: process.env.DBhost,
    port: +process.env.DBport,
    dialect: process.env.dialect,
    logging: false,
  },
};

export default config;
