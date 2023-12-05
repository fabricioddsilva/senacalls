import { Image, StyleSheet, View } from "react-native";

function LogoCentral(){
    return(
        <View style = {styles.container}>
              <Image
                source={require('../assets/logo.png')}
                style={styles.imagem}
              />
          </View>
          );
        };
        
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 0.2,
            paddingBottom: 50,
          },
          imagem: {
            justifyContent: 'center',
            alignItems: 'center',
            width: 110,
            height: 110,
            resizeMode: 'contain',
            top: 0,
            alignSelf: 'center',
            backgroundColor: "white",
          },
        });

export default LogoCentral;