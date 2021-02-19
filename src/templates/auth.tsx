import React from 'react';
import Helmet from 'react-helmet';
import '../templates/scss/global.scss';
import './styles-auth.scss';

interface AuthProps {
  title: string;
}

const AuthTemplate: React.FC<AuthProps> = ({ title, children }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>W — {title}</title>
      </Helmet>
      {children}
    </React.Fragment>
  );
};

export default AuthTemplate;
