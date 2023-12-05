import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

const BotoesFooter = () => {
  const navigation = useNavigation();

  const handleNavigate = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleNavigate('Seu Perfil')} style={styles.button}>
        <FontAwesomeIcon name="user" size={47} color="orange" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigate('Abrir Chamado')} style={styles.button}>
        <FontAwesome5Icon name="plus-circle" size={52} color="orange" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigate('Seus Chamados')} style={styles.button}>
        <MaterialCommunityIconsIcon name="note-text" size={47} color="orange" />
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
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
  },
});

export default BotoesFooter;