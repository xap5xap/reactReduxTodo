import * as types from './actionTypes';

let id = 0;
export function addTodo(text) {
    return {
        type: types.ADD_TODO,
        id: id++,
        text
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: types.SET_VISIBILITY_FILTER,
        filter
    }
}

export function toggleTodo(id) {
    return {
        type: types.TOGGLE_TODO,
        id
    }
}