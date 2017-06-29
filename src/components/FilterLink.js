import React, { PropTypes } from 'react';
import { Button, Text } from 'react-native';

const FilterLink = ({ filter, title, currentFilter, dispatch }) => {

    if (filter === currentFilter) {
        return (
            <Text>{title}</Text>
        );
    }
    return (
        <Button title={title} onPress={() => {
            dispatch({ type: 'SET_VISIBILITY_FILTER', filter })
        }}></Button>
    );
};

FilterLink.propTypes = {
    title: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
};

export default FilterLink;