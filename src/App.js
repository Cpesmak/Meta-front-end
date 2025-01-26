import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Main from "./Main";
import Footer from "./components/layout/Footer";


function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header-container">
          <Header />
          <Nav />
        </header>
        <main>
          <Main />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;