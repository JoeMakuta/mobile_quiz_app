import React from "react";
/**
 * importation de Element pour le style Avec react-native-paper : Composants Près à l'emplois
 */
import { TextInput, Button, Text } from "react-native-paper";
import { View } from "react-native";
/**
 * importation de Formik
 */
import { Formik } from "formik";
import * as Yup from "yup";
import { Alert } from "react-native";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Veuillez entrer une adresse email valide")
    .required("Veuillez entrer une adresse email"),
  name: Yup.string()
    .min(3, "Le nom d'utilisateur doit comporter au moins 3 caractères")
    .required("Veuillez entrer un nom d'utilisateur"),
});

  return (
    <Formik
      initialValues={{ email: "", name: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        /**
         * Handle form submission here
         * Redirection Ici Pour la Page des Questionn
         *
         *
         */
        Alert(console.log(values));
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              padding: 15,
              marginTop: 20,
            }}
          >
            <Text variant="titleSmall">Bienvenue Annette</Text>
            <Text>Veuillez entrer votre nom et votre email pour commencer</Text>
            <TextInput
              label="Entrez votre mail"
              type="outlined"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              style={{
                marginBottom: 10,
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
              }}
              selectionColor="green"
              textColor="black"
              outlineColor="black"
            />
            {errors.email && (
              <Text style={{ color: "red" }}>{errors.email}</Text>
            )}
            <TextInput
              label="Entrez votre Nom"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              // placeholder="Nom d'utilisateur"
              selectionColor="black"
              outlineColor="black"
              style={{
                marginBottom: 10,
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
              }}
              textColor="black"
            />

            {errors.name && <Text style={{ color: "red" }}>{errors.name}</Text>}
            <Button
              textColor="white"
              style={{
                elevation: 4,
                backgroundColor: "green",
                borderRadius: 10,
                fontWeight: "800",
                color: "white",
              }}
              onPress={handleSubmit}
            >
              Commencer
            </Button>
          </View>
        </>
      )}
    </Formik>
  );
};

export default Home;
