import debug from 'debug';
import type React from 'react';
import {BrowserRouter, Routes} from 'react-router-dom';

const d = debug('terrene.web.App');
function App() {
	return (
		<BrowserRouter>
			<div style={{height: 'calc(100% - 40px)'}}>
				Earth Origin
				<Routes></Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
