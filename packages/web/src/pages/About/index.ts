import {IconInfoCircle as icon} from '@tabler/icons';
import type {Page} from '../index';
import {Content} from './Content';

export const About: Page = {
	name: 'About',
	route: '/about',
	mainMenu: {
		order: 1,
		icon,
	},
	Content,
};
