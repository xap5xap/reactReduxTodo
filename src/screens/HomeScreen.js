
import React, { PropTypes } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ListView, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import * as types from '../actions/actionTypes';
import FilterLink from '../components/FilterLink';

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
        console.log('onPressTodo', rowData);
        this.props.dispatch({ type: types.TOGGLE_TODO, id: rowData.id });
        console.log('this.props constructor', this.props);
    }

    renderRowFunc(rowData) {
        color = rowData.completed ? 'red' : 'black';
        styleCompleted = {
            color: 'red',
            textDecorationLine: 'line-through'
        }
        return (
            <TouchableHighlight underlayColor='#ddd'
                onPress={() => this.onPressTodo(rowData)}>
                <View style={styles.row} >
                    <Text style={rowData.completed ? styleCompleted : {}} > {rowData.text}</Text>
                </View>
            </TouchableHighlight >
        );
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
                <FilterLink filter="SHOW_ALL" title="All" dispatch={this.props.dispatch} currentFilter={visibilityFilter} />
                <FilterLink filter="SHOW_ACTIVE" title="Active" dispatch={this.props.dispatch} currentFilter={visibilityFilter} />
                <FilterLink filter="SHOW_COMPLETED" title="Completed" dispatch={this.props.dispatch} currentFilter={visibilityFilter} />

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
    row: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        borderColor: '#D7D7D7',
        borderBottomWidth: 1,
    },
});

export default connect(mapStateToProps)(HomeScreen);

