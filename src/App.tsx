import "./App.css";

function App() {
  const onClick = () => {
    window.alert("Button clicked");
  };

  return (
    <div className="mainpanel">
      Start app made with:
      <br/>
      <a href="https://tauri.app/" target="_blank">Tauri</a>
      and
      <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <hr/>
      <p>&nbsp;</p>
      <button onClick={() => onClick()}>Click</button>
    </div>
  );
}

export default App;