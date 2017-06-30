import * as types from './actionTypes';

let id = 0;
export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        id: id++,
        text
    }
}