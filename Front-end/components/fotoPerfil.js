import React, { useState, useRef } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { RNCamera } from "react-native-camera";
import Icon from "react-native-vector-icons/Ionicons";

function FotoPerfil() {
  const [avatarSource, setAvatarSource] = useState(null);
  const cameraRef = useRef(null);

  const handleTakePhoto = async () => {
    if (cameraRef.current) {
      try {
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);
        setAvatarSource({ uri: data.uri });
      } catch (error) {
        console.error("Erro ao tirar a foto:", error);
      }
    }
  };

  return (
    <RNCamera
      ref={cameraRef}
      style={styles.camera}
      type={RNCamera.Constants.Type.front}
      captureAudio={false}
    >
      <TouchableOpacity style={styles.iconContainer} onPress={handleTakePhoto}>
        {avatarSource ? (
          <Image source={avatarSource} style={styles.avatar} />
        ) : (
          <Icon name="person" size={48} color="white" />
        )}
        <TouchableOpacity
          style={styles.cameraIconContainer}
          onPress={handleTakePhoto}
        >
          <Icon name="camera" size={24} color="white" />
        </TouchableOpacity>
      </TouchableOpacity>
    </RNCamera>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'absolute',
    top: 15,
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