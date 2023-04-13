import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Context } from "../state";

const Result = ({ navigation }) => {
  const { state, setState } = useContext(Context);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.Rslt}>RESULTAT</Text>
      </View>
      <View style={styles.containtName}>
        <Text style={styles.Nom}>{state.fullname}</Text>
        <Text>{state.email}</Text>
      </View>

      {state.score > 7 ? (
        <View style={styles.ContaintReslt}>
          <Text style={styles.EndResult}>{state.score}/15</Text>
          <TouchableOpacity
            style={styles.Touchable}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.Home}>Home</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.failContainer}>
          <Text style={styles.EndResult}>{state.score}/15</Text>
          <TouchableOpacity
            style={styles.Touchable}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.Home}>Home</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  containtName: {
    marginTop: 20,
    marginLeft: 15,
  },
  Rslt: {
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 15,
  },
  Nom: {
    fontSize: 20,
    fontWeight: "bold",
  },
  ContaintReslt: {
    height: 350,
    width: 385,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#04F866",
    borderRadius: 15,
  },
  EndResult: {
    fontSize: 50,
    fontWeight: "bold",
  },
  Button: {
    alignItems: "center",
    marginTop: 30,
  },
  Touchable: {
    backgroundColor: "#314539",
    height: 50,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 100,
    cursor: "pointer",
  },
  Home: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  failContainer: {
    height: 350,
    width: 385,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 15,
  },
});
