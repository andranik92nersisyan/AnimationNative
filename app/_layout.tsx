import * as SplashScreen from 'expo-splash-screen';
import { useEffect,useRef  } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Animated, Text, View, StyleSheet } from 'react-native';


export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const blink = () => {
      Animated.sequence([
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver:  true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver:true,
        }),
      ]).start(() => blink());
    };

    blink();
  }, [opacityAnim]);
  return (
    <View style={styles.container}>
      <Text style={styles.TextTitle}>Animations</Text>
      <Animated.View style={[styles.container, { opacity: opacityAnim, }]}>
        <Text style={styles.Text}>Hello Native</Text>
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
    TextTitle: {
      marginTop: 50,
      fontSize: 40,
      color: 'red',
      fontFamily: 'SpaceMono',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    Text: {
      fontSize: 24,
      color: 'white',
      fontFamily: 'SpaceMono',
      textAlign: 'center',
      fontWeight: 'bold',
    },
});
