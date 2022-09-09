import type {Page} from '../index';
import {Content} from './Content';
import {IconHome2 as icon} from '@tabler/icons';

export const Home: Page = {
	name: 'Home',
	route: '/',
	mainMenu: {
		order: 1,
		icon,
	},
	Content,
};
