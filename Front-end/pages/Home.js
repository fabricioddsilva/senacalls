import LogoSupEsq from "../components/logoSupEsq";
import { StyleSheet, View } from "react-native";
import BotoesFooter from "../components/botoesFooter";
import TodosChamados from "../components/todosChamados";

function Home() {


  return (
    <View style={styles.container}>
      <LogoSupEsq />
      <TodosChamados />
      <BotoesFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  textoErro: {
    fontSize: 20,
  },
  chamadosContainer: {
    padding: 5,
  },
});

export default Home;