import React from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

function perfilForm(){
    
    const [nome, onChangeNome] = React.useState('');
    const [sobrenome, onChangeSobrenome] = React.useState('');
    const [matricula, onChangeMatricula] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [senha, onChangeSenha] = React.useState('');

    const handleSubmit = async () => {
      try {
        const resposta = await fetch('https://seu-servidor.com/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nome, sobrenome, matricula, email, senha }),
        });
  
        const dados = await resposta.json();
  
        if (resposta.ok) {
          navigation.navigate('Home');
        } else {
         
          setMensagemErro(dados.mensagem);
        }
      } catch (error) {
        console.error('Erro na solicitação:', error);
        setMensagemErro('Erro na conexão com o servidor. Tente novamente mais tarde.');
      }
    };
  

    return (
      <ScrollView>
        <View style= {styles.container}>
          <View style= {styles.containerInput}>
            <Text>Nome</Text>
          </View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNome}
              value={nome}
            />
          <View style= {styles.containerInput}>
            <Text>Sobrenome</Text>
          </View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeSobrenome}
              value={sobrenome}
            />
          <View style= {styles.containerInput}>
            <Text>Matricula</Text>
          </View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeMatricula}
              value={matricula}
            />
          <View style= {styles.containerInput}>
            <Text>Email</Text>
          </View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
            />
          <View style= {styles.containerInput}>
            <Text>Senha</Text>
          </View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeSenha}
              value={senha}
            />
            <View style={styles.divBotao}>
              <Button
                style={styles.botao}
                onPress={handleSubmit}
                title='Salvar'
              />
            </View>
        </View>
      </ScrollView>  
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: "white",
  },
  containerInput: {
    marginLeft: 28,
    paddingTop: 15,
  },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderRadius: 8,
      width: "85%",
      borderColor: "orange",
      marginLeft: 20,
    },
    divBotao: {
      marginHorizontal: "27%",
      borderRadius: 20,
      width: "40%",
      padding: 20,
      marginTop: 10,
      marginBottom: 30,
    },
    botao: {
      borderRadius: 20,
    },
  });

export default perfilForm; 