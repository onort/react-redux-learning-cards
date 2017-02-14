import * as types from './types';
import dataApi from '../api/mockDataApi';

export function getTopicsSuccess(topics) {
  return { type: types.GET_TOPICS_SUCCESS, topics };
}

export function getAvailableTopics() {
  return function(dispatch) {
    return dataApi.getAvailableTopics()
      .then(topics => {
        dispatch(getTopicsSuccess(topics));
      });
  };
}
