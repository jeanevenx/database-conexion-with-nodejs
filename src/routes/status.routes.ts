import { Router, Request, Response, NextFunction} from "express";
import StatusCodes from "http-status-codes";

const statusRoute = Router();



statusRoute.get('/', (req: Request, res: Response, next: NextFunction) =>{
    res.send('Bem vindo!!');
})

statusRoute.get('/status', (req: Request, res: Response, next: NextFunction) =>{
    res.sendStatus(StatusCodes.OK);
})

export default statusRoute;
