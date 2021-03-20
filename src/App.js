import logo from './logo.svg';
import './App.css';

function Welcome(props){
  return <h1>Hello, {props.name}</h1>
}

function User(props){
  return (
    <h2>{props.myouji} {props.namae}</h2>
  )
}

function UserInfo(props){
  return (
    <div>
    <User myouji={props.m} namae={props.n}/>
    <h3>あなたの好きな食べ物は{props.food}</h3>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Welcome name="gogh" />
    <UserInfo m="ow" n="gogh" food="karaage"/>
    <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
