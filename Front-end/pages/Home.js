import { useEffect, useState } from "react";
import ChamConcluido from "../components/ChamConcluido";
import ChamEmAndamento from "../components/ChamEmAndamento";
import LogoSupEsq from "../components/logoSupEsq";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import BotoesFooter from "../components/botoesFooter";


function Home(){

  const [chamados, setChamados] = useState([]);

  useEffect(() => {
    fetch("https://localhost:3000/call")
      .then((response) => response.json())
      .then((data) => setChamados(data))
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []); 

  return (
    <View style={styles.container}>
      <LogoSupEsq />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.chamadosContainer}>
          {chamados.length > 0 ? (
            chamados.map((chamado, index) => {
              if (chamado.tipo === "concluido") {
                return <ChamConcluido key={index} num={chamado.num} descricao={chamado.descricao} />;
              } else if (chamado.tipo === "emAndamento") {
                return <ChamEmAndamento key={index} num={chamado.num} descricao={chamado.descricao} />;
              }
              return null;
            })
          ) : (
            <View style= {styles.textContainer}><Text style= {styles.textoErro}>Não há chamados disponíveis.</Text></View>
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