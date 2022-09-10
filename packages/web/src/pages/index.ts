import type {TablerIcon} from '@tabler/icons';
import type {FunctionComponent} from 'react';
import {About} from './About';
import {Error} from './Error';
import {Home} from './Home';

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
