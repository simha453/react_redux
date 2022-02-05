import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from './reducer';
const middelware= [thunk]

const Store = createStore(
    reducer,
     composeWithDevTools(applyMiddleware(...middelware))
)

export default Store;