import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.container2}>
        <img style={styles.img} src={'../assets/Logo.png'}></img>
      <Text style={styles.titulo}>Canva</Text>
      </View> 

      <View style={styles.container2}>
      <img style={styles.img} src={'../assets/T1.png'}></img>
      <img style={styles.img} src={'../assets/T2.png'}></img>
      </View>

      <View style={styles.container2}>
      <img style={styles.img} src={'../assets/T3.png'}></img>
      <img style={styles.img} src={'../assets/T4.png'}></img>
      </View>

      <View style={styles.container2}>
      <img style={styles.img} src={'../assets/T5.png'}></img>
      <img style={styles.img} src={'../assets/T6.png'}></img>
      </View>

      <View style={styles.container2}>
      <img style={styles.img} src={'../assets/T7.png'}></img>
      <img style={styles.img} src={'../assets/T8.png'}></img>
      </View>

      <View style={styles.container2}>
      <Link href="/">Voltar</Link>
      <StatusBar style="auto" />
      </View>
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
  img:{
    marginTop: '0%',
    width: '10%',
    padding: '1%',
  },
  container2:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }
});