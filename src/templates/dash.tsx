import React from "react";
import Helmet from "react-helmet";
import { AuthProvider } from "../contexts/auth";
import "../templates/scss/global.scss";
import "./styles-auth.scss";

interface DashProps {
  title: string;
}

const DashboardTemplate: React.FC<DashProps> = ({ title, children }) => {
  return (
    <AuthProvider>
      <Helmet>
        <title>W — {title}</title>
      </Helmet>
      {children}
    </AuthProvider>
  );
};

export default DashboardTemplate;
