import React, { createContext, useContext, useState } from 'react';
import {View} from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from "yup";

const validationSchema = 
Yup.object().shape({
  email: Yup.string()
    .email('Veuillez entrer Une adresse email valide')
    .required('Veuillez entrer une adresse email'),
  nom: Yup.string()
    .min(3, 'Le nom d\'utilisateur doit comporter au moins 3 caractères')
    .required('Veuillez entrer un nom d\'utilisateur'),
});


const myContext = createContext();
const Home = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 30, backgroundColor: "white"}}>
      <view style={{margin: 15, alignItems: "center"}}>
        <Text  variant="headlineSmall">Bienvenue! Annette</Text>
        <br/>
         <Text variant="titleLarge">Veuillez entrer votre nom et votre email pour Commencer.</Text>
     </view>
     <Text variant="titleLarge" activeOutlineColor="green">C'est Amusant</Text>

        <TextInput
          mode="outlined"
          label="Nom"
          placeholder="Entrez Votre Nom"
          right={<TextInput.Affix />}
          value={name}
          onChangeText={(text) => setName(text)}
          activeOutlineColor="black"
        />
       <TextInput
          mode="outlined"
          label="Email"
          placeholder="Entrez Votre Email"
          right={<TextInput.Affix text="/100" />}
          value={email}
          onChangeText={() => setName(setEmail)}
          activeOutlineColor="black"

        />
        <Button icon="begin" style={{elevation: 4,backgroundColor: 'green', borderRadius: 8,fontWeight: "800",  }} mode="contained" onPress={() => console.log('Pressed')}>
    Commencer
  </Button>
      {/* <MyButton/> */}
    </View>
  );
};

export default Home;

