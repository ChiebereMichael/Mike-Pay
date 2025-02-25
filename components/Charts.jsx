import React from 'react';
import { View, Dimensions ,StyleSheet} from 'react-native';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';

const Charts = () => {
  const screenWidth = Dimensions.get('window').width;
  
  const data = {
    labels: ['1H', '1D', '1W', '1M', '1Y', 'All'],
    datasets: [{
      data: [178.40, 156.18, 133.97, 111.75, 89.54, 43],
    }],
  };

  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={screenWidth - 40}
        height={250}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(50, 30, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
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