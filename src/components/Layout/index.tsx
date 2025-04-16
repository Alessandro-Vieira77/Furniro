import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import Menu from "../Menu";

export function Layout() {
  return (
    <div className="w-full min-h-screen border-4 border-amber-500">
      <Menu />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
