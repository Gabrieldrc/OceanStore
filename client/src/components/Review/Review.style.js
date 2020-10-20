const ReviewStyle = {
  container: {
    display: 'grid',
    gridTemplateColumns: '210px auto',
    color: 'whitesmoke',
    marginTop: '20px',
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: 'rgb(22,32,45)',
    boxShadow: '0.5px 0.5px rgb(20,161,234)',
  },
  userContainer: {
    display: 'grid',
    gridTemplateRows: 'auto auto',
  },
  rightContainer: {
    display: 'grid',
    gridTemplateRows: 'auto 50px',
  },
  reviewContainer: {
    paddingTop: '10px',
  },
  buttomsContainer: {
    display: 'grid',
    justifyContent: 'end',
    alignContent: 'center',
  },
  starsIcon: {
    height: '0.8rem',
    width: '0.8rem',
  },
};

export default ReviewStyle;