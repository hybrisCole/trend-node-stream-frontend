import { observable } from 'mobx';

export default class TrendStreakm {
  @observable counter = 0;

  constructor () {
    setInterval(() => {
      this.counter += 1;
    }, 1000);
  }

  resetTimer () {
    this.counter = 0;
  }
}
