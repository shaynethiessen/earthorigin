import {Entity, ManyToOne, PrimaryKey, Property} from '@mikro-orm/core';
import debug from 'debug';
import type {TagEntityConstructor} from 'earthorigin-types';
import {v4} from 'uuid';
import {Film} from "./Film";

const d = debug('earthorigin.server.Users.Entities.User');

@Entity()
export class Tag {
	@PrimaryKey({type: 'uuid'})
	id = v4();

	@Property({type: 'number', version: true})
	version = 1;

	@Property({type: 'text'})
	name: string;

	@ManyToOne('Film')
	film: Film;

	constructor({name, film}: TagEntityConstructor) {
		this.name = name;
		this.film = film;
	}
}
