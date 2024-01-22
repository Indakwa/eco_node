import React from 'react'
import VideoBackground from './components/VideoBackground'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import How from './pages/How';
import Dash from './pages/Dash';
import Wallet from './pages/Wallet';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<VideoBackground />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/how" element={<How />} />
            <Route path="/dash" element={<Dash />} />
            <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App