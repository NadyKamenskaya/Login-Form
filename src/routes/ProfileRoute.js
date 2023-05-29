import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import useAuth from '../hooks/index.jsx';

import routes from './routes.js';

const ProfileRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  return (
    auth.loggedIn ? children : <Navigate to={routes.loginPage()} state={{ from: location }} />
  );
};

export default ProfileRoute;
