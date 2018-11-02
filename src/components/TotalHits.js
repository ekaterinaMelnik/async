import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const TotalHits = ({totalHits, isFetching}) => (
    <section>
        {isFetching ?
            <p>Loading...</p> :
            <h1>Total hits: {totalHits}</h1>
        }
    </section>
);

TotalHits.propTypes = {
    totalHits: PropTypes.number.isRequired,
    isFetching: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    totalHits: state.totalHits,
    isFetching: state.isFetching,
});

export default connect(mapStateToProps)(TotalHits)