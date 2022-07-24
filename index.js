import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
import Connection from './database/db.js';



const port = process.env.PORT;
// database connection statements
const USERNAME = process.env.DB_USER;
const PASSWORD = process.env.DB_PASS;

Connection(USERNAME, PASSWORD);

app.use('/', (req, res) => {
    res.send('Server runnig on browser')
})

app.listen(port, () => console.log(
    `server is listenting on port http://localhost:${port}`
));

