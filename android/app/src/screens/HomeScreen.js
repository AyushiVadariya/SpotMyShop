import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import { createUserDID, mintToken } from '../blockchain'; // relative path

export default function HomeScreen() {
  useEffect(() => {
    createUserDID("JohnDoe");
  }, []);

  return (
    <View>
      <Button title="Mint Token" onPress={() => mintToken("0x1234...", 10)} />
    </View>
  );
}
