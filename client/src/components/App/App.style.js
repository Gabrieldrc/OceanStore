const App = {
  textAlign: 'justify',
  display: 'grid',
  gridTemplateAreas:"'header'\n'body'",
};

const headerConteinerStyle = {
  gridArea: 'header',
  minHeight: '10vh',
  backgroundColor: 'black',
};

const bodyConteinerStyle = {
  gridArea: 'body',
  minHeight: '90vh',
  backgroundColor: '#212429',
};

const bodyContentStyle = {
  maxWidth: '1600px',
  margin: 'auto',
};

export default {
  App,
  headerConteinerStyle,
  bodyConteinerStyle,
  bodyContentStyle,
}