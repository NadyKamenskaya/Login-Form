import React from 'react';
import { useSelector } from 'react-redux';

import { selectors } from '../../slices/authSlice.js';

const ProfilePage = () => {
  const login = useSelector(selectors.getLogin);

  return (
    <div className="container p-5">
      <h1 className="h4 text-center mt-5">{login}</h1>
    </div>
  );
};

export default ProfilePage;
