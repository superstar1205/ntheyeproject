import React from "react";
import { Outlet } from "react-router-dom";

export default function Custompages() {

  document.querySelector("body")?.classList.add("error-page1", "bg-primary","ltr","light-theme")
  document
    .querySelector("body")
    ?.classList.remove( "main-body", "app", "sidebar-mini");
  return (
    <React.Fragment>
            <Outlet />
    </React.Fragment>
  );
}
