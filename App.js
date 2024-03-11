import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
   
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLinkClick = () => {
    
    console.log("Don't have an account? Clicked here");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity style={styles.toggleButton} onPress={toggleShowPassword}>
          <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={24} color="#333" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.clickHere} onPress={handleLinkClick}>
        <Text style={styles.clickHereText}>
          Don't have an account?{' '}
          <Text style={styles.highlightedText}>Sign up here</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 32,
    marginBottom: 30,
    color: '#333',
  },
  input: {
    height: 50,
    width: '80%',
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  passwordInput: {
    height: 50,
    flex: 1,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 15,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    fontSize: 16,
  },
  toggleButton: {
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  clickHere: {
    marginTop: 10,
  },
  clickHereText: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
  },
  highlightedText: {
    color: '#00000',
    textDecorationLine: 'underline',
  },
});

export default Login;
