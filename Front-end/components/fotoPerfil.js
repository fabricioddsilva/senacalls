import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import ImagePicker from "react-native-image-picker";
import Icon from "react-native-vector-icons/Ionicons";


function FotoPerfil(){
    const [avatarSource, setAvatarSource] = useState(null);

    const handleChoosePhoto = () => {
      const options = {
        title: 'Escolha uma foto de perfil',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
  
      ImagePicker.showImagePicker(options, (response) => {
        if (response.didCancel) {
          console.log('Usuário cancelou a escolha da foto');
        } else if (response.error) {
          console.log('Erro ao escolher a foto:', response.error);
        } else {
          setAvatarSource({ uri: response.uri });
        }
      });
    };
  
    return (
        <TouchableOpacity style={styles.iconContainer} onPress={handleChoosePhoto}>
          {avatarSource ? (
            <Image source={avatarSource} style={styles.avatar} />
          ) : (
            <Icon name="person" size={50} color="white" />
          )}
        </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    iconContainer: {
      position: 'absolute',
      top: 50,
      alignSelf: 'center',
      backgroundColor: 'grey',
      padding: 15,
      borderRadius: 50,
      borderStyle: 'solid',
      borderColor: "black",
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 40,
    },
  });

export default FotoPerfil;