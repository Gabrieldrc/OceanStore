const width = 244;
const height = 343;
const styleContainer = {
  display: "inline-block",
  maxHeight: `${height}px`,
  maxWidth: `${width}px`,
  backgroundColor:"white",
  border: "2px solid #  ",
  margin: "20px 10px",
};
const paddingI = 15;
const styleImageContainer = {
  maxHeight: `${width}px`,
  maxWidth: `${width}px`,
  padding: `${paddingI}px`,
};

const imageBlock = width - (paddingI*4);
const styleImage = {
  display: "block",
  border: "0.1px solid black",
  maxHeight: `${imageBlock}px`,
  maxWidth: `${imageBlock}px`,
};

const styleDetails = {
  display: "grid",
  gridTemplateRows: "auto auto",
  padding: "5px 10px",
  color: "#6f6f6f",
  gridGap: "10px",
};

const styleColumn = {
  display: "grid",
  gridTemplateColumns: "70% 30%",
  width: "inherit",
};

const styleName = {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontSize: "1.5rem",
  fontWeight: "400",
};

module.exports = {
  container: styleContainer,
  imageContainer: styleImageContainer,
  image: styleImage,
  details: styleDetails,
  detailsColumn: styleColumn,
  name: styleName,
};