import React, { PropTypes } from 'react';
import { Button, Text } from 'react-native';

const Link = ({ active, title, onClick }) => {

    if (active) {
        return (
            <Text>{title}</Text>
        );
    }
    return (
        <Button title={title} onPress={onClick}></Button>
    );
};


export default Link;