import type {FilmEntity} from "./Film";

export type TagEntityConstructor = {
	name: string;
	film: FilmEntity;
};

export type TagEntity = TagEntityConstructor & {
	id: string;
	version: number;
};
