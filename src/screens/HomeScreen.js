
import React, { PropTypes } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ListView, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import Footer from '../components/Footer';
import VisibleTodoList from '../components/VisibleTodoList';


class HomeScreen extends React.Component {
    id = 0;

    constructor(props) {
        super(props);
        this.onAddClick = this.onAddClick.bind(this);
    }

    static navigationOptions = {
        title: 'To Do Redux',
    };

    render() {
        return (
            <View style={styles.container}>
                <AddTodo onAddClick={this.onAddClick} />
                <VisibleTodoList />
                <Footer />
            </View>
        );
    }

    onAddClick(text) {
        this.props.dispatch({ type: 'ADD_TODO', id: this.id++, text: text });
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: 'rgba(0,0,0,0)',
    },
});

export default connect()(HomeScreen);

