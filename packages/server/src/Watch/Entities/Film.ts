import {Collection, Entity, OneToMany, PrimaryKey, Property} from '@mikro-orm/core';
import debug from 'debug';
import type {FilmEntityConstructor} from 'earthorigin-types';
import {v4} from 'uuid';
import {Tag} from "./Tag";

const d = debug('earthorigin.server.Users.Entities.User');

@Entity()
export class Film {
    @PrimaryKey({type: 'uuid'})
    id = v4();

    @Property({type: 'number', version: true})
    version = 1;

    @Property({type: 'text'})
    name: string;

    @Property({type: 'text'})
    path: string;

    @OneToMany(() => Tag, 'film', {nullable: true})
    tags = new Collection<Tag>(this);

    constructor({name, path}: FilmEntityConstructor) {
        this.name = name;
        this.path = path;
    }
}
