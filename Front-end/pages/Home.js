import React, { useEffect, useState } from "react";
import LogoSupEsq from "../components/logoSupEsq";
import { FlatList, StyleSheet, Text, View } from "react-native";
import BotoesFooter from "../components/botoesFooter";
import TodosChamados from "../components/todosChamados";
import api from "../services/api"

function Home() {
  const [chamados, setChamados] = useState([]);

  useEffect(() => {
      
    async function loadCalls(){
      await api.get('/call/list')
      .then((response) => setChamados(response.data))
      .catch((error) => console.error("Erro ao buscar dados:", error));
    }
    loadCalls()  
  }, []); 

  const renderItem = ({ item }) => (
    <TodosChamados
      num={item.code}
      descricao={item.issue}
      tipo={item.type}
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