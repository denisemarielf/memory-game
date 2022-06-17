import React, {useState} from 'react';
import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main'

function App() {

  const [scores, setScores] = useState({best: 0, current: 0})

  return (
    <div className="App">
      <Header scores={scores}/>
      <Main setScores={setScores}/>
    </div>
  );
}


export default App;
