import { useEffect, useState } from "react";
import LogoSupEsq from "../components/logoSupEsq";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import BotoesFooter from "../components/botoesFooter";
import TodosChamados from "../components/todosChamados";

function Home() {
  const [chamados, setChamados] = useState([]);

  useEffect(() => {
    fetch("https://sua-api.com/chamados")
      .then((response) => response.json())
      .then((data) => setChamados(data))
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []); 

  return (
    <View style={styles.container}>
      <LogoSupEsq />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.chamadosContainer}>
          {chamados
            .filter((chamado) => chamado.tipo === "concluido")
            .map((chamado, index) => (
              <TodosChamados
                key={index}
                num={chamado.num}
                descricao={chamado.descricao}
                tipo={chamado.tipo}
              />
            ))}
          {chamados
            .filter((chamado) => chamado.tipo === "emAndamento")
            .map((chamado, index) => (
              <TodosChamados
                key={index}
                num={chamado.num}
                descricao={chamado.descricao}
                tipo={chamado.tipo}
              />
            ))}
          
          {chamados.length === 0 && (
            <View style={styles.textContainer}>
              <Text style={styles.textoErro}>Não há chamados disponíveis</Text>
            </View>
          )}
        </View>
      </ScrollView>
      <BotoesFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "white",
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