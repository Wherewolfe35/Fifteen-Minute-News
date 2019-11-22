import React from 'react';
import './App.css';

function App() {
  
  
  React.useEffect(() => {
    results = axios.get('/api/news');
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
