import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ImagePicker from "react-native-image-picker";

function LogoSupEsq() {
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

  const handleTakePhoto = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 800,
      maxHeight: 800,
    };

    ImagePicker.launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('Usuário cancelou a captura da foto');
      } else if (response.error) {
        console.log('Erro ao capturar a foto:', response.error);
      } else {
        setAvatarSource({ uri: response.uri });
      }
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.imagem}
      />
      <TouchableOpacity style={styles.iconContainer} onPress={handleChoosePhoto}>
        {avatarSource ? (
          <Image source={avatarSource} style={styles.avatar} />
        ) : (
          <Icon name="person" size={47} color="white" />
        )}
        <TouchableOpacity
          style={styles.cameraIconContainer}
          onPress={handleTakePhoto}
        >
          <Icon name="camera" size={22} color="white" />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 8,
    paddingLeft: 10,
  },
  imagem: {
    width: 65,
    height: 65,
    resizeMode: 'contain',
  },
  iconContainer: {
    position: 'absolute',
    top: 5,
    right: 10,
    alignSelf: 'flex-end',
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 50,
    borderStyle: 'solid',
    borderColor: 'black',
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 40,
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: 'orange',
    borderRadius: 20,
    padding: 5,
  },
});

export default LogoSupEsq;