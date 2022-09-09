import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Icon, Menu, MenuItem} from 'semantic-ui-react';
import type {Page} from '../pages';

interface Props {
	pages: Page[];
}

export function MainMenu(props: Props) {
	const {pathname} = useLocation();

	return (
		<Menu inverted attached>
			{props.pages.map(page => {
				if (page.mainMenu?.position === 'left')
					return (
						<MenuItem key={page.route} name={page.name} active={pathname === page.route}>
							<Link to={page.route}>{page.mainMenu.icon ? <Icon name={page.mainMenu.icon} color="yellow" size="large" /> : page.name}</Link>
						</MenuItem>
					);
			})}
			<Menu.Menu position="right">
				{props.pages.map(page => {
					if (page.mainMenu?.position === 'right')
						return (
							<MenuItem key={page.route} name={page.name} active={pathname === page.route}>
								<Link to={page.route}>{page.mainMenu.icon ? <Icon name={page.mainMenu.icon} color="yellow" size="large" /> : page.name}</Link>
							</MenuItem>
						);
				})}
			</Menu.Menu>
		</Menu>
	);
}
