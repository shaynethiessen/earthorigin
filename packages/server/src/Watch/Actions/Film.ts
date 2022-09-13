import type {EntityManager} from '@mikro-orm/core';
import type {FilmFindParams, FilmFindReturn} from "earthorigin-types";
import {Film} from "../Entities";
import {ActionTypeEnum} from "earthorigin-types";

export const Find = {
    path: 'Watch.Actions.Film.Find',
    type: ActionTypeEnum.post,
    action: async (params: FilmFindParams, authorization: unknown, em: EntityManager): Promise<FilmFindReturn> => {
        return em.find(Film, {}, {populate: true});
    },
};
