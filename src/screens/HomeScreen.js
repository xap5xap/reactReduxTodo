
import React, { PropTypes } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ListView, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import * as types from '../actions/actionTypes';

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
            </View>
        );
    }

    onTodoClick() {
        this.props.dispatch({ type: 'ADD_TODO', id: this.id++, text: this.input });
    }
}

const mapStateToProps = (state) => {

    return {
        todos: state.todos,
        datasource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(state.todos)
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

