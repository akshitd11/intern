import express from 'express';
// import * as cors from 'cors';
import helmet from 'helmet';

const app : express.Application = express();
// app.use(cors());
app.use(express.json());
app.use(helmet()); //Use before adding Routers
// TODO - Add more middleware

export { app }