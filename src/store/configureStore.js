import { createStore } from 'redux';
import todoAppReducer from '../reducers/todoAppReducer';
import rootReducer from '../reducers';

export default function configureStore() {
    // return createStore(todoAppReducer);//with reducer composition patern
    return createStore(rootReducer);//with combinereducer function
}