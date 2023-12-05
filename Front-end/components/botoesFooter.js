import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

const BotoesFooter = () => {
  const navigation = useNavigation();

  const handleNavigate = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleNavigate('Seu Perfil')} style={styles.button}>
        <AntDesignIcon name="person" size={30} color="orange" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigate('Abrir Chamado')} style={styles.button}>
        <IoniconsIcon name="pluscircle" size={35} color="orange" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigate('Seus Chamados')} style={styles.button}>
        <MaterialCommunityIconsIcon name="note-text" size={30} color="orange" />
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
  },
  button: {
    alignItems: 'center',
  },
});

export default BotoesFooter;