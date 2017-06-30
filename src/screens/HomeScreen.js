
import React, { PropTypes } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ListView, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import * as types from '../actions/actionTypes';
import FilterLink from '../components/FilterLink';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';
import Footer from '../components/Footer';

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

class HomeScreen extends React.Component {
    id = 0;
    input = '';

    constructor(props) {
        super(props);
        this.onAddClick = this.onAddClick.bind(this);
        this.onPressTodo = this.onPressTodo.bind(this);

    }

    static navigationOptions = {
        title: 'To Do Redux',
    };

    onPressTodo(rowData) {
        this.props.dispatch({ type: types.TOGGLE_TODO, id: rowData.id });
    }

    render() {

        return (
            <View style={styles.container}>
                <AddTodo onAddClick={this.onAddClick} />
                <TodoList onPressTodo={this.onPressTodo} datasource={this.props.datasource} />
                <Footer />
            </View>
        );
    }

    onAddClick(text) {
        this.props.dispatch({ type: 'ADD_TODO', id: this.id++, text: text });
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


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: 'rgba(0,0,0,0)',
    },
});

export default connect(mapStateToProps)(HomeScreen);

