import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import axios from "axios";

function ChamEmAndamento() {
    const [chamadoNumero, setChamadoNumero] = useState("");
    const [chamadoDescricao, setChamadoDescricao] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get("https://localhost:3000/call")
            .then(response => {
                setChamadoNumero(response.data.num);
                setChamadoDescricao(response.data.descricao);
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
        <View style={styles.divChamado}>
            <Text style={styles.texto}>Nº Chamado: {chamadoNumero}</Text>
            <Text>{chamadoDescricao}</Text>
                <View style={styles.emAndamento}>
                    <Text style={styles.emAndamentoTexto}>Em andamento</Text>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    divChamado: {
        backgroundColor: "orange",
    },
    texto: {
        fontWeight: 'bold',
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
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ChamEmAndamento;