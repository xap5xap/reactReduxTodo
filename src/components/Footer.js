import React, { PropTypes } from 'react';
import { TouchableHighlight, Button, Text, View, StyleSheet, ListView, TextInput } from 'react-native';
import FilterLink from './FilterLink';

const Footer = ({ visibilityFilter, onFilterClick }) => {
    let input;
    return (
        <View>
            <FilterLink filter="SHOW_ALL" onClick={() => onFilterClick('SHOW_ALL')} title="All" currentFilter={visibilityFilter} />
            <FilterLink filter="SHOW_ACTIVE" onClick={() => onFilterClick('SHOW_ACTIVE')} title="Active" currentFilter={visibilityFilter} />
            <FilterLink filter="SHOW_COMPLETED" onClick={() => onFilterClick('SHOW_COMPLETED')} title="Completed" currentFilter={visibilityFilter} />
        </View>
    );
};


export default Footer;