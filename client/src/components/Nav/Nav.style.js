const Nav = {
  width: '1200px',
  height: 'inherit',
  margin: '0px auto',
  display: 'grid',
  gridTemplateAreas:'\'logo searchbar searchbar searchbar searchbar . . .\''
    +'\n\'logo fixedGrid fixedGrid fixedGrid fixedGrid changegrid changegrid changegrid\'',
  gridGap: '10px',
};

const logo = {
  gridArea: 'logo',
  marginLeft: '0px',
};

const logoJpg = {
  height: '95px',
  borderRadius: '50px',
};

const fixedGrid = {
  gridArea: 'fixedGrid',
  display: 'grid',
  gridTemplateColumns: '25% 25% 25% 25%',
};

const changeGrid = {
  gridArea: 'changegrid',
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
};

export default {
  Nav,
  logo,
  logoJpg,
  fixedGrid,
  changeGrid,
};