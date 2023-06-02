import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <img style={styles.img} src={'../assets/Logo.png'}></img>
      <Text style={styles.titulo}>Canva</Text>
      <Text style={styles.texto}>Faça seu login</Text>

      <TextInput
      style={styles.input}
      placeholder="Nome"
      />
      <TextInput
      style={styles.input}
      placeholder="E-mail"
      />
      <TextInput
      style={styles.input}
      placeholder="Data de nascimento"
      />
      <TextInput
      style={styles.input}
      placeholder="CPF"
      />

    <TouchableOpacity
    style={styles.botao}
    onPress={ () => {this.clicou()} }>
    <Text style={styles.botaoText}> Salvar </Text>
    </TouchableOpacity>
    <Link href="/telaC">Próxima página ></Link>
    <Link href="/telaA">Voltar</Link>
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
    padding: '1%',
    fontSize: '100%',
    textAlign: 'center',
    textAlign: 'justify',
  },
  input: {
    marginTop: 17,
    padding: 20,
    width: 300,
    backgroundColor: '#f0f0f0',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
  },
  botao: {
    width: '300%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  img:{
    marginTop: '-8%',
    width: '8%',
    padding: '1%',
  },
});