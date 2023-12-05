import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SeusChamados from "./pages/SeusChamados";
import AbrirChamado from "./pages/AbrirChamado";
import SeuPerfil from "./pages/SeuPerfil";
import Cadastro from "./pages/Cadastro"

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
          <Stack.Navigator initialRouteName= "Home">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Seus Chamados" component={SeusChamados} />
            <Stack.Screen name="Abrir Chamado" component={AbrirChamado} />
            <Stack.Screen name="Seu Perfil" component={SeuPerfil} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};
