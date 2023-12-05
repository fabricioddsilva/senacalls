import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Image, ScrollView, TouchableOpacity } from "react-native";
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';

function ChamadoForm() {
  const [equipamento, onChangeEquipamento] = useState('');
  const [codigo, onChangeCodigo] = useState('');
  const [lab, onChangeLab] = useState('');
  const [defeito, onChangeDefeito] = useState('');
  const [imagem, setImagem] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImagePicker = () => {
    const options = {
      title: 'Selecione uma imagem',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('Usuário cancelou a escolha da imagem');
      } else if (response.error) {
        console.log('Erro ao escolher a imagem:', response.error);
      } else {
        setImagem(response.uri);
      }
    });
  };

  const handleSubmit = async () => {
    try {
      if (!equipamento || !codigo || !lab) {
        console.log('Por favor, preencha todos os campos obrigatórios.');
        return;
      }

      setLoading(true);

      const formData = {
        equipamento,
        codigo,
        lab,
        defeito,
        imagem,
      };

      const resposta = await axios.post('https://localhost:3000/call', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (resposta.status === 200) {
        console.log('Formulário enviado com sucesso!');
      } else {
        console.log('Erro ao enviar o formulário:', resposta.status, resposta.statusText);
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.divTitulo}>
        <Text style={styles.titulo}>Equipamento</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEquipamento}
        value={equipamento}
        accessible={true}
        accessibilityLabel="Equipamento"
      />
      <View style={styles.divTitulo}>
        <Text style={styles.titulo}>Código</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeCodigo}
        value={codigo}
        accessible={true}
        accessibilityLabel="Código"
      />
      <View style={styles.divTitulo}>
        <Text style={styles.titulo}>Sala/lab</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeLab}
        value={lab}
        accessible={true}
        accessibilityLabel="Sala/Laboratório"
      />
      <View style={styles.divTitulo}>
        <Text style={styles.titulo}>Informe o defeito</Text>
      </View>
      <TextInput
        style={[styles.input, styles.textarea]}
        onChangeText={onChangeDefeito}
        value={defeito}
        multiline={true}
        numberOfLines={4}
        accessible={true}
        accessibilityLabel="Descrição do Defeito"
      />
      {imagem && <Image source={{ uri: imagem }} style={styles.imagem} />}
      <View style= {styles.botaoEscolher}>
        <TouchableOpacity style={styles.escolher} onPress={handleImagePicker} accessible={true} accessibilityLabel="Escolher Imagem" >
          <Text style= {styles.textoEscolher}>Escolher Imagens</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divTituloImg}>
        <Text style={styles.tituloImg}>Envie imagens</Text>
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
  divTituloImg: {
    paddingTop: 5,
  },
  escolher: {
    margin: 2,
    marginTop: 15,
    backgroundColor: "grey",
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
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
  botaoEscolher: {
    width: "40%",
    marginBottom: 10,
  },
  tituloImg:{
    fontSize: 15,
    marginTop: -11,
    marginBottom: 2,
  },
});

export default ChamadoForm;