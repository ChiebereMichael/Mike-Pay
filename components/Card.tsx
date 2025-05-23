import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons';

interface CryptoPrices {
  bitcoin?: { usd: number };
  ethereum?: { usd: number };
  solana?: { usd: number };
}

interface Styles {
  container: ViewStyle;
  change: ViewStyle;
  flex: ViewStyle;
  dis: ViewStyle;
  btc: TextStyle;
  bit: TextStyle;
  fall: TextStyle;
  image: ImageStyle;
}

const btc = require('@/assets/images/btc2.jpg');

const CryptoPrice = () => {
  const [btcPrice, setBtcPrice] = useState<number | null>(null);
  const [ethPrice, setEthPrice] = useState<number | null>(null);
  const [solanaprice, setSolanaprice] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCryptoPrices = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd'
        );
        const data: CryptoPrices = await response.json();
        
        setBtcPrice(data.bitcoin?.usd ?? null);
        setEthPrice(data.ethereum?.usd ?? null);
        setSolanaprice(data.solana?.usd ?? null);
      } catch (error) {
        console.error('Error fetching prices:', error);
        setError(error instanceof Error ? error.message : 'Failed to fetch prices');
      }
    };

    fetchCryptoPrices();
  }, []);

  return (
        <View style={styles.container}>
            <View style = {styles.flex}>
                <Image source={btc} style={styles.image}/>
                <View>
                    <Text style={styles.btc}>BTC</Text>
                    <Text style={styles.bit}>Bitcoin</Text>
                </View>
            </View>
            <View style={styles.dis}>
          <Text style={styles.btc} >${btcPrice}</Text>

          <View style={styles.change}>
             <Ionicons name="arrow-up" size={18} color="#fff" />
              <Text style={styles.fall}>11.75%</Text>
          </View>
        </View>
        </View>
  );
};

const styles = StyleSheet.create<Styles>({
    container:{
    backgroundColor:'#008AC3',
    borderRadius:15,
    paddingHorizontal:20,
    marginLeft:10,
    marginRight:10,
    paddingVertical:20,
    // alignSelf:'center',
    },
    change:{
        display:'flex',
        flexDirection:'row'
    },
    flex:{
        display:'flex',
        flexDirection:'row'
    },
    dis:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:40
    },
    btc:{
        color:'#fff',
        fontSize:22,
    },
    bit:{
        color:'#ABACAE',
        fontSize:14
    },
    fall:{
        color:'#fff',
        fontSize:14,
    },
    image:{
        width:30,
        height:30,
        borderRadius:50,
        marginRight:10
    },
})
export default CryptoPrice;
