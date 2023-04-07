import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Result from './screens/Result';
import MyStack from '../Navigation';

export default function App() {
  return (
    <View style={styles.container}>
       <NavigationContainer>
        <MyStack/>
       </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
