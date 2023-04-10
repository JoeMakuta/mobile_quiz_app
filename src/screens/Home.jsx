import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import MyButton from '../composant/Button';
import Mymail from '../composant/MailInput';

const Home = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 30}}>
      <view style={{margin: 15}}>
        <Text style={{fontWeight: "800"}}>Bienvenue! Annette</Text>
      <Text style={{fontWeight: "600"}}>Veuillez entrer votre nom et votre email pour Commencer.</Text>
        </view>
      <TextInput
        placeholder="Nom"
        value={name}
        onChangeText={(text) => setName(text)}
        style={{height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, borderRadius: 7, color: 'gray'}}
      />
      <TextInput
        placeholder="Entrez Votre Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, borderRadius: 7, color: 'gray'}}
      />
      <MyButton/>
    </View>
  );
};

export default Home;