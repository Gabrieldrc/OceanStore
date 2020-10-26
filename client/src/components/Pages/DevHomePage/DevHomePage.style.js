const subtitle = {
  fontSize: '1.8rem',
  margin: '5rem auto',
  display: 'flex',
};
const style = {
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
};

export default style;