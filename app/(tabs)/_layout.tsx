import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Pressable, Text, View,SafeAreaView, StatusBar,StyleSheet } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView>
    <StatusBar barStyle={colorScheme === 'dark'? 'light-content' : 'dark-content'} />
      {/* <View style={styles.container}>
        <Text style={styles.header}>
          Hello
        </Text> */}
      {/* </View>   */}
  </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 250,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
});