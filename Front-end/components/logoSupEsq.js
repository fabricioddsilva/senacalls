import { Image, StyleSheet, View } from "react-native";

function LogoSupEsq(){
    return(
            <View style={styles.container}>
              <Image
                source={require('../assets/logo.png')}
                style={styles.imagem}
              />
            </View>
          );
        };
        
        const styles = StyleSheet.create({
          container: {
            backgroundColor: "white",
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            padding: 2,
            paddingLeft: 10,
          },
          imagem: {
            width: 65,
            height: 65,
            resizeMode: 'contain',
          },
        });

export default LogoSupEsq;