import React from "react";
import { RouterProps } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import DashboardTemplate from "../../templates/dash";
import { Teste } from "../../components/Test";

const Dashboard = (route: RouterProps) => {
  return (
    <DashboardTemplate title="Faça o seu Dashboard!">
      <Teste />
    </DashboardTemplate>
  );
};

export default Dashboard;
