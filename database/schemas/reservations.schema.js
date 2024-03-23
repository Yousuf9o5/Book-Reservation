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
    reserve_end_on: {
      type: DataTypes.DATE,
      allowNull: false,
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
  foreignKey: "user_id",
  as: "user",
});
Book.belongsToMany(User, {
  through: Reservation,
  foreignKey: "book_id",
  as: "book",
});

Reservation.belongsTo(User, { foreignKey: "user_id", as: "user" });
Reservation.belongsTo(Book, { foreignKey: "book_id", as: "book" });

// Reservation.sync({ force: true })
//   .then(() => console.log("Done sync this Model to the DB"))
//   .catch((err) => console.log("Error", err));

export default Reservation;
