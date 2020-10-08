const buttoms = {
  width: 'fit-content',
  textDecoration: 'none',
  fontWeight: '100',
  padding: '0.2rem 0.4rem',
  borderRadius: '5px',
  borderStyle: 'solid',
  borderWidth: '1px',
};

const AppDetailsPageStyle = {
  container: {
    margin: 'auto',
    width: '1000px',
  },
  resumeContainer: {
    borderRadius: '5px',
    height: '300px',
    display: 'grid',
    padding: '20px',
    fontSize: '1.5rem',
    gridRowGap: '20px',
    gridColumnGap: '50px',
    gridTemplateColumns: '300px auto',
  },
  imageContainer: {
    backgroundColor: 'purple',
    width: 'auto',
    height: 'auto',
  },
  details: {
    display: 'grid',
    padding: '20px',
    color: 'whitesmoke',
    fontWeight: '300',
    borderLeft: '1px solid whitesmoke',
    gridRowGap: '15px',
    alignContent: 'end',
    gridTemplateRows: 'auto',
  },
  buttomsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  row: {
    display: 'grid',
    justifyContent: 'end',
    // color: '',
  },
  title: {
    borderBottom: '1px solid transparent',
    borderImage: 'linear-gradient(to right, #14a1ea 0%, #212429 100%)',
    borderImageSlice: 1,
  },
  p: {
    color: 'whitesmoke',
  },
  awButtoms:{
    ...buttoms,
    color: '#14a1ea',
    borderColor: '#14a1ea',
  },
  acButtoms:{
    ...buttoms,
    color: '#8570c7',
    borderColor: '#8570c7',
  },
};

export default AppDetailsPageStyle;