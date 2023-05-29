import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import routes from '../routes/routes.js';
import ProfileRoute from '../routes/ProfileRoute.js';

import LoginPage from './Login/LoginPage.jsx';
import ProfilePage from './Profile/ProfilePage.jsx';
import NotFoundPage from './NotFound/NotFoundPage.jsx';

import Nav from './common/Nav.jsx';

const App = () => (
  <div className="d-flex flex-column h-100">
    <Router>
      <Nav />
      <Routes>
        <Route path={routes.notFoundPage()} element={<NotFoundPage />} />
        <Route path={routes.loginPage()} element={<LoginPage />} />
        <Route
          path={routes.profilePage()}
          element={(
            <ProfileRoute>
              <ProfilePage />
            </ProfileRoute>
            )}
        />
      </Routes>
    </Router>
  </div>
);

export default App;
