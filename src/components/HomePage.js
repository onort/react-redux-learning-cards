import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as dataActions from '../actions/dataActions';

const HomePage = ({ getData, topics }) => {
  const handleClick = (topicName) => {
    getData(topicName);
    browserHistory.push(`/train/${topicName}`);
  };

  const listTopics = topic => {
    return (
      <div key={topic.id} className="topic" onClick={() => handleClick(topic.name)}>
        <span className="topic-name">{topic.name}</span>
        <span className="topic-length">{topic.length} <span className="smaller">words</span></span>
        <span className="topic-taken">{topic.takenOn ? topic.takenOn : null}</span>
      </div>
    );
  };

  return (
    <div className="topics-container">
      <h3>Available Topics</h3>
      { topics ? topics.map(listTopics): null}
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
