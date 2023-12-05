import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TextInput, View, StatusBar, TouchableOpacity } from "react-native";
import axios from 'axios';

function CadastroForm() {
  const [matricula, onChangeMatricula] = useState('');
  const [email, onChangeEmail] = useState('');
  const [senha, onChangeSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      const resposta = await axios.post('https://localhost:3000/user', { email, senha });

      if (resposta.status === 200) {
        navigation.navigate('Home');
      } else {
        setMensagemErro(resposta.data.mensagem);
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
      setMensagemErro('Erro na conexão com o servidor. Tente novamente mais tarde.');
    }
  };

  const navegarParaOutraPagina = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Matrícula"
        value={matricula}
        onChangeText={onChangeMatricula}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={onChangeEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={onChangeSenha}
        secureTextEntry
      />
      <View style={styles.divBotao}>
        <TouchableOpacity
          style={styles.botao}
          onPress={handleSubmit}
        >
          <Text style={{ color: 'white' }}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divLinks}>
        <TouchableOpacity onPress={navegarParaOutraPagina}>
          <Text style={styles.esqueciSenha}>Faça o login</Text>
        </TouchableOpacity>
      </View>
      {mensagemErro !== '' && (
        <Text style={{ color: 'red', textAlign: 'center' }}>{mensagemErro}</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

export default CadastroForm;