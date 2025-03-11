import { View, Text, StyleSheet, useColorScheme, ScrollView } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TrendingUp, TrendingDown } from 'lucide-react-native';

export default function PortfolioScreen() {
  const isDark = useColorScheme() === 'dark';

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
    card: {
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
    balanceTitle: {
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      color: isDark ? '#9CA3AF' : '#6B7280',
      marginBottom: 8,
    },
    balanceAmount: {
      fontFamily: 'Inter_700Bold',
      fontSize: 36,
      color: isDark ? '#FFFFFF' : '#111827',
      marginBottom: 16,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    profitContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    profitLabel: {
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      color: isDark ? '#9CA3AF' : '#6B7280',
      marginRight: 8,
    },
    profitAmount: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 16,
      color: '#10B981',
    },
    lossAmount: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 16,
      color: '#EF4444',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Portfolio</Text>
          <Text style={styles.subtitle}>Track your crypto investments</Text>
        </View>

        <Animated.View entering={FadeInUp.delay(200)} style={styles.card}>
          <Text style={styles.balanceTitle}>Total Balance</Text>
          <Text style={styles.balanceAmount}>$12,345.67</Text>
          <View style={styles.row}>
            <View style={styles.profitContainer}>
              <Text style={styles.profitLabel}>24h Change</Text>
              <TrendingUp size={16} color="#10B981" />
              <Text style={styles.profitAmount}> +$523.45 (4.2%)</Text>
            </View>
          </View>
        </Animated.View>

        <Animated.View entering={FadeInUp.delay(300)} style={styles.card}>
          <Text style={styles.balanceTitle}>Profit/Loss</Text>
          <View style={styles.row}>
            <View>
              <Text style={styles.profitLabel}>Total Profit</Text>
              <View style={styles.profitContainer}>
                <TrendingUp size={16} color="#10B981" />
                <Text style={styles.profitAmount}> +$2,145.89</Text>
              </View>
            </View>
            <View>
              <Text style={styles.profitLabel}>Total Loss</Text>
              <View style={styles.profitContainer}>
                <TrendingDown size={16} color="#EF4444" />
                <Text style={styles.lossAmount}> -$645.32</Text>
              </View>
            </View>
          </View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}