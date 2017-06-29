
import * as types from '../actions/actionTypes';
import todoReducer from './todoReducer';
import visibilityFilterReducer from './visibilityFilterReducer';
import todosReducer from './todosReducer';

export default function todoAppReducer(state = {}, action) {
    return {
        todos: todosReducer(state.todos, action),
        visibilityFilter: visibilityFilterReducer(state.visibilityFilter, action)
    };
}