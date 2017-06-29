
import React, { PropTypes } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ListView, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import * as types from '../actions/actionTypes';
import FilterLink from '../components/FilterLink';
import Todo from '../components/Todo';

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
        this.onTodoClick = this.onTodoClick.bind(this);
        // this.onPressTodo = this.onPressTodo.bind(this);
        this.renderRowFunc = this.renderRowFunc.bind(this);

        console.log('this.props constructor', this.props);
    }

    static navigationOptions = {
        title: 'To Do Redux',
    };

    onPressTodo(rowData) {
        this.props.dispatch({ type: types.TOGGLE_TODO, id: rowData.id });
    }

    renderRowFunc(rowData) {
        return (
            <Todo rowData={rowData} onClick={() => this.onPressTodo(rowData)} />
        );

    }

    filterTodos(filter) {
        this.props.dispatch({ type: 'SET_VISIBILITY_FILTER', filter });
    }

    render() {
        const { visibilityFilter } = this.props;

        return (
            <View style={styles.container}>
                <TextInput style={styles.input} onChangeText={(text) => {
                    this.input = text;
                }}></TextInput>
                <Button title="Add todo" onPress={this.onTodoClick} />

                <ListView
                    dataSource={this.props.datasource}
                    renderRow={this.renderRowFunc}
                />
                <FilterLink filter="SHOW_ALL" onClick={() => this.filterTodos('SHOW_ALL')} title="All" currentFilter={visibilityFilter} />
                <FilterLink filter="SHOW_ACTIVE" onClick={() => this.filterTodos('SHOW_ACTIVE')} title="Active" currentFilter={visibilityFilter} />
                <FilterLink filter="SHOW_COMPLETED" onClick={() => this.filterTodos('SHOW_COMPLETED')} title="Completed" currentFilter={visibilityFilter} />

            </View>
        );
    }

    onTodoClick() {
        this.props.dispatch({ type: 'ADD_TODO', id: this.id++, text: this.input });
    }
}

const dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
});

const mapStateToProps = (state, ownProps) => {
    console.log('state', state);
    console.log('ownProps', ownProps);
    return {
        visibleTodos: getVisibleTodos(state.todos, state.visibilityFilter),
        datasource: dataSource.cloneWithRows(getVisibleTodos(state.todos, state.visibilityFilter)),
        visibilityFilter: state.visibilityFilter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id, text) => {
            dispatch({
                type: 'ADD_TODO',
                id,
                text,
            });
        }
    };
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    input: {
        height: 19,
        borderBottomColor: '#000',
        borderBottomWidth: 5,
        borderStyle: 'solid',
    },

});

export default connect(mapStateToProps)(HomeScreen);

