import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { LifeThermometer } from './components/LifeThermometer';



export default function App() {
  return (
    <SafeAreaProvider>
      {/* 这里的 SafeAreaView 来自新库，兼容性极佳 */}
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <LifeThermometer />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});