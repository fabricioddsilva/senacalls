import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, PermissionsAndroid, Platform } from "react-native";
import { RNCamera } from "react-native-camera";
import Icon from "react-native-vector-icons/Ionicons";

function LogoSupEsq() {
  const [avatarSource, setAvatarSource] = useState(null);
  const [profileSource, setProfileSource] = useState(null);
  const cameraRef = useRef(null);
  const [isCameraReady, setIsCameraReady] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestCameraPermission();
    } else {
      setIsCameraReady(true);
    }
  }, []);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Permissão da Câmera",
          message: "Este aplicativo precisa da permissão da câmera para tirar fotos.",
          buttonNeutral: "Pergunte-me depois",
          buttonNegative: "Cancelar",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setIsCameraReady(true);
      } else {
        console.warn("Permissão da câmera negada");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handleTakePhoto = async () => {
    if (cameraRef.current && isCameraReady) {
      try {
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);
        setAvatarSource({ uri: data.uri });
        setProfileSource({ uri: data.uri });
      } catch (error) {
        console.error("Erro ao tirar a foto:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.camera}
        type={RNCamera.Constants.Type.front}
        captureAudio={false}
        onCameraReady={() => setIsCameraReady(true)}
      />
      <TouchableOpacity style={styles.iconContainer} onPress={handleTakePhoto}>
        {avatarSource ? (
          <View style={styles.avatarContainer}>
            <View style={styles.avatarOverlay} />
            <Icon name="person" size={47} color="white" />
          </View>
        ) : (
          <Icon name="person" size={47} color="white" />
        )}
        <TouchableOpacity
          style={styles.cameraIconContainer}
          onPress={handleTakePhoto}
        >
          <Icon name="camera" size={18} color="white" />
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
  camera: {
    width: 65,
    height: 65,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
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
  avatarContainer: {
    position: 'absolute',
    width: 75,
    height: 75,
    borderRadius: 40,
    overflow: 'hidden',
  },
  avatarOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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