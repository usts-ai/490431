import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <div className="App min-h-screen bg-[#0e0e0e]">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
