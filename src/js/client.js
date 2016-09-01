import React from 'react';
import ReactDOM from 'react-dom';
import TrendChart from '../component/TrendChart';
import TrendSteam from '../state/TrendStream';
import DevTools from 'mobx-react-devtools';
const trendStream = new TrendSteam();

class Main extends React.Component {
  render () {
    return (
      <div>
        <DevTools />
        <TrendChart state={trendStream} />
      </div>

    );
  }
}
const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
