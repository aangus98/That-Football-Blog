import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Profile from './pages/profile';
import ThoughtForm from './pages/thoughtForm';
import Admin from './pages/admin';
import './App.css';

const App: React.FC = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/thoughts/new" element={<ThoughtForm />} />
      <Route path="/thoughts/edit/:id" element={<ThoughtForm />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </Router>
);

export default App;

