import React, { useState, useEffect } from 'react';
import Admin from './components/Admin';
import Login from './components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check local storage for persistent login
    const isAuth = localStorage.getItem('isAdminAuth') === 'true';
    if (isAuth) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAdminAuth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAdminAuth');
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {isAuthenticated ? (
        <div className="relative">
          <button
            onClick={handleLogout}
            className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg border border-white/10 transition-colors text-sm font-bold tracking-wide"
          >
            Logout
          </button>
          <Admin />
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
