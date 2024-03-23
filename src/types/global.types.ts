declare type UserAttributes = {
  id: string | number;
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
