import { useState, useMemo, useCallback } from 'react';

import AuthContext from '../contexts/index.jsx';

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = useCallback(() => setLoggedIn(true), []);
  const logOut = useCallback(() => setLoggedIn(false), []);

  const context = useMemo(() => ({
    loggedIn, logIn, logOut,
  }), [loggedIn, logIn, logOut]);

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
