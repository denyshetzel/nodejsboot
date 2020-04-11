import express from 'express';

export class StatusRoute{

    private router: express.Router;

    constructor(){
        this.router = express.Router();
    }
    
    public routes(): express.Router{
        this.router.get('/status', (req, res) => {
            res.status(200).send('ok');
        });
        
        this.router.head('/status', (req, res) => {
            res.status(200).end('ok');
        });
        return this.router;
    }
}
export const statusRoute = new StatusRoute();