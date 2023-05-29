import React, { useEffect, useRef, useState } from 'react';
import {
  Button, Form, Card,
} from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useFormik } from 'formik';

import useAuth from '../../hooks/index.jsx';

import { selectors } from '../../slices/authSlice.js';

import routes from '../../routes/routes.js';

const LoginPage = () => {
  const { t } = useTranslation();
  const [authFailed, setAuthFailed] = useState(false);
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const inputRef = useRef(null);

  const login = useSelector(selectors.getLogin);
  const password = useSelector(selectors.getPassword);

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validateOnBlur: false,
    onSubmit: () => {
      auth.logIn();
      const { from } = location.state || { from: { pathname: routes.profilePage() } };
      navigate(from);
    },
    validate: (values) => {
      const errors = {};

      if (values.login !== login) {
        setAuthFailed(true);
        errors.login = t('error');
      }
      if (values.password !== password) {
        setAuthFailed(true);
        errors.password = t('error');
      }

      return errors;
    },
  });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="container h-100">
      <div className="row justify-content-center align-content-center h-100">
        <Card className="shadow-sm">
          <Card.Body className="row p-5">
            <Form
              onSubmit={formik.handleSubmit}
              className="mt-3 mt-mb-0"
            >
              <h1 className="text-center mb-4">{t('logIn')}</h1>
              <fieldset disabled={formik.isSubmitting}>
                <Form.Group
                  className="mb-3 form-floating"
                  controlId="login"
                >
                  <Form.Control
                    ref={inputRef}
                    placeholder={t('fields.login')}
                    name="login"
                    autoComplete="login"
                    required
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.login}
                    isValid={!!authFailed && !formik.errors.login}
                  />
                  <Form.Label>{t('fields.login')}</Form.Label>
                  <Form.Control.Feedback
                    type="valid"
                    tooltip
                  >
                    {t('notify.correctLogin')}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  controlId="password"
                  className="mb-4 form-floating"
                >
                  <Form.Control
                    placeholder={t('fields.password')}
                    name="password"
                    autoComplete="current-password"
                    required
                    type="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    isValid={!!authFailed && !formik.errors.password}
                  />
                  <Form.Label>
                    {t('fields.password')}
                  </Form.Label>
                  <Form.Control.Feedback
                    type="valid"
                    tooltip
                  >
                    {t('notify.correctPassword')}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button
                  disabled={!(formik.isValid && formik.dirty)}
                  className="w-100 mb-3"
                  variant="outline-primary"
                  type="submit"
                >
                  {t('logIn')}
                </Button>
              </fieldset>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
