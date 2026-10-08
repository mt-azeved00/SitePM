import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';

export default function ViaCep() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');

  const buscarCep = () => {
    const cepLimpo = cep.replace(/\D/g, '');

    if (cepLimpo.length !== 8) {
      setEndereco('Digite um CEP válido com 8 números.');
      return;
    }

    const url =
      'https://viacep.com.br/ws/' +
      cepLimpo +
      '/json/';

    fetch(url)
      .then((resposta) => resposta.json())
      .then((dados) => {
        if (dados.erro) {
          setEndereco('CEP não encontrado.');
        } else {
          setEndereco(
            dados.logradouro +
            ', ' +
            dados.localidade +
            ' - ' +
            dados.uf
          );
        }
      })
      .catch((erro) => {
        console.log(erro);
        setEndereco('Erro de conexão com a API.');
      });
  };

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        CONSULTAR CEP
      </Text>

      <TextInput
        placeholder="Digite o CEP (Ex: 01001000)"
        placeholderTextColor="#666"
        onChangeText={setCep}
        keyboardType="numeric"
        maxLength={9}
        style={styles.input}
        value={cep}
      />

      <Pressable
        style={styles.botao}
        onPress={buscarCep}
      >
        <Text style={styles.textoBotao}>
          BUSCAR
        </Text>
      </Pressable>

      {endereco !== '' && (
        <View style={styles.resultado}>
          <Text style={styles.textoResultado}>
            {endereco}
          </Text>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070707',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  titulo: {
    color: '#f4f2ee',
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 25,
  },

  input: {
    width: '100%',
    maxWidth: 500,
    height: 52,
    backgroundColor: '#151515',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 0,
    color: '#f4f2ee',
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  botao: {
    backgroundColor: '#c51624',
    borderWidth: 1,
    borderColor: '#c51624',
    paddingVertical: 14,
    paddingHorizontal: 30,
    minWidth: 180,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 1.5,
  },

  resultado: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#121212',
    borderWidth: 1,
    borderColor: '#2a2a2a',
    padding: 20,
    marginTop: 20,
  },

  textoResultado: {
    color: '#ddd',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
});
