import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory, withRouter } from 'react-router';
import { resetData } from '../../actions/dataActions';
import * as infoActions from '../../actions/infoActions';

import AnswerCard from '../card/AnswerCard';
import Loading from '../common/Loading';
import QuestionCard from '../card/QuestionCard';
import TrainingStats from './TrainingStats';

class TrainPage extends Component {
  constructor(props) {
    super(props);

    this.handleMark = this.handleMark.bind(this);
    this.routerWillLeave = this.routerWillLeave.bind(this);
  }

  componentDidMount() {
    // https://github.com/ReactTraining/react-router/blob/master/docs/guides/ConfirmingNavigation.md
    this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
  }

  componentWillReceiveProps(nextProps) {
    const { currentCard, length } = nextProps.info;
    if (currentCard >= length) {
      browserHistory.push('/finished');
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { currentCard, length } = nextProps.info;
    if (currentCard >= length) return false;
    return true;
  }

  routerWillLeave(nextLocation) {
    // return false to prevent a transition w/o prompting the user,
    // or return a string to allow the user to decide:
    if (nextLocation.pathname !== '/finished')
      return 'This will reset your training progress';
  }

  handleMark(card, mark) {
    this.props.handleMark(card, mark);
  }

  render() {
    const { cards, info, handleReveal } = this.props;
    const cardToRender = cards.length > 1 && info.answered === false ? 
      <QuestionCard card={cards[info.currentCard]} handleReveal={handleReveal} /> : 
      <AnswerCard card={cards[info.currentCard]} handleMark={this.handleMark} />;
    return (
      <div>
        <TrainingStats info={info} />
        { info.loading ? <Loading /> : cardToRender }
      </div>
    );
  }
}

TrainPage.propTypes = {
  cards: PropTypes.array,
  info: PropTypes.object,
  handleMark: PropTypes.func.isRequired,
  handleReveal: PropTypes.func.isRequired,
  resetCards: PropTypes.func.isRequired,
  route: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    cards: state.cards,
    info: state.info
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleMark: (card, mark) => dispatch(infoActions.markCard(card, mark)),
    handleReveal: () => dispatch(infoActions.revealAnswer()),
    resetCards: () =>dispatch(resetData())
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrainPage));
