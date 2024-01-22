import { db } from './db';
/*  export const getTodo = (req: Request, res: Response) => {
    res.send("You will add a todo from here.");
} */ /* without Handler */
export const addTodo = (req, res) => {
    /* res.send("You will add a todo from here.");  */
    // with Handler
    const /* body */ { text } = req.body;
    const todoItem = {
        isDone: false,
        text,
        id: Math.random().toString()
    };
    db.push(todoItem);
    res.status(200).send({
        message: 'It has been added successfully.'
    });
};
