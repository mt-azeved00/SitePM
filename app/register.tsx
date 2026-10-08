import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (name && email && password) {
      alert('Cadastro realizado com sucesso!');
      router.navigate('/login');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie sua Conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={name}
        onChangeText={setName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <Button title="Cadastrar" onPress={handleRegister} color="#34C759" />
      </View>

      <Text 
        style={styles.link} 
        onPress={() => router.navigate('/login')}
      >
        Já tem uma conta? Faça login
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#070707',
  },

  title: {
    color: '#f4f2ee',
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 30,
  },

  input: {
    width: '100%',
    maxWidth: 420,
    height: 52,
    backgroundColor: '#151515',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 0,
    paddingHorizontal: 15,
    marginBottom: 16,
    color: '#f4f2ee',
  },

  buttonContainer: {
    width: '100%',
    maxWidth: 420,
    marginTop: 5,
    marginBottom: 15,
  },

  link: {
    color: '#c51624',
    marginTop: 15,
    fontSize: 14,
    fontWeight: '700',
  },
});