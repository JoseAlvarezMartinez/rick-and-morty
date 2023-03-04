import { Outlet } from "react-router-dom";
const Index = () => {
  return (
    <header>
      <div className="oscurecer-fondo">
        <Outlet />
      </div>
    </header>
  );
};

export default Index;
