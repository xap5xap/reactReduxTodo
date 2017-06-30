import React, { PropTypes } from 'react';
import { TouchableHighlight, Button, Text, View, StyleSheet, ListView, TextInput } from 'react-native';
import FilterLink from './FilterLink';

const Footer = () => {
    let input;
    return (
        <View>
            <FilterLink filter="SHOW_ALL" title="All" />
            <FilterLink filter="SHOW_ACTIVE" title="Active" />
            <FilterLink filter="SHOW_COMPLETED" title="Completed" />
        </View>
    );
};


export default Footer;