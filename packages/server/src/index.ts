import {EntityManager, MikroORM} from '@mikro-orm/core';
import cors from 'cors';
import debug from 'debug';
import {ActionTypeEnum} from 'earthorigin-types';
import type {ActionCall} from 'earthorigin-types';
import Express from 'express';
import type {Request, Response} from 'express';
import {actions} from './core/actions';
import {environment} from './core/environment';
import {mikroOrmConfig} from './core/mikro-orm.config';

const d = debug('earthorigin.server');

d('Start Server');

function doAction(req: Request, res: Response, em: EntityManager, action: ActionCall) {
	action(req.body.params, req.body.authorization, em)
		.then(value => {
			res.status(200).send(value);
		})
		.catch(() => res.status(500).send());
}

MikroORM.init(mikroOrmConfig()).then(orm => {
	const express = Express();
	express.use(cors());
	express.use(Express.json());

	express.use(Express.static('assets'));

	express.listen(environment.serverPort, () => {
		d(`⚡️[server]: Server is running at ${environment.dbDomain}:${environment.serverPort}`);
	});

	express.get('/', (req, res) => res.send('Earth Origin Server'));

	const em = orm.em.fork();

	actions.map(async action => {
		switch (action.type) {
			case ActionTypeEnum.get:
				express.get(`/${action.path}`, (req, res) => doAction(req, res, em, action.action));
				break;
			case ActionTypeEnum.post:
				express.post(`/${action.path}`, (req, res) => doAction(req, res, em, action.action));
				break;
			case ActionTypeEnum.put:
				express.put(`/${action.path}`, (req, res) => doAction(req, res, em, action.action));
				break;
			default:
				break;
		}

		return true;
	});
});
