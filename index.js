import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/router.js';

// cors as a middleware
app.use(cors());
// body parser
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Router);

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
DefaultData();

