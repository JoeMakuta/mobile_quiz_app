import * as React from 'react';
import { Button } from 'react-native-paper';

const MyButton = () => (
  <Button icon="begin" style={{backgroundColor: 'green', borderRadius: 8, width: "70%"}} mode="contained" onPress={() => console.log('Pressed')}>
    Commencer
  </Button>
);

export default MyButton;