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

export async function GetBookService(id) {
  return await Book.findByPk(id);
}

export async function CreateBookService({ name, description }) {
  const book = await Book.create({ name, description });
  await book.save();

  return book;
}

export async function UpdateBookService(id, { name, description }) {
  const book = await Book.findByPk(id);

  if (name) {
    book.set("name", name);
  }

  if (description) {
    book.set("description", description);
  }

  await book.save();

  return book;
}
