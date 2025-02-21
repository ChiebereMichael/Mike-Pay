import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { LineChart } from "react-native-chart-kit"; // 📊 Import Chart Kit

const Charts = () => {
  return (
    <View>
       <Text style={styles.chartTitle}>Bitcoin Price (Last 7 Days)</Text>
        <LineChart
          data={{
            labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
            datasets: [{ data: chartData }],
          }}
          width={Dimensions.get("window").width - 20}
          height={220}
          yAxisLabel="$"
          chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "#222",
            backgroundGradientTo: "#111",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: { borderRadius: 16 },
            propsForDots: { r: "4", strokeWidth: "2", stroke: "#fff" },
          }}
          bezier
          style={{ marginVertical: 10, borderRadius: 10 }}
        />
    </View>
  )
}

export default Charts

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    },
    chartTitle: { color: "#fff", fontSize: 18, fontWeight: "bold", marginTop: 20 },
})