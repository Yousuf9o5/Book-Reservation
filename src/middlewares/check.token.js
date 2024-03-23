import { error } from "../utils/response.util";
import { verify } from "jsonwebtoken";
import dotenv from "dotenv";
import UserModel from "../../db/models/user.model";

dotenv.config();

const secretKey = process.env.SECRET_KEY;

async function checkToken(req, res, next) {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) throw "Not Authorized";

    const decodeData = verify(token, secretKey);

    if (!decodeData) throw "Not Authorized";

    const user = await UserModel.findByPk(decodeData.id);

    if (!user) throw "Not Authorized";

    req.userId = decodeData.id;

    next();
  } catch (err) {
    return res.status(403).json(error(403, "Not Authorized"));
  }
}

export default checkToken;
