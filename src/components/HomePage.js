import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as dataActions from '../actions/dataActions';

const HomePage = ({ getData, topics }) => {
  const listTopics = topic => {
    return (
      <li key={topic} onClick={() => getData(topic)}>
        <Link to="/train">{topic}</Link>
      </li>
    );
  };
  return (
    <div>
      <h3>Available Topics</h3>
      <ul>
        { topics ? topics.map(listTopics): null}
      </ul>
    </div>
  );
};

HomePage.propTypes = {
  getData: PropTypes.func.isRequired,
  topics: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    topics: state.topics
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getData: whichMockData => dispatch(dataActions.getData(whichMockData))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
