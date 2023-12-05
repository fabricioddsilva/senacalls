import LogoSupEsq from "../components/logoSupEsq";
import { StyleSheet, View } from "react-native";
import BotoesFooter from "../components/botoesFooter";
import TodosChamados from "../components/todosChamados";
import api from "../services/api"
import FotoPerfilSupDir from "../components/fotoPerfilSupDir";

function Home() {
  // const [chamados, setChamados] = useState([]);

  // useEffect(() => {
      
  //   async function loadCalls(){
  //     await api.get('/call/list')
  //     .then((response) => setChamados(response.data))
  //     .catch((error) => console.error("Erro ao buscar dados:", error));
  //   }
  //   loadCalls()  
  // }, []); 

  

  return (
    <View style={styles.container}>
      <LogoSupEsq />
      <FotoPerfilSupDir />
      <TodosChamados />
      <BotoesFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  textoErro: {
    fontSize: 20,
  },
  chamadosContainer: {
    padding: 5,
  },
});

export default Home;