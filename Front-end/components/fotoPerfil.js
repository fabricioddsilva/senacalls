import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, Platform } from "react-native";
import ImagePicker from "react-native-image-picker";
import Icon from "react-native-vector-icons/Ionicons";
import { launchCamera } from "react-native-image-picker";

function FotoPerfil() {
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

    launchCamera(options, (response) => {
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
    <TouchableOpacity style={styles.iconContainer} onPress={handleChoosePhoto}>
      {avatarSource ? (
        <Image source={avatarSource} style={styles.avatar} />
      ) : (
        <Icon name="person" size={50} color="white" />
      )}
      <TouchableOpacity
        style={styles.cameraIconContainer}
        onPress={handleTakePhoto}
      >
        <Icon name="camera" size={30} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    backgroundColor: 'grey',
    padding: 15,
    borderRadius: 50,
    borderStyle: 'solid',
    borderColor: 'black',
  },
  avatar: {
    width: 80,
    height: 80,
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

export default FotoPerfil;