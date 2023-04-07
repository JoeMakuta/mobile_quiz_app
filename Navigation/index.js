import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../src/screens/Home';
import Result from '../src/screens/Result';
import Question from '../src/screens/Question';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Quiz" component={Question} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Result" component={Result} />
        </Stack.Navigator>
    );
}

export default MyStack