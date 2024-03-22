import { DataTypes } from "sequelize";
import sequelize from "../db.index";

const Reservation = sequelize.define(
  "Reservation",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    reserve_in: {
      type: DataTypes.NUMBER,
      defaultValue: Date.now() + 1000 * 60 * 60 * 24 * 7, // 7 days in case no reserve date was entered
    },
  },
  {
    tableName: "reservations",
    timestamps: true,
  }
);

// Define associations
User.belongsToMany(Book, { through: Reservation, foreignKey: "userId" });
Book.belongsToMany(User, { through: Reservation, foreignKey: "bookId" });

export default Reservation;
