import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Record from './Record';
import Recordings from './Recordings';
import './App.css';
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/record" element={<Record />} />
        <Route path="/recordings" element={<Recordings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
