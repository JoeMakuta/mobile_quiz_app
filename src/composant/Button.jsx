import * as React from 'react';
import { Button } from 'react-native-paper';

const MyButton = () => (
  <Button icon="begin" style={{backgroundColor: 'green'}} mode="contained" onPress={() => console.log('Pressed')}>
    Commencer
  </Button>
);

export default MyButton;