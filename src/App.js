import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import About from './pages/About'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <header style={appHeader}>
        <div style={title}>
          <h1>Jiskoot Tech</h1>
        </div>
        <div style={linksStyle}>
          <Link style={linkStyle} to="/">Home</Link>
          <Link style={linkStyle} to="/projects">Projects</Link>
        </div>
      </header>
      <Route exact path="/" component={About} />
    </div>
    </Router>
  );
}

const appHeader = {
  textAlign: 'center',
  background: '#0088FF',
  boxShadow: 'inset 0px -5px 10px #555',
  minHeight: '100px',
  display: 'flex',
  flexFlow: 'row'
}

const title = {
  width: '20%',
  paddingTop: '10px',
  verticalAlign: 'middle'
}

const linksStyle = {
  width: '80%',
  paddingTop: '70px',
  textAlign: 'left'
}

const linkStyle = {
  margin: '10px',
  textDecoration: 'none',
  color: '#fff'
}

export default App;
