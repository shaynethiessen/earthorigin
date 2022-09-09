import debug from "debug";
import {mikroOrmConfig} from "./core/mikro-orm.config";
import {MikroORM} from "@mikro-orm/core";
import cors from 'cors';
import Express from 'express';

const d = debug('earthorigin.server');

d('Start Server');

MikroORM.init(mikroOrmConfig()).then(orm => {
    const express = Express();
    express.use(cors());
    express.use(Express.json());
});
