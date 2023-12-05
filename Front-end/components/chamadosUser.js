import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function chamadosUser(){

    return(
        <>
        <View style={styles.divChamado}>
            <View style={styles.divChamado}>
                <Text style={styles.texto}>Nº Chamado: {chamadoNumero}</Text>
                <Text>{chamadoDescricao}</Text>
                    <View style={styles.concluido}>
                        <Text style={styles.concluidoTexto}>Em andamento</Text>
                    </View>
                    <View style={styles.opcoesContainer}>
                        <TouchableOpacity onPress={edit}>
                            <Text>Editar</Text>
                        </TouchableOpacity>
                            <TouchableOpacity onPress={exclusao}>
                                <Text style={styles.excluir}>Excluir</Text>
                            </TouchableOpacity>
                    </View>
            </View>
        </View>
            <View style={styles.divChamado}>
            <Text style={styles.texto}>Nº Chamado: {chamadoNumero}</Text>
            <Text>{chamadoDescricao}</Text>
                <View style={styles.emAndamento}>
                    <Text style={styles.emAndamentoTexto}>Em andamento</Text>
                </View>
            </View>
        </>
        )
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
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    excluir: {
        color: "red",
    },
    opcoesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
      },
});

export default chamadosUser;