import type {FunctionComponent} from 'react';
import type {SemanticICONS} from 'semantic-ui-react';
import {Error} from './Error';
import {Home} from './Home';

export type Page = {
	name: string;
	route: string;
	mainMenu?: {
		order: number;
		icon?: SemanticICONS;
		position: 'left' | 'right';
	};
	Content: FunctionComponent;
};

export const pages: Page[] = [Home, Error];
