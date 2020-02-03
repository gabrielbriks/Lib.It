import React from 'react';

import { MdAdd } from 'react-icons/md'; //md == Material Desing
import Card from '../Card';

import { Container } from './styles';

export default function List({ data, index: listIndex }){/*Renomeando o index*/
  return  (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        { data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#fff"/>
          </button>
        ) }
        
      </header>

      {/* List Itens */}
      <ul>
          { data.cards.map((card, index) => (
            <Card 
              key={card.id}
              listIndex={listIndex}
              index={index} 
              data={card}
            />
          )) }

        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </ul>
    </Container>
  );
  }