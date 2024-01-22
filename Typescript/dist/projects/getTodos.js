import { db } from "./db";
export const getTodo = (req, res) => {
    res.status(200).json(db);
};
