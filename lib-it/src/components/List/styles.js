import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px; /* "OR"  flex-grow:0; habilidade do componente se esticar, o '0' define uma largura fixa do começo ao fim
                            flex-shrink:0; a mesma coisa do de cima, mas ao contrario ao diminuir
                            flex-basis:320px; define o tamanho base desse elemento*/
                            
  opacity: ${ props => props.done ? 0.6 : 1} /* Pega a props definida in List perguntando se for "done = true"*/

  /* Eu quero que o style seja aplicado onde um div possui uma div anterior*/
  & + div{
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header{
    display:flex;/*Para o elemento ficar um do lado do outro */
    justify-content: space-between; /*Para que cada um deles fique no canto */
    align-items: center;
    height: 42px;

    h2{
      font-weight: 500;/*Deixa a letra mais fina, clean, e suave */
      font-size: 16px;
      padding: 0 10px;
    };
    button{
      width:42px;
      height: 42px;
      border-radius: 18px;
      background: #3b5bfd;
      border:0;
      cursor: pointer;
    };
    /*My Hover */
    :hover button{
      background: #283B9E;
       
    }
  }

  ul{
    margin-top: 30px;
  }

`;
