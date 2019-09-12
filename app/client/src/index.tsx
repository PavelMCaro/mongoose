import * as React from 'react';
import * as ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { FormFeature } from './view/form';

const store = configureStore();

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(
    <Provider store={store}>
        <FormFeature />
    </Provider>, root
);