import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as dataActions from '../actions/dataActions';

const HomePage = ({ getData, info, resetCards, topics }) => {
  const handleClick = (topicName) => {
    if (info.activeList !== topicName) {
      resetCards();
      getData(topicName); 
    }
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
  info: PropTypes.object.isRequired,
  resetCards: PropTypes.func.isRequired,
  topics: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    info: state.info,
    topics: state.topics
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getData: whichMockData => dispatch(dataActions.getData(whichMockData)),
    resetCards: () => dispatch(dataActions.resetData())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
