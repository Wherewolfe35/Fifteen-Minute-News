import React from 'react';
import './App.css';
import { connect } from 'react-redux';

function App(props) {
  
  React.useEffect(() => {
    props.dispatch({type:'GET_NEWS'});
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          15 Minute Old News!
        </p>
      </header>
      <main>
        {JSON.stringify(props)}
      </main>
    </div>
  );
}

const mapStoreToProps = (store) => ({
store,
})

export default connect(mapStoreToProps)(App);
