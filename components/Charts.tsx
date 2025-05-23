import React from 'react';
import { View, Dimensions ,StyleSheet} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const Charts = () => {
  const screenWidth = Dimensions.get('window').width;

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(0, 138, 195, ${opacity})`,
        strokeWidth: 2
      }
    ]
  };

  const chartConfig = {
    backgroundColor: '#000000',
    backgroundGradientFrom: '#000000',
    backgroundGradientTo: '#000000',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  };

  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={screenWidth - 40}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
  );
};

export default Charts;
const styles = StyleSheet.create({
  container:{
    // flex:1,
    // backgroundColor:'#000',
    paddingHorizontal:10,
    paddingTop:50,
  }
})