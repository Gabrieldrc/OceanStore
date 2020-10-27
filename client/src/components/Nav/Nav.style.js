const style = {
  Nav: {
    width: '1200px',
    height: 'inherit',
    margin: '0px auto',
    display: 'grid',
    gridTemplateAreas:'\'logo searchbar searchbar searchbar searchbar . . .\''
      +'\n\'logo fixedGrid fixedGrid fixedGrid fixedGrid changegrid changegrid changegrid\'',
    gridGap: '10px',
  },
  logo: {
    gridArea: 'logo',
    marginLeft: '0px',
  },
  logoJpg: {
    height: '95px',
    borderRadius: '50px',
  },
  fixedGrid: {
    gridArea: 'fixedGrid',
    display: 'grid',
    gridTemplateColumns: '25% 25% 25% 25%',
  },
  changeGrid: {
    gridArea: 'changegrid',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
  },
};

export default style;