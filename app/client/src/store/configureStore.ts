import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            form: formReducer
        }),
        composeEnhancer(
            applyMiddleware(
            thunk,
        ))
    );
    return store;
}
