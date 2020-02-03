import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import BoardContext from '../Board/context';

import { Container, Label } from './styles'


export default function Card({ data, index, listIndex }){
  const ref = useRef();
  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    item:{ type: 'CARD', index, listIndex}, /*Defininto o tipo do meu elemento que pode ser arrastado, o seu index, e o index de sua lista*/
    collect: monitor => ({
      isDragging: monitor.isDragging(),/*is dragging == esta sendo arrastado */
    }),
  });

 const [, dropRef] =  useDrop({
    /*Possui uma propiedade obrigatoria, que é o accept, que defini qual o tipo de elemento
      que podera receber a ação de drop*/
    accept: 'CARD',
    /*item == qual é o card que estamos arrastando*/
    hover(item, monitor){
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;
      
      const draggedIndex = item.index;//Car que esta sendo arrastado
      const targetIndex = index;//Card Alvo

      if(draggedIndex === targetIndex && draggedListIndex === targetListIndex){
        return;
      }

      /*Pegando o tamanho do nosso elemento e descobrindo o centro dele; Essa abordagem esta na docs do Dnd */
      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffSet = monitor.getClientOffset();
      const draggedTop = (draggedOffSet.y - targetSize.top); 

      /* Esta tratando movimentos infalsos(de cima para baixo, dentro da lista) no caso o card so é
       movido de fato se passar do meio do outro card(que é o card referencia)*/
      if(draggedIndex < targetIndex && draggedTop < targetCenter){
        return;
      }
      
      /*esta tratando o movimentos infalsos(de baixo para cima dentro da lista) */
      if(draggedIndex > targetIndex && draggedTop > targetCenter){
        return;
      }

      /*Essa é a função criada utilizando o context possui dois parametros "From" & "To"(qual estou movendo, para onde estou movendo)*/
      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);
      
      /*Resolvendo um pequeno bug ao movimentar o card, qual ficava tremendo por nao saber que ja havia concluido sua movimentacao
      consiste em dizer para ele qual é agora o seu novo index*/
      item.index = targetIndex;
      item.listIndex = targetListIndex;

    },
  });

  /*usando essa abordagem para passarmos as duas referencias de drag e drop, pois um componente
  so se pode utilizar apenas uma referencia */
  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging = {isDragging}>
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