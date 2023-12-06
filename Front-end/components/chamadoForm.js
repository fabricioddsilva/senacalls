import React, { useState, useRef } from "react";
import { StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import { RNCamera } from 'react-native-camera';

import api from '../services/api'

function ChamadoForm () {
  const navigation = useNavigation()
  const [computer, onChangeEquipamento] = useState('');
  const [code, onChangeCodigo] = useState('');
  const [room, onChangeLab] = useState('');
  const [issue, onChangeDefeito] = useState('');
  const [image, setImagem] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const cameraRef = useRef(null);

  const handleCameraCapture = async () => {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      setImagem(data.uri);
      toggleCamera();
    }
  };

  const toggleCamera = () => {
    setIsCameraOpen(!isCameraOpen);
  };

  const handleSubmit = async () => {
    try {
      if (!equipamento || !codigo || !lab) {
        console.log('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
  
      const formData = {
        equipamento,
        codigo,
        lab,
        defeito,
        imagem,
      };
  
      const response = await fetch('https://sua-api.com/call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Formulário enviado com sucesso!');
      } else {
        console.log('Erro ao enviar o formulário:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }
  };

  const renderCamera = () => {
    if (isCameraOpen) {
      return (
        <RNCamera
          style={styles.camera}
          ref={cameraRef}
        >
          <TouchableOpacity style={styles.cameraButton} onPress={handleCameraCapture}>
            <Text style={styles.cameraButtonText}>Capturar Foto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={toggleCamera}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </RNCamera>
      );
    }
    return null;
  };

  const handleSubmit = async () => {
    try {
      if (!computer || !code || !room) {
        console.log('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
  
      // setLoading(true);
      
      const formData = {
        computer,
        code,
        room,
        issue,
        image
      };
  
      await api.post('/call', formData)
      .then((response) => {if (response.status == 201){
        console.log('Chamado enviado com sucesso!')
        
      } else {
        console.log('Erro ao enviar o formulário:', response.status, response.statusText);
      }})
      
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    } 
    navigation.navigate("Home")
  };
  
  return (
    <View style={styles.container}>
      {renderCamera()}
      <View style={styles.divTitulo}>
        <Text style={styles.titulo}>Equipamento</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEquipamento}
        value={computer}
        accessible={true}
        accessibilityLabel="Equipamento"
      />
      <View style={styles.divTitulo}>
        <Text style={styles.titulo}>Código</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeCodigo}
        value={code}
        accessible={true}
        accessibilityLabel="Código"
      />
      <View style={styles.divTitulo}>
        <Text style={styles.titulo}>Sala/lab</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeLab}
        value={room}
        accessible={true}
        accessibilityLabel="Sala/Laboratório"
      />
      <View style={styles.divTitulo}>
        <Text style={styles.titulo}>Informe o defeito</Text>
      </View>
      <TextInput
        style={[styles.input, styles.textarea]}
        onChangeText={onChangeDefeito}
        value={issue}
        multiline={true}
        numberOfLines={4}
        accessible={true}
        accessibilityLabel="Descrição do Defeito"
      />
      {image && <Image source={{ uri: image }} style={styles.imagem} />}
      <View style={styles.botaoEscolher}>
        <TouchableOpacity style={styles.cameraButton} onPress={toggleCamera} accessible={true} accessibilityLabel="Capturar Foto">
          <Text style={styles.textoEscolher}>Capturar Foto</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.botao}>
        <Button title="Abrir Chamado" onPress={handleSubmit} accessible={true} accessibilityLabel="Enviar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  input: {
    height: 45,
    width: "85%",
    marginBottom: 12,
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    borderColor: "orange",
  },
  textarea: {
    height: 100,
    textAlignVertical: "top",
  },
  divTitulo: {
    width: "100%",
    paddingLeft: 35,
  },
  titulo: {
    fontSize: 18,
    padding: 2,
  },
  botaoEscolher: {
    marginTop: 15,
    marginBottom: 15,
  },
  cameraButton: {
    margin: 2,
    marginBottom: 5,
    backgroundColor: "orange",
    padding: 7,
    alignSelf: 'center',
    borderRadius: 5,
  },
  textoEscolher: {
    fontSize: 14,
    color: "white",
  },
  imagem: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
  botao: {
    marginTop: 35,
    width: "40%",
    borderRadius: 8,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cameraButton: {
    alignSelf: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'orange',
    borderRadius: 5,
  },
  cameraButtonText: {
    color: 'white',
    fontSize: 16,
  },
  closeButton: {
    alignSelf: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ChamadoForm;