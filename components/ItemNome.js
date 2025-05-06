import { View, Text, Button, StyleSheet } from 'react-native';


// Componente de como será exibido o nome e o botão de excluir.
// Defini como componente para caso precisar reutilizar ele em outro tela, por exemplo.
export default function ItemNome({ nome, onExcluir }) {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{nome}</Text>
      <Button title="Excluir" onPress={onExcluir} />
    </View>
  );
}

// Estilização, muito semelhante ao CSS normal. Nota-se que aqui eu não estou usando inline.
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  nome: {
    fontSize: 16,
  },
});
