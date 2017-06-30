import React, { PropTypes } from 'react';
import { TouchableHighlight, Text, View, StyleSheet, ListView } from 'react-native';
import Todo from './Todo';


const TodoList = ({ datasource, onPressTodo }) => {
    const renderRowFunc = (rowData) => {
        console.log('rowData', rowData);
        return (
            <Todo completed={rowData.completed} text={rowData.text} onClick={() => onPressTodo(rowData)} />
        );
    }

    return (
        <ListView
            dataSource={datasource}
            renderRow={renderRowFunc}
        />
    );
};

export default TodoList;