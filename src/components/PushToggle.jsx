function PushToggle() {
  const imgStyle = {
    width: "30px",
    height: "30px",
  };
  return (
    <div className="push">
      <img
        className="push__image"
        style={imgStyle}
        src="./1.png"
        alt="Push сообщения"
      />
    </div>
  );
}

export default PushToggle;
