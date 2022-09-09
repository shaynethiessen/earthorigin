import {Home} from './Home';
import {Error} from './Error';
import type {SemanticICONS} from 'semantic-ui-react';
import type {FunctionComponent} from 'react';

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
