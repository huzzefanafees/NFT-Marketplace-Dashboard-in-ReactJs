import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import './pages/combined.css';
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Profile from './pages/profile/Profile';
import Setting from './pages/setting/Setting';
import Collection from './pages/collection/Collection';
import Saved from "./pages/saved/Saved";
import Bids from './pages/bids/Bids';
import Dashboard from './pages/dashboard/Dashboard';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    const container = document.querySelector(".container");
    if (container) {
      container.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Sidebar />
        <div className="main wrapper">
          <Topbar />

          <ScrollToTop />

          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bids" element={<Bids />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
