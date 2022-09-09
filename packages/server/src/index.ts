import {MikroORM} from "@mikro-orm/core";
import cors from 'cors';
import debug from "debug";
import Express from 'express';
import {mikroOrmConfig} from "./core/mikro-orm.config";

const d = debug('earthorigin.server');

d('Start Server');

MikroORM.init(mikroOrmConfig()).then(orm => {
    const express = Express();
    express.use(cors());
    express.use(Express.json());
});
