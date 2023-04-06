import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const Home = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Bienvenue!</Text>
      <TextInput
        placeholder="Nom"
        value={name}
        onChangeText={(text) => setName(text)}
        style={{height: 40, width: '80%', borderColor: 'gray', borderWidth: 1}}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{height: 40, width: '80%', borderColor: 'gray', borderWidth: 1}}
      />
      <Button title="Commencer" onPress={() => alert('Commencer')} />
    </View>
  );
};

export default Home;