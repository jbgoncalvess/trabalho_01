import { useState, useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';

// Importando o contexto 'NomesContext' para acessar a função de adicionar nome
import { NomesContext } from '../components/NomesContext';
import CampoTexto from '../components/CampoTexto';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');

  // Acessando a função 'adicionarNome' do contexto (usando o hook useContext)
  const { adicionarNome } = useContext(NomesContext);

  const adicionar = () => {
    // Chama a função 'adicionarNome' para adicionar o nome à lista
    adicionarNome(nome);
    setNome('');
  };

  return (
    <View style={styles.container}>
      {/* Esse componente é um textInput estilizado, não muda muita coisa, só o "CSS"*/}
      <CampoTexto
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome"
      />
      {/* Chama função adicionar para chamar o adicionar de useContext e depois limpar a entrada */}
      <Button title="Adicionar" onPress={adicionar} />
      {/* Botão "Ver Lista" navega para a tela de lista ao ser pressionado */}
      <Button title="Ver Lista" onPress={() => navigation.navigate('Lista')} />
    </View>
  );
}

// Definindo estilos para a tela de cadastro.
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
});
