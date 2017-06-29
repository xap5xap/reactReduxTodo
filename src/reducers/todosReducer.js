import * as types from '../actions/actionTypes';
import todoReducer from './todoReducer';

export default function todosReducer(state = [], action) {

    switch (action.type) {
        case types.ADD_TODO:
            return [
                ...state,
                todoReducer(undefined, action)
            ];

        case types.TOGGLE_TODO:
            return state.map(todo => {
                return todoReducer(todo, action)
            });


        default:
            return state;
    }

}