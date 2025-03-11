import { View, Text, StyleSheet, useColorScheme, ScrollView, Image, Pressable } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const newsData = [
  {
    id: 1,
    title: 'Bitcoin Surges Past $43,000 as Market Sentiment Improves',
    source: 'CryptoNews',
    time: '2 hours ago',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&q=80',
  },
  {
    id: 2,
    title: 'Ethereum 2.0 Upgrade: What You Need to Know',
    source: 'BlockchainDaily',
    time: '4 hours ago',
    image: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=400&q=80',
  },
  {
    id: 3,
    title: 'Binance Introduces New Trading Features',
    source: 'CryptoInsider',
    time: '6 hours ago',
    image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?w=400&q=80',
  },
];

export default function NewsScreen() {
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
    newsCard: {
      backgroundColor: isDark ? '#1A1A1A' : '#FFFFFF',
      borderRadius: 16,
      overflow: 'hidden',
      marginBottom: 16,
      shadowColor: isDark ? '#000000' : '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: isDark ? 0.25 : 0.1,
      shadowRadius: 8,
      elevation: 3,
    },
    newsImage: {
      width: '100%',
      height: 200,
    },
    newsContent: {
      padding: 16,
    },
    newsTitle: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
      color: isDark ? '#FFFFFF' : '#111827',
      marginBottom: 8,
    },
    newsInfo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    newsSource: {
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      color: isDark ? '#9CA3AF' : '#6B7280',
    },
    newsTime: {
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      color: isDark ? '#9CA3AF' : '#6B7280',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Crypto News</Text>
          <Text style={styles.subtitle}>Latest updates from the crypto world</Text>
        </View>

        {newsData.map((news, index) => (
          <Animated.View
            key={news.id}
            entering={FadeInUp.delay(200 + index * 100)}
            style={styles.newsCard}
          >
            <Pressable>
              <Image source={{ uri: news.image }} style={styles.newsImage} />
              <View style={styles.newsContent}>
                <Text style={styles.newsTitle}>{news.title}</Text>
                <View style={styles.newsInfo}>
                  <Text style={styles.newsSource}>{news.source}</Text>
                  <Text style={styles.newsTime}>{news.time}</Text>
                </View>
              </View>
            </Pressable>
          </Animated.View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}