import { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native'; // FlatList é único componente básico que não tinhamos visto.
import { NomesContext } from '../components/NomesContext';
import ItemNome from '../components/ItemNome';

export default function ListaScreen() {
  // Acessando os dados do contexto (nomes) e a função 'removerNome'.
  const { nomes, removerNome } = useContext(NomesContext);

  return (
    <View style={styles.container}>
      {/* FlatList é utilizado para renderizar listas grandes de dados de forma eficiente */}
      <FlatList
        data={nomes} // 'data' é a lista de nomes que será exibida.
        keyExtractor={(_, index) => index.toString()} // keyExtractor é usado para definir uma chave única para cada item da lista.
        // O índice é usado aqui para garantir que cada item tenha uma chave única.
        

        // 'renderItem' define como cada item da lista será renderizado.
        // Neste caso, aparecerá o nomezinho e o botão de excluir.
        // EX: BELTRANO BATISTA GONÇALVES          EXCLUIR
        renderItem={({ item, index }) => ( 
          <ItemNome
            nome={item}
            onExcluir={() => removerNome(index)}
          />
        )}
        // Componente padrão que exibe mensagem para caso a lista esteja vazia.
        ListEmptyComponent={<Text>Nenhum nome cadastrado.</Text>}
      />
    </View>
  );
}

// Estilos - "CSS"
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});
