import express from "express";

import chalk from "chalk";

import { addTodo } from "./addTodo";
import { getTodo } from "./getTodo";

const app = express();

/* app.get('/', getTodo); */

app.use(express.json());

app.post('/add', addTodo);

app.get('/todo', getTodo);

app.listen(4000, () => {
    console.log(chalk.green('Server is up on http://localhost:4000'));
})

