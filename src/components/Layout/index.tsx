import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import Menu from "../Menu";

export function Layout() {
  return (
    <div>
      <Menu />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
