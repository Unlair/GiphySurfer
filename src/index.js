import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import './styles/index.css';
import configureStore from './store/configure.store'
import App from './containers/App.container';
import registerServiceWorker from './registerServiceWorker'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
