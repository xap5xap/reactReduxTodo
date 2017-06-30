import React, { PropTypes } from 'react';
import { Button, Text } from 'react-native';
import Link from './Link';
import { connect } from 'react-redux';

class FilterLink extends React.Component {

    render() {
        const props = this.props;
        let active = props.visibilityFilter === props.filter;

        return (
            <Link active={active} title={props.title} onClick={() => {
                props.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: props.filter });
            }
            } />
        );
    }
}


const mapStateToProps = (state) => {
    return {
        visibilityFilter: state.visibilityFilter
    };
};


export default connect(mapStateToProps)(FilterLink);