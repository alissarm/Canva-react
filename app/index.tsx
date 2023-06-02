import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <img style={styles.img} src={'../assets/Logo.png'}></img>
      <Text style={styles.titulo}>bem-vindo ao Canva!</Text>
      <Text style={styles.texto}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,{'\n'}
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into{'\n'}
      electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, {'\n'}
      and more recently with desktop publishing softwar like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      <Link href="/telaA">Próxima página ></Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: '155%',
    fontWeight: 'bold',
  },
  texto: {
    padding: '5%',
    fontSize: '100%',
    textAlign: 'center',
    textAlign: 'justify',
  },
  img:{
    marginTop: '-8%',
    width: '8%',
    padding: '1.5%',
  },
});