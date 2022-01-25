function Toast(props) {
  // importing './toast.css' is not working
  var toastStyle = {
    display: props.visible ? "flex" : "none",
    // height: "40px",
    borderRadius: "5px",
    backgroundColor: "#ADD8E6",
    border: "1px solid blue",
    paddingLeft: "10px",
    paddingRight: "10px",
  };

  var msgStyle = {
    marginTop: "5px",
    textAlign: "left",
    width: "90%",
    marginBottom: "0",
  };

  return (
    <div classname="toast" style={toastStyle}>
      <p style={msgStyle}>{props.msg}</p>
      <div style={{ width: "10%" }}>
        <button style={{ border: "none", backgroundColor: "transparent" }} onClick={props.handleDiscard}>
          <i style={{ fontSize: "24px" }} class="bi bi-x"></i>
        </button>
      </div>
    </div>
  );
}

export default Toast;
