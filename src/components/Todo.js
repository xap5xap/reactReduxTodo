import React, { PropTypes } from 'react';
import { TouchableHighlight, Text, View , StyleSheet} from 'react-native';

const Todo = ({ rowData, onClick }) => {

    color = rowData.completed ? 'red' : 'black';
    styleCompleted = {
        color: 'red',
        textDecorationLine: 'line-through'
    }
    return (
        <TouchableHighlight underlayColor='#ddd'
            onPress={onClick}>
            <View style={styles.row} >
                <Text style={rowData.completed ? styleCompleted : {}} > {rowData.text}</Text>
            </View>
        </TouchableHighlight >
    );
};

const styles = StyleSheet.create({
   
    row: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        borderColor: '#D7D7D7',
        borderBottomWidth: 1,
    },
});


export default Todo;