import React, { useState } from 'react';
import produce from 'immer';

import { loadLists } from '../../services/api';

import BoardContext from './context';

import List from '../List'
import { Container } from './styles';

const data = loadLists();

export default function Board(){
  const [lists, setLists] = useState(data);
  
  function move(fromList, tolist, from, to){
 
    //Draft == Rascunho
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from];//temos as informações do card que esta sendo arrastado
      
      draft[fromList].cards.splice(from, 1); //removendo esse item que esta sendo arrastado da lista
      draft[tolist].cards.splice(to, 0, dragged); //Adicionando o item arrastado em seu destino final(na lista/ordem destino)
    }))
  }



  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        { lists.map((list, index) => <List key={list.title} index={index} data={list} />) }
      </Container>
    </BoardContext.Provider>
  );
}