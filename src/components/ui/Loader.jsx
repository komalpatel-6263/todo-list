let sectionStyle = {
  height: "100vh",
  width: "100vw",
  overflow: "hidden",
  position: "fixed",
  top: 0,
  left: 0,
  
  zIndex:8999,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "pink",
};

function Loader() {
  return (
    <section style={sectionStyle}>
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>


  );
}

export default Loader;