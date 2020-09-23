
const styleContainer = {
  display: "grid",
  gridTemplateRows: "60% 40%",
  height: "350px",
  width: "200px",
  backgroundColor:"orange",
  border: "5px solid blueviolet",
};

const styleImage = {
  width: "100%",
  height: "auto",
};

const styleDetails = {
  display: "grid",
  gridTemplateRows: "auto auto auto",
  paddingLeft: "5px",
  paddingRight: "5px",
};

const styleColumn = {
  display: "grid",
  gridTemplateColumns: "70% 30%",
  width: "inherit",
};

module.exports = {
  container: styleContainer,
  image: styleImage,
  details: styleDetails,
  detailsColumn: styleColumn,
};