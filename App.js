import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/Stack';
import CadastroScreen from './screens/Cadastro';
import ListaScreen from './screens/Lista';
import { NomesProvider } from './components/NomesContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    /*
      O NomesProvider envolve a aplicação e disponibiliza o contexto de nomes para as telas.
      Ou seja, ele gerencia o estado global da lista de nomes, permitindo que as telas possam acessar
      e modificar essa lista (adicionar ou remover nomes) sem precisar passar essas informações diretamente
      Isso é diferente do exemplo da aula, onde o contexto foi usado para gerenciar a cor.
    */
    <NomesProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Cadastro" component={CadastroScreen} />
          <Stack.Screen name="Lista" component={ListaScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NomesProvider>
  );
}
