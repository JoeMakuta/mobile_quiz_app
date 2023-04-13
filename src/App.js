// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Result from "./screens/Result";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { State } from "./state";
import { Context } from "./state";
import Question from "./screens/Quiz";

const Stack = createNativeStackNavigator();

export default function App() {
  const [state, setState] = useState(new State());

  return (
    <Context.Provider value={{ state, setState }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen component={Home} name="Home" />
          <Stack.Screen component={Question} name="Question" />
          <Stack.Screen component={Result} name="Result" />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
