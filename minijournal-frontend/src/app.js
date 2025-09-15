import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import JournalListPage from './pages/JournalListPage';
import layoutStyles from './AppLayout.module.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div>
        {isAuthenticated && (
          <div className={layoutStyles.header}>
            <button className={layoutStyles.logoutBtn} onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <JournalListPage />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to="/" replace />
              ) : (
                <LoginPage onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/register"
            element={
              isAuthenticated ? (
                <Navigate to="/" replace />
              ) : (
                <RegisterPage />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;