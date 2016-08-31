import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class TrendChart extends Component {
  onReset = () => {
    this.props.appState.resetTimer();
  }
  render () {
    return (
      <div>
        <button onClick={this.onReset}>
          Seconds passed: {this.props.appState.counter}
        </button>
        <DevTools />
      </div>
    );
  }
}

TrendChart.propTypes = {
  appState : React.PropTypes.object.isRequired,
};

export default TrendChart;
