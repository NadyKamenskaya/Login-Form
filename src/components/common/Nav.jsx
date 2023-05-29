import React from 'react';
import { Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import AuthButton from '../Profile/AuthButton.jsx';

const Nav = () => {
  const { t } = useTranslation();

  return (
    <Navbar className="shadow-sm" bg="white" expand="lg">
      <div className="container">
        <Navbar.Brand>{t('brand')}</Navbar.Brand>
        <AuthButton />
      </div>
    </Navbar>
  );
};

export default Nav;
