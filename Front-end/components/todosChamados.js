import React, { useEffect, useState } from "react";
import api from "../services/api"
import { FlatList, StyleSheet, Text, View } from "react-native";

function TodosChamados() {
  const [chamados, setChamados] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadCalls(){
      await api.get("/call/list")
      .then(response => setChamados(response.data))
      .catch(error => 
        console.error("Erro ao buscar dados:", error)
      )
      .finally(() => 
        setIsLoading(false)
      );}

      loadCalls()
  }, []);

 

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (

    // <View>
    //   <FlatList data={chamados} ListEmptyComponent={() => (
    //     <Text>Sem Dados</Text>
    //   )}
    //   renderItem={({item}) => (
    //     <View>
    //       <Text>Nº do Chamado: {item.issue}</Text>
    //     </View>
    //   )}
    //   />
    // </View>
// keyExtractor={(item, index) => index.toString()}
    <View style={styles.divChamado}>
      <FlatList data={chamados}
      ListEmptyComponent={() => (
        <View style={styles.textContainer}>
          <Text style={styles.textoErro}>Não há chamados disponíveis.</Text>
          </View>
          )}
        renderItem={({item}) => (
        <View style={styles.divChamado}>
        <Text style={styles.texto}>Chamado: {item.code}</Text>
        <Text>{item.issue}</Text>
        {item.type === "Concluido" ? (
          <View style={styles.concluido}>
            <Text style={styles.concluidoTexto}>Concluído</Text>
          </View>
        ) : (
          <View style={styles.emAndamento}>
            <Text style={styles.emAndamentoTexto}>Em andamento</Text>
          </View>
        )}
      </View>
      )}
    />
    </View>
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
  textContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  textoErro: {
    fontSize: 20,
  }
});

export default TodosChamados;