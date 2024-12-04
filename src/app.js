
import express from 'express';
import bodyParser from 'body-parser';
import schoolRoutes from './routes/schoolRoutes.js';
import dotenv from 'dotenv';


dotenv.config();

const app = express();


app.use(bodyParser.json());


app.use('/api/schools', schoolRoutes);

export default app;
