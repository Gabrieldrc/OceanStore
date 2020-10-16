const buttoms = {
  width: 'fit-content',
  textDecoration: 'none',
  fontWeight: '100',
  padding: '0.3rem 1rem',
  cursor: 'pointer',
};

const ButtomStyle = {
  getStyle(primaryColor='black', secundaryColor='gray') {
    return {
      ...buttoms,
      fontWeight: '400',
      color: 'whitesmoke',
      backgroundImage: `linear-gradient(to bottom left, ${secundaryColor}, ${primaryColor})`,
    };
  },
  getOnMouseOverStyle(primaryColor = 'black' ,secundaryColor = 'gray') {
    return {
      ...buttoms,
      fontWeight: '400',
      color: 'white',
      backgroundColor: secundaryColor,
      backgroundImage: `radial-gradient(${secundaryColor}, ${primaryColor})`,
    };
  },
  getClickStyle(secundaryColor='gray') {
    return {
      ...buttoms,
      fontWeight: '500',
      color: 'whitesmoke',
      backgroundColor: secundaryColor,
    };
  }
};


export default ButtomStyle;