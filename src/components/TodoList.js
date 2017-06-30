import React, { PropTypes } from 'react';
import { TouchableHighlight, Text, View, StyleSheet, ListView } from 'react-native';
import Todo from './Todo';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/addTodoActions';


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

const TodoList = (props) => {
    const { datasource } = props;
    const renderRowFunc = (rowData) => {

        console.log('rowData', rowData);
        console.log('props', props);
        return (
            <Todo completed={rowData.completed} text={rowData.text} onClick={() => props.onPressTodo(rowData.id)} />
        );
    }

    return (
        <ListView
            dataSource={datasource}
            renderRow={renderRowFunc}
        />
    );
};
const dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
});


const mapStateToProps = (state) => {
    return {
        visibleTodos: getVisibleTodos(state.todos, state.visibilityFilter),
        datasource: dataSource.cloneWithRows(getVisibleTodos(state.todos, state.visibilityFilter)),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPressTodo: (id) => {
            dispatch(toggleTodo(id));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);