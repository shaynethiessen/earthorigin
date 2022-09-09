import type {FunctionComponent} from 'react';
import {Error} from './Error';
import {Home} from './Home';
import type {TablerIcon} from '@tabler/icons';
import {About} from './About';

export type Page = {
	name: string;
	route: string;
	mainMenu?: {
		order: number;
		icon?: TablerIcon;
	};
	Content: FunctionComponent;
};

export const pages: Page[] = [Home, About, Error];
