import {Entity, PrimaryKey, Property} from '@mikro-orm/core';
import debug from 'debug';
import type {UserEntityConstructor} from 'earthorigin-types';
import {v4} from 'uuid';

const d = debug('earthorigin.server.Users.Entities.User');

@Entity()
export class User {
    @PrimaryKey({type: 'uuid'})
    id = v4();

    @Property({type: 'number', version: true})
    version = 1;

    @Property({type: 'text'})
    firstName: string;

    @Property({type: 'text'})
    lastName: string;

    @Property({type: 'text', unique: true})
    email: string;

    @Property({type: 'text'})
    password: string;

    @Property({type: 'date'})
    joined = new Date();

    constructor({firstName, lastName, email, password}: UserEntityConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}
