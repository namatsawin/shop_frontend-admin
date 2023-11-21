import { Outlet } from "react-router-dom";

import Header from "@/commons/components/Header/Header";
import Sidebar from "@/commons/components/Sidebar/Sidebar";

export function AppLayout () {
  return (
    <div className="flex h-full">
      <Sidebar/>
      <div className="w-full h-full">
        <Header />
        <Outlet/>
      </div>
    </div> 
  )
}

export default AppLayout