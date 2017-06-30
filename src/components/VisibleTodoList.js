import React, { PropTypes } from 'react';
import { Button, Text, ListView } from 'react-native';
import Link from './Link';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import * as types from '../actions/actionTypes';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;

        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);

        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
    }
};


class VisibleTodoList extends React.Component {

    constructor() {
        super();
        this.onPressTodo = this.onPressTodo.bind(this);
    }

    onPressTodo(rowData) {
        this.props.dispatch({ type: types.TOGGLE_TODO, id: rowData.id });
    }

    render() {
        const props = this.props;
        let active = props.visibilityFilter === props.filter;

        return (
            <TodoList onPressTodo={this.onPressTodo} datasource={this.props.datasource} />
        );
    }
}
const dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
});



const mapStateToProps = (state) => {
    return {
        visibleTodos: getVisibleTodos(state.todos, state.visibilityFilter),
        datasource: dataSource.cloneWithRows(getVisibleTodos(state.todos, state.visibilityFilter)),
    };
};


export default connect(mapStateToProps)(VisibleTodoList);