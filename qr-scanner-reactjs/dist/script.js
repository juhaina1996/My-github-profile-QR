const QrCode = ({ url, title, text }) => {
  const qrcode = React.useRef(null);

  React.useEffect(() => {
    const el = qrcode.current.querySelector(".qr-code-code");

    const code = new QRCode(el, {
      text: url,
      width: 160,
      height: 160,
      colorDark: "#FFFFFF",
      colorLight: "#3685fe",
      correctLevel: QRCode.CorrectLevel.H,
    });

    el.title = "";

    return () => code.clear();
  }, []);

  return /*#__PURE__*/ React.createElement(
    "div",
    { className: "qr-code", ref: qrcode } /*#__PURE__*/,
    React.createElement("div", { className: "qr-code-code" }) /*#__PURE__*/,
    React.createElement(
      "div",
      { className: "qr-code-content" } /*#__PURE__*/,
      React.createElement("h3", null, title) /*#__PURE__*/,
      React.createElement("p", null, text)
    )
  );
};

const App = () => {
  return /*#__PURE__*/ React.createElement(QrCode, {
    url: "https://github.com/juhaina1996",
    title: "Juhaina",
    text: "Scan the QR code to visit my Profile",
  });
};

ReactDOM.render(
  /*#__PURE__*/ React.createElement(App, null),
  document.getElementById("app")
);
