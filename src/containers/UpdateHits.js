import React from 'react';
import {connect} from 'react-redux';
import {requestHits} from "../actions";

const UpdateHits = ({getHits}) => (
    <button onClick={getHits}>fetch</button>
);

const mapDispatchToProps = dispatch => ({
    getHits: () => dispatch(requestHits())
});

export default connect(null, mapDispatchToProps)(UpdateHits);