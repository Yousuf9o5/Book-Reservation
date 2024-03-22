import { DataTypes } from "sequelize";
import sequelize from "../db.index.js";
import User from "./user.schema.js";
import Book from "./book.schema.js";

const Reservation = sequelize.define(
  "Reservation",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    reserve_in: {
      type: DataTypes.BIGINT,
      defaultValue: Date.now() + 1000 * 60 * 60 * 24 * 7, // 7 days in case no reserve date was entered
    },
  },
  {
    tableName: "reservations",
    timestamps: true,
  }
);

// Define associations
User.belongsToMany(Book, {
  through: Reservation,
  foreignKey: {
    name: "user_id",
  },
});
Book.belongsToMany(User, {
  through: Reservation,
  foreignKey: {
    name: "book_id",
  },
});

export default Reservation;
