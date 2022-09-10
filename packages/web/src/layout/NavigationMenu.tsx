import {Navbar, Button, Divider, Title, Text} from '@mantine/core';
import {IconMapPin} from '@tabler/icons';
import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import type {Page} from '../pages';

interface Props {
	pages: Page[];
}

export function NavigationMenu(props: Props) {
	const {pathname} = useLocation();

	return (
		<Navbar width={{base: 300}} height="100vh">
			<Navbar.Section style={{paddingTop: '20px', paddingBottom: '20px'}}>
				<Title size="h3" align="center">
					Earth Origin
				</Title>
			</Navbar.Section>
			<Divider />
			<Navbar.Section grow style={{paddingTop: '20px', paddingBottom: '20px'}}>
				{props.pages.map(page => {
					const Icon = page.mainMenu?.icon;

					return (
						<Link to={page.route} key={page.route}>
							<Button
								leftIcon={Icon ? <Icon /> : undefined}
								component="a"
								variant="subtle"
								fullWidth
								styles={() => ({
									root: {
										borderRadius: 0,
										opacity: pathname === page.route ? 0.5 : undefined,
									},
								})}
							>
								{page.name}
							</Button>
						</Link>
					);
				})}
			</Navbar.Section>
			<Navbar.Section style={{paddingTop: '20px', paddingBottom: '20px'}}>
				<Text align="center" size="sm">
					<IconMapPin size="14" /> Unknown, Canada
				</Text>
			</Navbar.Section>
		</Navbar>
	);
}
