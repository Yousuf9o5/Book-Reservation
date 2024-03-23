import sequelize, { Op } from "sequelize";
import Reservation from "../../database/schemas/reservations.schema.js";
import User from "../../database/schemas/user.schema.js";
import Book from "../../database/schemas/book.schema.js";

/**
 * Retrieves paginated list of reservations.
 * @param {ReservationsOptions} options - Options for pagination (limit, offset).
 * @param {string} search - Search string to filter reservations by name or description.
 * @returns {Promise<{ reservations: ReservationAttributes[], totalPages: number }>} A promise that resolves to an object containing the list of reservations and total pages.
 */
export async function GetReservationsService(options) {
  try {
    const { limit, offset, search, filter, show } = options;

    const where = { ...filter };

    if (search.userId) {
      where["user_id"] = search.userId;
    }
    if (search.bookId) {
      where["book_id"] = search.bookId;
    }
    if (show == "expired") {
      where["reserve_end_on"] = { [Op.lte]: new Date() };
    }
    if (show == "not expired") {
      where["reserve_end_on"] = { [Op.gte]: new Date() };
    }

    const include = [
      {
        model: User,
        as: "user",
        attributes: { exclude: ["password"] },
      },
      { model: Book, as: "book" },
    ];

    const attributes = { exclude: ["book_id", "user_id"] };

    const { count, rows: reservations } = await Reservation.findAndCountAll({
      limit: limit,
      offset: offset - 1,
      where,
      include,
      attributes,
    });

    const totalPages = Math.ceil(count / limit);

    return { reservations, totalPages };
  } catch (error) {
    throw new Error(`Failed to retrieve reservations: ${error.message}`);
  }
}

/**
 * Retrieves a reservation by its ID.
 * @param {number | string} id - The ID of the reservation to retrieve.
 * @returns {Promise<sequelize.Model<ReservationAttributes> | null>} A promise that resolves to the reservation object if found, or null otherwise.
 */
export async function GetReservationService(id) {
  try {
    return await Reservation.findByPk(id);
  } catch (error) {
    throw new Error(
      `Failed to retrieve reservation with ID ${id}: ${error.message}`
    );
  }
}

/**
 * Retrieves a reservation by its ID.
 * @param {ReservationAttributes} fields - The ID of the reservation to retrieve.
 * @returns {Promise<sequelize.Model<ReservationAttributes> | null>} A promise that resolves to the reservation object if found, or null otherwise.
 */
export async function GetReservationByFieldsService(fields) {
  try {
    const reservation = await Reservation.findOne({
      where: { ...fields, reserve_end_on: { [Op.lt]: new Date() } },
      include: [
        { model: User, as: "user" },
        { model: Book, as: "book" },
      ],
    });

    return reservation;
  } catch (error) {
    throw new Error(`Failed to retrieve reservation: ${error.message}`);
  }
}

/**
 * Creates a new reservation.
 * @param {Object} data - Data of the reservation to be created (reserve_end_on, User, Book).
 * @returns {Promise<sequelize.Model<ReservationAttributes>>} A promise that resolves to the created reservation object.
 */
export async function CreateReservationService({ reserve_end_on, User, Book }) {
  try {
    const reservation = await Reservation.create({ reserve_end_on });

    reservation.setUser(User);
    reservation.setBook(Book);

    reservation.save();

    return reservation;
  } catch (error) {
    throw new Error(`Failed to create reservation: ${error.message}`);
  }
}

/**
 * Updates a reservation by its ID.
 * @param {number} id - The ID of the reservation to update.
 * @param {Object} data - New data to update the reservation with (reserve_end_on).
 * @returns {Promise<sequelize.Model<ReservationAttributes>>} A promise that resolves to the updated reservation object.
 */
export async function UpdateReservationService(id, newData) {
  try {
    const reservation = await Reservation.findByPk(id);

    if (newData.reserve_end_on) {
      reservation.set("reserve_end_on", newData.reserve_end_on);
    }

    await reservation.save();

    return reservation;
  } catch (error) {
    throw new Error(
      `Failed to update reservation with ID ${id}: ${error.message}`
    );
  }
}

/**
 * Deletes a reservation by its ID.
 * @param {number} id - The ID of the reservation to delete.
 * @returns {Promise<boolean>} A promise that resolves to true if the reservation is deleted successfully, or false otherwise.
 */
export async function DeleteReservationService(id) {
  try {
    const reservation = await Reservation.findByPk(id);

    if (!reservation) {
      return false;
    }

    await reservation.destroy();
    return true;
  } catch (error) {
    throw new Error(
      `Failed to delete reservation with ID ${id}: ${error.message}`
    );
  }
}
