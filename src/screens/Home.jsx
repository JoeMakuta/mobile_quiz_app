import React from 'react';
/**
 * importation de Element pour le style Avec react-native-paper : Composants Près à l'emplois
 */
import { TextInput, Button, Text } from 'react-native-paper';
/**
 * importation de Formik
 */
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Alert } from 'react-native';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Veuillez entrer une adresse email valide')
    .required('Veuillez entrer une adresse email'),
  name: Yup.string()
    .min(3, 'Le nom d\'utilisateur doit comporter au moins 3 caractères')
    .required('Veuillez entrer un nom d\'utilisateur'),
});

function Home() {
  return (
    <Formik
      initialValues={{ email: '', name: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        
        /**
         * Handle form submission here
         * Redirection Ici Pour la Page des Questionn
         * 
         * 
         */
        Alert(console.log(values))
        
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <>
        <view style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 30 ,backgroundColor: "white", padding: 15}}>

        <Text>Bienvenue Annette</Text>
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Email"
            style={{marginBottom: 10}}
          />
          {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
          <TextInput
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            placeholder="Nom d'utilisateur"
            style={{marginBottom: 10}}
            textColor="green"
          />

          {errors.name && <Text style={{ color: 'red' }}>{errors.name}</Text>}
          <Button   style={{elevation: 4,backgroundColor: 'green', borderRadius: 8,fontWeight: "800" , color: "white"}} onPress={handleSubmit}>Commencer</Button>
      </view>
        </>
      )}
    </Formik>
  );
}

export default Home