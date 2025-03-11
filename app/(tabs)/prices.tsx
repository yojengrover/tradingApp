import { View, Text, StyleSheet, useColorScheme, ScrollView, Pressable, Dimensions } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TrendingUp, TrendingDown } from 'lucide-react-native';
import { LineChart } from 'react-native-chart-kit';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

const generateChartData = (days: number) => {
  const data = [];
  const today = new Date();
  for (let i = days; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    data.push({
      date,
      value: Math.random() * 1000 + 40000, // Simulated price data
    });
  }
  return data;
};

const cryptoData = [
  { 
    name: 'Bitcoin', 
    symbol: 'BTC', 
    price: '43,567.89', 
    change: '+5.2%', 
    isPositive: true,
    chartData: generateChartData(7),
    color: '#F7931A'
  },
  { 
    name: 'Ethereum', 
    symbol: 'ETH', 
    price: '2,345.67', 
    change: '-2.1%', 
    isPositive: false,
    chartData: generateChartData(7),
    color: '#627EEA'
  },
  { 
    name: 'Binance Coin', 
    symbol: 'BNB', 
    price: '312.45', 
    change: '+1.8%', 
    isPositive: true,
    chartData: generateChartData(7),
    color: '#F3BA2F'
  },
];

export default function PricesScreen() {
  const isDark = useColorScheme() === 'dark';
  const [selectedTimeframe, setSelectedTimeframe] = useState('1W');
  const screenWidth = Dimensions.get('window').width;

  const timeframes = [
    { label: '1D', days: 1 },
    { label: '1W', days: 7 },
    { label: '1M', days: 30 },
    { label: '3M', days: 90 },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? '#000000' : '#F9FAFB',
    },
    content: {
      padding: 20,
    },
    header: {
      marginBottom: 24,
    },
    title: {
      fontFamily: 'Inter_700Bold',
      fontSize: 28,
      color: isDark ? '#FFFFFF' : '#111827',
      marginBottom: 8,
    },
    subtitle: {
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      color: isDark ? '#9CA3AF' : '#6B7280',
    },
    cryptoCard: {
      backgroundColor: isDark ? '#1A1A1A' : '#FFFFFF',
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      shadowColor: isDark ? '#000000' : '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: isDark ? 0.25 : 0.1,
      shadowRadius: 8,
      elevation: 3,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    cryptoInfo: {
      flex: 1,
    },
    cryptoName: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
      color: isDark ? '#FFFFFF' : '#111827',
      marginBottom: 4,
    },
    cryptoSymbol: {
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      color: isDark ? '#9CA3AF' : '#6B7280',
    },
    priceContainer: {
      alignItems: 'flex-end',
    },
    price: {
      fontFamily: 'Inter_700Bold',
      fontSize: 18,
      color: isDark ? '#FFFFFF' : '#111827',
      marginBottom: 4,
    },
    changeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    changePositive: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 14,
      color: '#10B981',
    },
    changeNegative: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 14,
      color: '#EF4444',
    },
    timeframeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 16,
      backgroundColor: isDark ? '#262626' : '#F3F4F6',
      borderRadius: 8,
      padding: 4,
    },
    timeframeButton: {
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 6,
    },
    timeframeButtonActive: {
      backgroundColor: isDark ? '#404040' : '#FFFFFF',
    },
    timeframeText: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 14,
      color: isDark ? '#9CA3AF' : '#6B7280',
    },
    timeframeTextActive: {
      color: isDark ? '#FFFFFF' : '#111827',
    },
    chartContainer: {
      marginTop: 8,
      alignItems: 'center',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Market Prices</Text>
          <Text style={styles.subtitle}>Live cryptocurrency rates</Text>
        </View>

        {cryptoData.map((crypto, index) => (
          <Animated.View
            key={crypto.symbol}
            entering={FadeInUp.delay(200 + index * 100)}
            style={styles.cryptoCard}
          >
            <Pressable>
              <View style={styles.row}>
                <View style={styles.cryptoInfo}>
                  <Text style={styles.cryptoName}>{crypto.name}</Text>
                  <Text style={styles.cryptoSymbol}>{crypto.symbol}</Text>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.price}>${crypto.price}</Text>
                  <View style={styles.changeContainer}>
                    {crypto.isPositive ? (
                      <TrendingUp size={16} color="#10B981" />
                    ) : (
                      <TrendingDown size={16} color="#EF4444" />
                    )}
                    <Text style={crypto.isPositive ? styles.changePositive : styles.changeNegative}>
                      {' '}
                      {crypto.change}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.timeframeContainer}>
                {timeframes.map((timeframe) => (
                  <Pressable
                    key={timeframe.label}
                    style={[
                      styles.timeframeButton,
                      selectedTimeframe === timeframe.label && styles.timeframeButtonActive,
                    ]}
                    onPress={() => setSelectedTimeframe(timeframe.label)}
                  >
                    <Text
                      style={[
                        styles.timeframeText,
                        selectedTimeframe === timeframe.label && styles.timeframeTextActive,
                      ]}
                    >
                      {timeframe.label}
                    </Text>
                  </Pressable>
                ))}
              </View>

              <View style={styles.chartContainer}>
                <LineChart
                  data={{
                    labels: crypto.chartData.map(d => format(d.date, 'MMM d')),
                    datasets: [
                      {
                        data: crypto.chartData.map(d => d.value),
                        color: () => crypto.color,
                      },
                    ],
                  }}
                  width={screenWidth - 60}
                  height={180}
                  chartConfig={{
                    backgroundColor: isDark ? '#1A1A1A' : '#FFFFFF',
                    backgroundGradientFrom: isDark ? '#1A1A1A' : '#FFFFFF',
                    backgroundGradientTo: isDark ? '#1A1A1A' : '#FFFFFF',
                    decimalPlaces: 0,
                    color: (opacity = 1) => isDark ? `rgba(255, 255, 255, ${opacity})` : `rgba(0, 0, 0, ${opacity})`,
                    style: {
                      borderRadius: 16,
                    },
                    propsForDots: {
                      r: '4',
                      strokeWidth: '2',
                      stroke: crypto.color,
                    },
                  }}
                  bezier
                  style={{
                    marginVertical: 8,
                    borderRadius: 16,
                  }}
                />
              </View>
            </Pressable>
          </Animated.View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}