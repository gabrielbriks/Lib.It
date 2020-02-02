import React from 'react';
import { useDrag } from 'react-dnd';

import { Container, Label } from './styles'


export default function Card({ data }){
  const [{ isDragging }, dragRef] = useDrag({
    item:{ type: 'CARD' }, /*Defininto o tipo do meu elemento que pode ser arrastado*/
    collect: monitor => ({
      isDragging: monitor.isDragging(),/*is dragging == esta sendo arrastado */
    }),
  });

  return (
    <Container ref={dragRef} isDragging = {isDragging}>
      <header>
        {data.labels.map(label => <Label key={label} color={label} title=""/>)} 
        
      </header>
      <p>
        {/* conteudo Card */}
        {data.content}
      </p>
      { data.user && <img src={data.user} alt="avatar"></img> } {/* Validação para mostrar avatar, so se existir responsavel*/}
    </Container> 
  );
}