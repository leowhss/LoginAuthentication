import React, { useContext, useState } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from './AuthProvider';

function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useContext(AuthContext);
  const navigation = useNavigation(); // Access the navigation object
  
    const handleLogin = () => {
      if (username === 'admin' && password === 'admin123') {
        login({ username: 'admin', email: 'admin@example.com', role: 'admin', password: 'admin123' });
        navigation.navigate('Profile'); // Navigate to ProfileScreen after successful login
      } else if (username === 'user' && password === 'user123') {
        login({ username: 'user', email: 'user@example.com', role: 'user', password: 'user123' });
        navigation.navigate('Profile'); // Navigate to ProfileScreen after successful login
      } else {
        alert('Invalid credentials');
      }
    };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default LoginScreen;
