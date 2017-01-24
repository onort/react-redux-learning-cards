import * as types from './types';
import dataApi from '../api/mockDataApi';

export function getDataSuccess(data) {
  return { type: types.GET_DATA_SUCCESS, data };
}

export function getData() {
  return function(dispatch) {
    return dataApi.getData()
      .then(data => {
        dispatch(getDataSuccess(data));
      });
  };
}