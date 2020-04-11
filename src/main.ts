import 'reflect-metadata';

import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import App from './app';
import { userRoute } from './api/user/user.route';
import { statusRoute } from './core/status.route';

new App([
            express.json(),
            express.urlencoded({ extended: true }),
            cors(),
            compression(),
            helmet() 
        ])
        .route(statusRoute.routes())
        .route(userRoute.routes())
    .start();
