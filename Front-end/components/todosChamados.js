import { useEffect, useState } from "react";
import axios from "axios";
import { ScrollView, StyleSheet, Text, View } from "react-native";

function TodosChamados() {
    const [chamados, setChamados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get("https://sua-api.com/chamados")
            .then(response => {
                setChamados(response.data); // Supondo que a API retorna uma lista de chamados
            })
            .catch(error => {
                console.error("Erro ao buscar dados:", error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <ScrollView>
            {chamados.map((chamado, index) => (
                <View key={index} style={styles.divChamado}>
                    <Text style={styles.texto}>Nº Chamado: {chamado.num}</Text>
                    <Text>{chamado.descricao}</Text>
                    {chamado.concluido ? (
                        <View style={styles.concluido}>
                            <Text style={styles.concluidoTexto}>Concluído</Text>
                        </View>
                    ) : (
                        <View style={styles.emAndamento}>
                            <Text style={styles.emAndamentoTexto}>Em andamento</Text>
                        </View>
                    )}
                </View>
            ))}
        </ScrollView>
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
