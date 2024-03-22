import config from "./config/db.config.js";
import { Sequelize } from "sequelize";

const dbconfig = config.development;
const sequelize = new Sequelize(dbconfig);

export async function databaseConnection(force) {
  try {
    await sequelize.sync({ force: force || false });
    await sequelize.authenticate();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

export default sequelize;
