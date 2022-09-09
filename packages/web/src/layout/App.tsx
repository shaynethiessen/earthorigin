import debug from 'debug';
import type React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {pages} from '../pages';
import {MainMenu} from './MainMenu';
import {ScrollToTop} from './ScrollToTop';

const d = debug('earthorigin.web.layout.App');
function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<div style={{height: 'calc(100% - 40px)'}}>
				<MainMenu
					pages={pages.filter(page => page.mainMenu).sort((pageOne, PageTwo) => (pageOne.mainMenu?.order || 0) - (PageTwo.mainMenu?.order || 0))}
				/>
				<Routes>
					{pages.map(page => {
						const {route, name, Content} = page;
						return <Route path={`/${route}`} key={name} element={<Content />} />;
					})}
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
