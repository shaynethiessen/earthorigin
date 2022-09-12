import type {Collection} from "@mikro-orm/core";
import type {TagEntity} from "./Tag";

export type FilmEntityConstructor = {
	name: string;
	path: string;
	tags: Collection<TagEntity>;
};

export type FilmEntity = FilmEntityConstructor & {
	id: string;
	version: number;
};
