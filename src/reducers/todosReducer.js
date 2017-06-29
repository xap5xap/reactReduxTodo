
import * as types from '../actions/actionTypes';
// import { todoReducer } from './todoReducer';

export default function todosReducer(state = [], action) {

    switch (action.type) {
        case types.ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];

        case types.TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed
                };
            });


        default:
            return state;
    }

}