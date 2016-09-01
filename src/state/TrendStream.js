import { observable, computed } from 'mobx';
import pubnubClient from '../util/pubnubClient';
import _ from 'lodash';

class TrendStream {
  @observable trendCounter = [['#trend1', 25], ['#trend2', 20], ['#trend3', 5], ['#trend4', 50], ['#trend5', 10]];
  @computed get cartesianData () {
    return _.map(this.trendCounter, (trendArray) => {
      return {
        x : `${trendArray[0]} ${trendArray[1]}`,
        y : trendArray[1],
      };
    });
  }
  constructor () {
    pubnubClient.subscribe({
      channels : ['trendnode:count'],
    });
    pubnubClient.addListener({
      message : (trendData) => {
        this.trendCounter = trendData.message;
      },
    });
  }
}

export default TrendStream;
