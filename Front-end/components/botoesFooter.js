import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const BotoesFooter = () => {
  const navigation = useNavigation();

  const handleNavigate = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleNavigate('Seu Perfil')} style={styles.button}>
        <MaterialIcons name="person" size={55} color="orange" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigate('Abrir Chamado')} style={styles.button}>
        <MaterialCommunityIcons name="plus-circle" size={60} color="orange" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigate('Seus Chamados')} style={styles.button}>
        <MaterialCommunityIcons name="note-text" size={55} color="orange" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 8,
  },
  button: {
    alignItems: 'center',
  },
});

export default BotoesFooter;
