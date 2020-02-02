import React from 'react';

import { Container, Label } from './styles'


export default function Card({ data }){
  return (
    <Container>
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