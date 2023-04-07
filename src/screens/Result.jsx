import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Result =({navigation}) => {
  return (
    <View>
      <View>
        <Text>Resultat</Text>
      </View>
      <View>
        <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
          <Text>Home</Text>
        </TouchableOpacity>
      
      </View>
    </View>
  )
}
export default Result

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'powerblue'
    
  }
})
