import { createStore } from 'redux';
import  todoAppReducer  from '../reducers/todoAppReducer';

export default function configureStore() {
    return createStore(todoAppReducer);
}