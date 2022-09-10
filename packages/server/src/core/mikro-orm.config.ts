import type {Options} from '@mikro-orm/core';
import {entities} from './entities';
import {environment} from './environment';

export function mikroOrmConfig(): Options {
	return {
		entities,
		clientUrl: `postgres://${environment.dbUsername}:${environment.dbPassword}@${environment.dbDomain}:${environment.dbPort}/${environment.dbServer}`,
		type: 'postgresql',
		debug: process.env.POSTGRESQL_LOGGING === 'true',
		discovery: {
			disableDynamicFileAccess: true,
		},
		driverOptions:
			process.env.POSTGRESQL_SSL === 'true'
				? {
						connection: {
							ssl: process.env.POSTGRESQL_REJECT_UNAUTHORIZED
								? {
										rejectUnauthorized: process.env.POSTGRESQL_REJECT_UNAUTHORIZED === 'true',
								  }
								: true,
						},
				  }
				: {},
	};
}
