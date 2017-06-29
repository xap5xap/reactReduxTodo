import * as types from '../actions/actionTypes';

export default function visibilityFilter(state = 'SHOW_ALL', action) {
    switch (action.type) {
        case types.SET_VISIBILITY_FILTER:
        console.log('aca', action);
            return  action.filter;
            

        default:
            return state;
    }
}