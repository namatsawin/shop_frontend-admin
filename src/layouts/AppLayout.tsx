import { Outlet } from "react-router-dom";

import Header from "@/components/Header/Header";
import Sidebar from "@/constants/Sidebar";

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