import express from 'express';
import cors from 'cors';
import config from '../app.config';

class ExpressLoader {

    public expressApp: express.Application;

    constructor(){
        this.expressApp = express();
        this.config();
    }

    private config(): void{
        const router = express.Router();
        this.expressApp.use(config.api.prefix, router);
        
        this.expressApp.enable('trust proxy');

        this.expressApp.use(cors());
        this.expressApp.use(express.json());

        this.expressApp.use((req, res, next) => {
            const err = new Error('Not Found');
            err['status'] = 404;
            next(err);
        });

        /// error handlers
        this.expressApp.use((err, req, res, next) => {
            /**
             * Handle 401 thrown by express-jwt library
             */
            if (err.name === 'UnauthorizedError') {
            return res
                .status(err.status)
                .send({ message: err.message })
                .end();
            }
            return next(err);
        });
        // eslint-disable-next-line no-unused-vars
        this.expressApp.use((err, req, res, next) => {
            res.status(err.status || 500);
            res.json({
            errors: {
                message: err.message,
            },
            });
        });
    }

}
export default new ExpressLoader().expressApp;
