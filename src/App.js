import React from 'react';
import './App.css';
import Form from './components/Form';

const App = () => {
  return (
    <div className="App">
      <div className="App-content">
        <span className='title'>To-Do List</span>
        <Form/>
      </div>
    </div>
  );
}

export default App;
