import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

export default function Api() {
  const [frase, setFrase] = useState(
    'Relembre uma frase do Chuck'
  );

  const buscarFrases = async () => {
    try {
      const url = 'https://api.chucknorris.io/jokes/random';

      const resposta = await fetch(url);

      if (!resposta.ok) {
        throw new Error('Erro ao acessar a API');
      }

      const dados = await resposta.json();

      setFrase(dados.value);
    } catch (erro) {
      console.log(erro);
      setFrase('Não foi possível buscar uma nova frase.');
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        CHUCK NORRIS
      </Text>

      <View style={styles.card}>
        <Text style={styles.frase}>
          {frase}
        </Text>
      </View>

      <Pressable
        style={styles.botao}
        onPress={buscarFrases}
      >
        <Text style={styles.textoBotao}>
          MUDAR FRASE
        </Text>
      </Pressable>

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

  card: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#121212',
    borderWidth: 1,
    borderColor: '#2a2a2a',
    padding: 25,
    marginBottom: 25,
  },

  frase: {
    color: '#ddd',
    fontSize: 17,
    lineHeight: 26,
    textAlign: 'center',
  },

  botao: {
    backgroundColor: '#c51624',
    borderWidth: 1,
    borderColor: '#c51624',
    paddingVertical: 14,
    paddingHorizontal: 28,
    minWidth: 180,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
});