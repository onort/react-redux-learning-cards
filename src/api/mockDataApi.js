import getDelay from './delay';
import mockData from './mockData';


class mockApi {
  static getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], mockData));
      }, getDelay());
    });
  }
}

export default mockApi;