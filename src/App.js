import React from 'react';
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab)

function App() {
  return (
    <div className="App">
      <Header />
      <Container />
    </div>
  );
}

export default App;
