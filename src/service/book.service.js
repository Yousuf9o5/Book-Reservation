import { Op } from "sequelize";
import Book from "../../database/schemas/book.schema.js";

/**
 * Retrieves paginated list of books.
 * @param {GetOptions} options - Options for pagination (limit, offset).
 * @returns {Promise<{ books: BookAttributes[], totalPages: number }>} A promise that resolves to an object containing the list of books and total pages.
 */
export async function GetBooksService({ limit, offset, search }) {
  try {
    const where = {
      [Op.or]: [
        { name: { [Op.like]: `${search}%` } },
        { description: { [Op.like]: `${search}%` } },
      ],
    };

    const { count, rows: books } = await Book.findAndCountAll({
      limit: limit,
      offset: offset - 1,
      where,
    });

    const totalPages = Math.round(count / limit);

    return { books, totalPages };
  } catch (error) {
    throw new Error(`Failed to retrieve books: ${error.message}`);
  }
}

/**
 * Retrieves a book by its ID.
 * @param {number | string} id - The ID of the book to retrieve.
 * @returns {Promise<sequelize.Model<BookAttributes> | null>} A promise that resolves to the book object if found, or null otherwise.
 */
export async function GetBookService(id) {
  try {
    return await Book.findByPk(id);
  } catch (error) {
    throw new Error(`Failed to retrieve book with ID ${id}: ${error.message}`);
  }
}

/**
 * Retrieves a book based on the provided fields.
 * @param {BookAttributes} fields - The fields to match when retrieving the book.
 * @returns {Promise<BookAttributes | null>} A promise that resolves to the book object if found, or null otherwise.
 */
export async function GetBookByFieldsService(fields) {
  try {
    return await Book.findOne({ where: { ...fields } });
  } catch (error) {
    throw new Error(`Failed to retrieve: ${error.message}`);
  }
}

/**
 * Creates a new book.
 * @param {BookAttributes} data - Data of the book to be created (name, description).
 * @returns {Promise<sequelize.Model<BookAttributes> | null>} A promise that resolves to the created book object.
 */
export async function CreateBookService({ name, description }) {
  try {
    const book = await Book.create({ name, description });
    return book;
  } catch (error) {
    throw new Error(`Failed to create book: ${error.message}`);
  }
}

/**
 * Updates a book by its ID.
 * @param {number} id - The ID of the book to update.
 * @param {BookAttributes} data - New data to update the book with (name, description).
 * @returns {Promise<sequelize.Model<BookAttributes> | null>} A promise that resolves to the updated book object.
 */
export async function UpdateBookService(id, newData) {
  try {
    const book = await Book.findByPk(id);

    if (newData.name) {
      book.set("name", newData.name);
    }

    if (newData.description) {
      book.set("description", newData.description);
    }

    await book.save();

    return book;
  } catch (error) {
    throw new Error(`Failed to update book with ID ${id}: ${error.message}`);
  }
}
