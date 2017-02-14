/*eslint import/namespace: ['error', { allowComputed: true }]*/

import getDelay from './delay';
import * as mockData from './mockData';

class mockApi {
  static getData(whichMockData) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], mockData[whichMockData]));
      }, getDelay());
    });
  }

  static getAvailableTopics() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], mockData.availableTopics));
      }, getDelay());
    });
  }
}

export default mockApi;
