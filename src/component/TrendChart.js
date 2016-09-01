import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { VictoryPie } from 'victory';

@observer
class TrendChart extends Component {
  render () {
    return (
      <VictoryPie
        style={{
          labels : {
            fill       : 'blue',
            fontSize   : 5,
            fontWeight : 'bold',
            padding    : 0,
          },
        }}
        data={this.props.state.cartesianData}
        animate={{
          duration : 250,
        }}
        innerRadius={60}
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
    );
  }
}

TrendChart.propTypes = {
  state : React.PropTypes.object.isRequired,
};

export default TrendChart;
