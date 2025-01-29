import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Bean, Sparkles } from 'lucide-react';
import Login from './pages/Login';
import Deficiency from './pages/Deficiency';
import InterestSelection from './pages/InterestSelection';
import Home from './pages/Home';
import Videos from './pages/Videos';
import Explore from './pages/Explore';
import CourseDetail from './pages/CourseDetail';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-orange-400 to-orange-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="absolute inset-0 bg-white rounded-full blur-lg opacity-20"></div>
            <Bean className="h-10 w-10 text-white relative" />
          </div>
          <div className="flex items-center">
            <span className="text-3xl font-bold text-white mr-2">Fun Bean</span>
            <Sparkles className="w-6 h-6 text-yellow-300 animate-bounce-slow" />
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
        <Navbar />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/deficiency" element={<Deficiency />} />
            <Route path="/interests" element={<InterestSelection />} />
            <Route path="/home" element={<Home />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/course/:courseId" element={<CourseDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;