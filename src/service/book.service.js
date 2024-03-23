import Book from "../../database/schemas/book.schema.js";

/**
 * Retrieves paginated list of books.
 * @param {Object} options - Options for pagination (limit, offset).
 * @returns {Promise<{ books: Book[], totalPages: number }>} A promise that resolves to an object containing the list of books and total pages.
 */
export async function GetBooksService({ limit, offset }) {
  try {
    const { count } = await Book.findAndCountAll();
    const totalPages = Math.ceil(count / limit);

    const books = await Book.findAll({
      limit: limit,
      offset: offset - 1,
    });

    return { books, totalPages };
  } catch (error) {
    throw new Error(`Failed to retrieve books: ${error.message}`);
  }
}

/**
 * Retrieves a book by its ID.
 * @param {number | string} id - The ID of the book to retrieve.
 * @returns {Model<any, any>} A promise that resolves to the book object if found, or null otherwise.
 */
export async function GetBookService(id) {
  try {
    return await Book.findByPk(id);
  } catch (error) {
    throw new Error(`Failed to retrieve book with ID ${id}: ${error.message}`);
  }
}

/**
 * Creates a new book.
 * @param {Object} data - Data of the book to be created (name, description).
 * @returns {Promise<Book>} A promise that resolves to the created book object.
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
 * @param {Object} data - New data to update the book with (name, description).
 * @returns {Promise<Book>} A promise that resolves to the updated book object.
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
