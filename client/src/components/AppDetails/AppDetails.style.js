const AppDetailsPageStyle = {
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
  rateContainer: {
    display: 'inline',
  },
  row: {
    display: 'inline-grid',
    justifyContent: 'end',
  },
  icon: {
    height: '1.2rem',
    width: '1.2rem',
    marginRight: '0.2rem',
  },
};

export default AppDetailsPageStyle;