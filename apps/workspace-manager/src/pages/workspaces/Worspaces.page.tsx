import React from "react";
import "./Workspaces.page.css";
import Header from "../../components/header/Header";
import SideNav from "../../components/sidenav/SideNav";
import { Outlet } from "react-router-dom";

interface WorkspacesPageProps {
  logoSrc?: string;
  heading?: string;
}
const WorkspacesPage: React.FC<WorkspacesPageProps> = ({
  logoSrc,
  heading = "appsmith_",
}) => {
  return (
    <div className="workspace-container">
      <div className="workspace-header">
        <Header />
      </div>
      <div className="workspace-body">
        <SideNav />
        <div className="workspace-list">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default WorkspacesPage;
