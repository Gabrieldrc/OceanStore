
const AppStyle = {
  App: {
    textAlign: 'justify',
    display: 'grid',
    gridTemplateAreas:"'header'\n'body'",
  },
  
  headerContainerStyle: {
    gridArea: 'header',
    minHeight: '10vh',
    backgroundColor: 'black',
  },
  
  bodyContainerStyle: {
    gridArea: 'body',
    minHeight: '90vh',
    backgroundColor: '#212429',
  },
  
  bodyContentStyle: {
    maxWidth: '1600px',
    margin: 'auto',
  },

  setBodyStyle(error) {
    if (error) {
      return {
        ...this.bodyContainerStyle,
        backgroundImage: 'url("./images/oceanPurple.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        backgroundColor: 'black',
      };
    }
    return this.bodyContainerStyle;
  },

  setBodyContentStyle(error) {
    if (error) {
      return {
        display: 'grid',
        position: 'relative',
        minHeight: 'inherit',
        alignContent: 'center',
        justifyContent: 'center',
      };
    }
    return this.bodyContentStyle;
  }

};


export default AppStyle;