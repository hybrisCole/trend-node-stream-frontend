import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryPie } from 'victory';
import TrendChart from '../component/TrendChart';
import TrendSteam from '../state/TrendStream';
const trendStream = new TrendSteam();
class Main extends React.Component {
  render () {
    return (
      <div>
        <h1>Trending Stream</h1>
        <TrendChart appState={trendStream} />
        <VictoryPie
  style={{
    labels : {
      fill       : 'white',
      fontSize   : 12,
      fontWeight : 'bold',
      padding    : 0,
    },
  }}
  data={[
    {x : '<5', y : 6279},
    {x : '5-13', y : 9182},
    {x : '14-17', y : 5511},
    {x : '18-24', y : 7164},
    {x : '25-44', y : 6716},
    {x : '45-64', y : 4263},
    {x : '≥65', y : 7502},
  ]}
  innerRadius={110}
  colorScale={[
    '#D85F49',
    '#F66D3B',
    '#D92E1D',
    '#D73C4C',
    '#FFAF59',
    '#E28300',
    '#F6A57F',
  ]}
/>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
