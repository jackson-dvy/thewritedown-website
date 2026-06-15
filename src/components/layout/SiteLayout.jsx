import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Outlet />
    </div>
  );
}