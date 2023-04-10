import * as React from 'react';
import { TextInput } from 'react-native-paper';

const Mymail = () => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <TextInput
      label="Email"
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
      style={{
        backgroundColor: isFocused ? 'white' : 'lightgray',
        height: 45,
        padding: 5,
      }}
      mode='Outlined (focused)'
    />
  );
};

export default Mymail;