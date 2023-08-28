import React from "react";
import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-[url('./assets/web-design.jpg')] bg-scroll hover:bg-fixed ">
      <Outlet />
    </div>
  );
}
