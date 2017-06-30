import React, { PropTypes } from 'react';
import { TouchableHighlight, Button, Text, View, StyleSheet, ListView, TextInput } from 'react-native';


const AddTodo = ({ onAddClick }) => {
    let input;
    return (
        <View>
            <TextInput style={styles.input} onChangeText={(text) => {
                input = text;
            }}></TextInput>
            <Button title="Add todo" onPress={() => { onAddClick(input) }} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 19,
        borderBottomColor: '#000',
        borderBottomWidth: 5,
        borderStyle: 'solid',
    },

});

export default AddTodo;