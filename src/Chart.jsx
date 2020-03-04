import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
// import { BarChart, XAxis } from 'react-native-svg-charts'
import { BarChart, XAxis } from './react-native-svg-charts'
import Svg, { Circle, Rect } from 'react-native-svg'

class Chart extends Component
{
  constructor (props)
  {
    super(props);
  }

  render ()
  {
    const data   = [29, 30, 70, 50, 34, 98, 51, 35, 53, 24, 50];

    return (
      <View style={styles.container}>
        <BarChart
          style={{ flex: 1 }}
          data={ data }
          contentInset={{ top: 30, bottom: 30 }}
        />

        <XAxis
          style={{ marginHorizontal: -10, marginTop: 15}}
          data={ data }
          formatLabel={ (value, index) => index }
          contentInset={{ left: 25, right: 25 }}
        />
        <Svg height="50%" width="50%" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke="blue"
            strokeWidth="2.5"
            fill="green"
          />
          <Rect
            x="15"
            y="15"
            width="70"
            height="70"
            stroke="red"
            strokeWidth="2"
            fill="yellow"
          />
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '30%',
    backgroundColor: 'red'
  }
});

export default Chart;