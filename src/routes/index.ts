import {Router, Application, Request, Response} from 'express';
import { testRouter } from './test';

let indexRouter: Router = Router();

indexRouter.get('/', (req: Request, res: Response) => {
    res.send({response: "Success", data: {message: "HELLO WORLD"}});
});

export const register = (app: Application) => {
    app.get('/', indexRouter);
    app.use('/test', testRouter);
};

