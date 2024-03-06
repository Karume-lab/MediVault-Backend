import { Server } from 'azle';
import express, { Request, Response } from 'express';

let db = {
    hello: ''
};

export default Server(() => {
    const app = express();

    app.use(express.json());

    app.get('/db', (req: Request, res: Response) => {
        res.json(db);
    });

    app.post('/db/update', (req: Request<any, any, typeof db>, res: Response) => {
        db = req.body;

        res.json(db);
    });

    app.use(express.static('/dist'));

    return app.listen();
});
