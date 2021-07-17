import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [dev, setDev] = useState(0)
  const [music, setMusic] = useState(0)
  const [nose, setNose] = useState(0)

  const handleKey = (e) => {
    if (e.key === 'j') {
      setDev(dev + 1)
    } else if(e.key === 'k') {
      setMusic(music + 1)
    } else {
      setNose(nose + 1)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Developers: {dev}</p>
        <p>Musicians: {music}</p>
        <p>I don't Know: {nose}</p>
        <input type="text" onKeyPress={(e) => handleKey(e)} autoFocus/>
        
        
      </header>
    </div>
  );
}

export default App;
