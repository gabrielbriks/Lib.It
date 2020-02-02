import styled from 'styled-components';

export const Container = styled.div`
  display:flex; /*Por padrão ele já possui o "direction row"*/
  padding: 30px 0;
  height: calc(100% - 80px); /*100% do meu documnet, menos 80px do meu header*/
  
`;