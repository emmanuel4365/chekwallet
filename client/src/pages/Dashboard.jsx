import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h3>Dashboard NavBar</h3>
      <Outlet />
    </div>
  );
};
export default Dashboard;
