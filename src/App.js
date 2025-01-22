import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";


function App() {
  return (
    <Router>
    <section class="Header-container">
      <Header />
      <Nav />
    </section>
      <Main />
      <Footer />
    </Router>
  );
}

export default App;