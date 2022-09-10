import {IconHome2 as icon} from '@tabler/icons';
import type {Page} from '../index';
import {Content} from './Content';

export const Home: Page = {
	name: 'Home',
	route: '/',
	mainMenu: {
		order: 1,
		icon,
	},
	Content,
};
