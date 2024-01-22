import { Handler } from "express";
import { SuccessResponse, TodoItem, TodoRequestBody } from "./types";
import { db } from './db';

/*  export const getTodo = (req: Request, res: Response) => {       
    res.send("You will add a todo from here.");     
} */    /* without Handler */

export const addTodo: Handler = (req, res) => {      
    /* res.send("You will add a todo from here.");  */
    // with Handler

    const /* body */ { text }: TodoRequestBody = req.body;
    const todoItem: TodoItem = {
        isDone: false,
        text,
        id: Math.random().toString()
    }
    db.push(todoItem);
    res.status(200).send({
        message: 'It has been added successfully.'        
    } as SuccessResponse)
}











