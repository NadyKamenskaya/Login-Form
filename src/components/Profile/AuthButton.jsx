import React from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import useAuth from '../../hooks/index.jsx';

const AuthButton = () => {
  const { t } = useTranslation();
  const auth = useAuth();

  return (
    auth.loggedIn
      ? <Button onClick={auth.logOut} variant="primary">{t('logOut')}</Button>
      : null
  );
};

export default AuthButton;
