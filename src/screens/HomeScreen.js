
import React, { PropTypes } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';

class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'To Do Redux',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Hola</Text>
            </View>
        );
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

export default HomeScreen;
