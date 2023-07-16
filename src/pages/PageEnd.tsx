import { Typography } from '../Styles/HomePage.styles';

function PageEnd() {
  return (
    <main>
      <Typography>Muito obrigado pela visita!</Typography>
      <Typography style={ { marginTop: '0' } }>
        Suas compras ja estão a caminho.
      </Typography>
      <Typography style={ { marginTop: '0' } }>O que mais voce precisa?</Typography>
    </main>
  );
}

export default PageEnd;
