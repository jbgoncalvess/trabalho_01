import { createContext, useState } from 'react';

export const NomesContext = createContext();

export function NomesProvider({ children }) {
  const [nomes, setNomes] = useState([]);

  // Função para adicionar um nome na lista de nomes (mesma coisa que a da aula).
  const adicionarNome = (nome) => {
    if (nome.trim() !== '') {
      setNomes(nomes.concat(nome.trim()));
    }
  };

  // Função para remover um nome da lista com base no índice.
  // Utiliza o método filter para criar uma nova lista somente com os itens em que o índice é diferente do que eu quero remover.
  const removerNome = (index) => {
    const novaLista = nomes.filter((_, i) => i !== index);
    setNomes(novaLista);
  };

  return (
    // O NomesContext.Provider torna o contexto disponível para os componentes filhos.
    // O 'value' contém o que será compartilhado: a lista de nomes e as funções para modificar ela.
    // Aqui eu forneço para os filhos (quaisquer que sejam) a função para adicionar, remover nome e a lista.
    <NomesContext.Provider value={{ nomes, adicionarNome, removerNome }}>
      {children}
    </NomesContext.Provider>
  );
}
