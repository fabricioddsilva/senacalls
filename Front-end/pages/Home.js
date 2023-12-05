import React, { useEffect, useState } from "react";
import LogoSupEsq from "../components/logoSupEsq";
import { FlatList, StyleSheet, Text, View } from "react-native";
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

  const renderItem = ({ item }) => (
    <TodosChamados
      num={item.num}
      descricao={item.descricao}
      tipo={item.tipo}
    />
  );

  return (
    <View style={styles.container}>
      <LogoSupEsq />
      <FlatList
        data={chamados}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListEmptyComponent={() => (
          <View style={styles.textContainer}>
            <Text style={styles.textoErro}>Não há chamados disponíveis</Text>
          </View>
        )}
        contentContainerStyle={styles.chamadosContainer}
      />
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