import "./App.css";

function App() {
  const twitterHandler = () => {
    window.location.href = `http://localhost:5000/api/v1/users/twitterlogin`;
  };
  return (
    <>
      <button onClick={twitterHandler}> LOGIN </button>
    </>
  );
}

export default App;
