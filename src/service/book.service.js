import Book from "../../database/schemas/book.schema.js";

export async function GetBooksService({ limit, offset }) {
  const { count } = await Book.findAndCountAll();
  const totalPages = Math.ceil(count / limit) + 1;

  const books = await Book.findAll({
    limit: limit,
    offset: offset - 1,
  });

  return { books, totalPages };
}

export async function CreateBookService({ name, description }) {
  return await Book.create({ name, description });
}

export async function GetBookService(id) {
  return await Book.findByPk(id);
}
