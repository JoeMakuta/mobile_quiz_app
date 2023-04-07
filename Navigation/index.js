import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../src/screens/Home';
import Quiz from '../src/screens/Quiz';
import Result from '../src/screens/Result';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Quiz" component={Quiz} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Result" component={Result} />
        </Stack.Navigator>
    );
}

export default MyStack