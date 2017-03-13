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
      <li key={topic.id} className="topic" onClick={() => handleClick(topic.name)}>
        <span className="topic-name">{topic.name}</span>
        <div className="topic-info">
          <span className="word-count">{topic.length}</span>
          <span className="word-text">words</span>
        </div>
        <div className="clearfix" />
      </li>
    );
  };

  return (
    <div>
      <div className="topics-title">
        <h3>Available Lists</h3>
        <p>Pick a list and begin training.</p>
        <p className="smaller">You can end your training at any time by clicking close button on word cards.</p>
      </div>
      <div className="topcis-container">
        <ul className="topic-list">
          { topics ? topics.map(listTopics): null}
        </ul>
      </div>
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
