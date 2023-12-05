import React, { useEffect, useState } from "react";
import axios from "axios";
import { FlatList, StyleSheet, Text, View } from "react-native";

function TodosChamados() {
  const [chamados, setChamados] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://sua-api.com/call")
      .then(response => {
        setChamados(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar dados:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.divChamado}>
      <Text style={styles.texto}>Nº Chamado: {item.num}</Text>
      <Text>{item.descricao}</Text>
      {item.concluido ? (
        <View style={styles.concluido}>
          <Text style={styles.concluidoTexto}>Concluído</Text>
        </View>
      ) : (
        <View style={styles.emAndamento}>
          <Text style={styles.emAndamentoTexto}>Em andamento</Text>
        </View>
      )}
    </View>
  );

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={chamados}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  divChamado: {
    backgroundColor: "orange",
    marginBottom: 10,
    padding: 10,
    position: 'relative',
  },
  texto: {
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  concluido: {
    position: "absolute",
    top: 5,
    right: 5,
    padding: 5,
    backgroundColor: "green",
  },
  concluidoTexto: {
    fontSize: 10,
  },
  emAndamento: {
    position: "absolute",
    top: 5,
    right: 5,
    padding: 5,
    backgroundColor: "yellow",
  },
  emAndamentoTexto: {
    fontSize: 10,
  },
});

export default TodosChamados;