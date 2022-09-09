import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import type {Page} from '../pages';
import {Navbar, Button} from '@mantine/core';

interface Props {
	pages: Page[];
}

export function NavigationMenu(props: Props) {
	const {pathname} = useLocation();

	return (
		<Navbar width={{base: 300}} height="100vh">
			<Navbar.Section>
				{props.pages.map(page => {
					const Icon = page.mainMenu?.icon;

					return (
						<Link to={page.route} key={page.route}>
							<Button leftIcon={Icon ? <Icon /> : undefined} component="a" variant="subtle" fullWidth disabled={pathname === page.route}>
								{page.name}
							</Button>
						</Link>
					);
				})}
			</Navbar.Section>
		</Navbar>
	);
}
