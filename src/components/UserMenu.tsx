import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface UserMenuProps {
  onLoginClick: () => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({ onLoginClick }) => {
  const { currentUser, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  if (!currentUser) {
    return (
      <button className="login-button" onClick={onLoginClick}>
        Sign In
      </button>
    );
  }

  return (
    <div className="user-menu">
      <img
        src={currentUser.photoURL || `https://ui-avatars.com/api/?name=${currentUser.email}`}
        alt="User avatar"
        className="user-avatar"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      
      {isMenuOpen && (
        <div className="user-menu-dropdown">
          <div className="user-menu-item">
            <span>👤</span>
            {currentUser.email}
          </div>
          <div className="user-menu-item" onClick={handleLogout}>
            <span>🚪</span>
            Sign Out
          </div>
        </div>
      )}
    </div>
  );
};