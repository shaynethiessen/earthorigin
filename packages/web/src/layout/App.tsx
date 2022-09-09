import debug from 'debug';
import type React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {pages} from '../pages';
import {NavigationMenu} from './NavigationMenu';
import {ScrollToTop} from './ScrollToTop';
import {AppShell, MantineProvider} from '@mantine/core';

const d = debug('earthorigin.web.layout.App');
function App() {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<BrowserRouter>
				<ScrollToTop />
				<AppShell
					navbar={
						<NavigationMenu
							pages={pages.filter(page => page.mainMenu).sort((pageOne, PageTwo) => (pageOne.mainMenu?.order || 0) - (PageTwo.mainMenu?.order || 0))}
						/>
					}
				>
					<Routes>
						{pages.map(page => {
							const {route, name, Content} = page;
							return <Route path={`/${route}`} key={name} element={<Content />} />;
						})}
					</Routes>
				</AppShell>
			</BrowserRouter>
		</MantineProvider>
	);
}

export default App;
