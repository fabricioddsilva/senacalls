import { StyleSheet, View } from "react-native";
import FotoPerfil from "./fotoPerfil";

function fotoPerfilSupDir(){
    return(
        <View style= {styles.container}>
            <FotoPerfil />
        </View>
    )
};

const styles =  StyleSheet.create({
        container: {
            backgroundColor: "white",
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            padding: 2,
            paddingLeft: 10,
            width: 65,
            height: 65,
          },
});

export default fotoPerfilSupDir;