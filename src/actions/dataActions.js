import * as types from './types';
import dataApi from '../api/mockDataApi';

export function getDataSuccess(data) {
  return { type: types.GET_DATA_SUCCESS, data };
}

export function getData(whichMockData) {
  return function(dispatch) {
    return dataApi.getData(whichMockData)
      .then(data => {
        dispatch(getDataSuccess(data));
      });
  };
}
