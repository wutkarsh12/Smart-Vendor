const express = require('express');
import bodyParser from 'body-parser';
import cors from 'cors';
const dotenv = require('dotenv');

import Connection from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js';


const app = express();


dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Router);


const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

DefaultData();