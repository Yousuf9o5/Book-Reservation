declare type GetOptions = {
  limit: number;
  offset: number;
  search: string;
};

declare type ReservationsOptions = {
  limit: number;
  offset: number;
  search: { userId: number; bookId: number };
  filter: ReservationAttributes;
  show: "expired" | "not expired" | "";
};

declare type UserAttributes = {
  id: number;
  fullName: string;
  email: string;
  password: string;
  role: "user" | "admin";
};

declare type BookAttributes = {
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

declare type ReservationAttributes = {
  id: number;
  reserve_end_on: string;
  user_id: number;
  book_id: number;
  createdAt: string;
  updatedAt: string;
};
