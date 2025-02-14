import Header from "@/components/custom/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

function Rootlayout() {
  return (
    <>
      <Header />
      <Toaster />
      
      <Outlet />
    </>
  );
}

export default Rootlayout;
