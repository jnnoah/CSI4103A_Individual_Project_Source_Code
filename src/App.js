// I wrote about 40% of the code by myself and got help from chatgpt as well.

import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;


