import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Feed() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao seu Feed! 🎉</Text>
      <Button 
        title="Sair (Logout)" 
        onPress={() => router.replace('/login')} 
        color="#FF3B30"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
