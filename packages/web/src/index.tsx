import debug from 'debug';
import type React from 'react';
import ReactDOM from 'react-dom';
import App from './core/App';

const d = debug('earthorigin.web');

ReactDOM.render(<App />, document.getElementById('root'));
