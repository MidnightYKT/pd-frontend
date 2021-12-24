import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import Content from "./components/Content/Content"
import ContentApp from "./components/Content/ContentApplication"
import ContentAccount from './components/Content/ContentAccount'
import ContentAdd from "./components/Content/ContentAdd"
import Footer from "./components/Footer/Footer"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <ContentApp />
      <ContentAccount />
      <ContentAdd />
      <Footer />
    </div>
  );
}

export default App;
