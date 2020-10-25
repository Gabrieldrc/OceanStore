const subtitle = {
  fontSize: '1.8rem',
  margin: '5rem auto',
  display: 'flex',
};
const style = {
  constainer: {
    color: 'whitesmoke',
  },
  title: {
    margin: '5rem auto 0rem',
    width: 'fit-content',
  },
  leftSubtitle: {
    ...subtitle,
    justifyContent: 'flex-start',
  },
  rightSubtitle: {
    ...subtitle,
    justifyContent: 'flex-end',
  },
  a: {
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    color: 'whitesmoke',
    borderRadius: '10px',
    backgroundColor: 'rgb(133,112,199)',
    textDecoration: "none",
  },
  buttom: {
    width: 'fit-content',
    margin: '5rem auto 0rem',
  },
};

export default style;