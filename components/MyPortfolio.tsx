import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons } from "@expo/vector-icons";

const MyPortfolio = () => {
  const dark = {
    container: { backgroundColor: "#000" },
    textColor: "#fff",
    cardBackground: "#f4f4f4",
    buttonColor: "#fff",
    iconBackground: "#008AC3",
    iconColor: "#ffffff",
  };

  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,ripple,cardano,polkadot,dogecoin,shiba-inu,litecoin,chainlink,tron,stellar,monero,tezos,avalanche'
        );
        const data = await response.json();

        const assets = data.map((coin) => ({
          id: coin.id,
          name: coin.name,
          symbol: coin.symbol.toUpperCase(),
          price: coin.current_price,
          image: coin.image, // CoinGecko logo URL
        }));

        setCryptoData(assets);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <View style={[styles.container, dark.container]}>
      <Text style={styles.h1}>My Portfolio</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {cryptoData.map((coin, index) => (
          <View key={index} style={styles.flex}>
            <View style={styles.flex2}>
              <Image source={{ uri: coin.image }} style={styles.image} />
              <View style={styles.flex3}>
                <Text style={[styles.par, { color: dark.textColor }]}>{coin.name}</Text>
                <Text style={[styles.par1, { color: dark.textColor }]}>{coin.symbol}</Text>
              </View>
            </View>
            <View style={styles.flex4}>
              <Text style={[styles.btc, { color: dark.textColor }]}>${coin.price}</Text>
              <View style={styles.flex5}>
                <Ionicons name="arrow-up" size={16} color={dark.iconBackground} />
                <Text style={[styles.h3, { color: dark.iconBackground }]}>$11.75</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 30, paddingHorizontal: 10 },
  flex: { display: 'flex', paddingTop: 15, flexDirection: 'row', justifyContent: 'space-between' },
  flex2: { display: 'flex', flexDirection: 'row', alignItems: 'center' },
  flex3: { flexDirection: 'column' },
  flex4: { flexDirection: 'column', alignItems: 'flex-end' },
  flex5: { display: 'flex', flexDirection: 'row', alignItems: 'center' },
  h1: { color: '#fff', fontWeight: 'bold', fontSize: 20 },
  h3: { fontSize: 14, marginLeft: 5 },
  btc: { fontSize: 15, fontWeight: 'bold' },
  image: { width: 35, height: 35, borderRadius: 50, marginRight: 10 },
  par: { fontSize: 20, fontWeight: '400' },
  par1: { fontSize: 15, color: 'gray' },
});

export default MyPortfolio;
