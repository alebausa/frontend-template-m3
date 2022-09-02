import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

function AuthProviderWrapper(props) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const storeToken = (token) => {
    localStorage.setItem('authToken', token);
  }

  const removeToken = () => {
    localStorage.removeItem('authToken');
  }

  const authenticateUser = async () => {
    setLoading(true);
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/auth/me', { headers: { Authorization: `Bearer ${storedToken}` } });
        setIsLoggedIn(true);
        setLoading(false);
        setUser(response.data);
      } catch (error) {
        setIsLoggedIn(false);
        setLoading(false);
        setUser(null);
      }
    } else {
      setIsLoggedIn(false);
      setLoading(false);
      setUser(null);
    }
  };

  const logOutUser = () => {
    removeToken();
    authenticateUser();
  }

  useEffect(() => {
    authenticateUser();
  }, []);
  
  return (
    <AuthContext.Provider value={{ user, isLoggedIn, isLoading, storeToken, authenticateUser, logOutUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProviderWrapper, AuthContext };

