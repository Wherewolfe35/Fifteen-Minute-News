import React from 'react';
import './App.css';

function App(props) {
  
  React.useEffect(() => {
    props.dispatch('GET_NEWS');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          15 Minute Old News!
        </p>
      </header>
    </div>
  );
}

export default App;
