import * as types from './types';
import dataApi from '../api/mockDataApi';

export function getDataSuccess(data, whichMockData) {
  return { type: types.GET_DATA_SUCCESS, data, whichMockData };
}

export function getData(whichMockData) {
  return function(dispatch) {
    return dataApi.getData(whichMockData)
      .then(data => {
        dispatch(getDataSuccess(data, whichMockData));
      });
  };
}

export function resetData() {
  return { type: types.RESET_DATA };
}
