import React, { PropTypes } from 'react';
import { Button, Text } from 'react-native';
import { connect } from 'react-redux';

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

const mapStateToLinkProps = (state, ownProps) => {
    return {
        active: state.visibilityFilter === ownProps.filter
    };
};

const mapDispatchToLinkProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch({ type: 'SET_VISIBILITY_FILTER', filter: ownProps.filter });
        }
    };
};

export default connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link);
