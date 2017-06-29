
import React, { PropTypes } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ListView } from 'react-native';
import { NavigationActions } from 'react-navigation';

class HomeScreen extends React.Component {

    id = 0;
    input = '';
    datasource;

    constructor() {
        super();
        this.onAddTodoClick = this.onAddTodoClick.bind(this);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.datasource = ds;
    }

    componentDidMount() {
        const { store } = this.context;
        store.dispatch({ type: 'ADD_TODO', id: '2', text: 'xap' });
        console.log('estado mount home', store.getState());
        this.datasource = this.datasource.cloneWithRows(store.getState().todos);
    }

    static navigationOptions = {
        title: 'To Do Redux',
    };

    componentWillReceiveProps(nextProps) {
        const { store } = this.context;
        console.log('nextProps', nextProps);
        console.log('this.datasource ', this.datasource);
        console.log('estado mount home', store.getState());

    }

    renderRowFunc(rowData) {
        return (
            <View style={styles.row}>
                <Text >{rowData.text}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} onChangeText={(text) => {
                    this.input = text;
                }}></TextInput>
                <Button title="Add todo" onPress={this.onAddTodoClick} />
                <ListView
                    dataSource={this.datasource}
                    renderRow={this.renderRowFunc}
                />
            </View>
        );
    }

    onAddTodoClick() {
        console.log('click', this.input);
        const { store } = this.context;
        store.dispatch({ type: 'ADD_TODO', id: this.id++, text: this.input });
        console.log(store.getState().todos);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.datasource = ds.cloneWithRows(store.getState().todos);

    }
}

HomeScreen.contextTypes = {
    store: PropTypes.object
}

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

export default HomeScreen;
