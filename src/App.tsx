import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import Content from "./components/Content/Content"
import ContentApp from "./components/Content/ContentApplication"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <ContentApp />
    </div>
  );
}

export default App;
