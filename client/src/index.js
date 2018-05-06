import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './store/reducers/rootReducer';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

const app = (
    <Provider store={store}>
            <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
