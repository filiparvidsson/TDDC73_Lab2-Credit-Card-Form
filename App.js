import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import components
import Form from './components/form/form';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Super safe credit card saver</Text> 
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // align items to the left
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 100,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'linear-gradient(90deg, rgba(255,215,0,1) 0%, rgba(255,215,0,1) 50%, rgba(255,215,0,1) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
});
