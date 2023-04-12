import React, { useContext } from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {Context} from '../state/index'

const Home = () => {
  const context = useContext(Context)

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Bienvenue!</Text>
      <TextInput
        placeholder="Nom"
        value={context.state.fullname}
        onChangeText={(text) => context.setState({...context.state, fullname : text})}
        style={{height: 40, width: '80%', borderColor: 'gray', borderWidth: 1}}
      />
      <TextInput
        placeholder='bakerathierry@gmail.com'
        value={context.state.email}
        onChangeText={(text) => context.setState({...context.state, email: text})}
        style={{height: 40, width: '80%', borderColor: 'gray', borderWidth: 1}}
      />
      <Button title="Commencer" onPress={() => alert('Commencer')} />
    </View>
  );
};

export default Home;