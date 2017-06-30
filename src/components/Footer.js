import React, { PropTypes } from 'react';
import { TouchableHighlight, Button, Text, View, StyleSheet, ListView, TextInput } from 'react-native';
import Link from './Link';

const Footer = () => {
    let input;
    return (
        <View>
            <Link filter="SHOW_ALL" title="All" />
            <Link filter="SHOW_ACTIVE" title="Active" />
            <Link filter="SHOW_COMPLETED" title="Completed" />
        </View>
    );
};


export default Footer;