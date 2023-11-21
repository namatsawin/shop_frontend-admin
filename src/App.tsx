
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from '@/commons/layouts/AppLayout'
import NoPage from "@/commons/pages/ErrorPages/NoPage";
import DashbordPage from "./commons/pages/DashbordPage/DashbordPage";
import LoaginPage from "./modules/login/page/Index";
import PrivateRoute from "./commons/components/PrivateRoute/PrivateRoute";
import { useAppSelector } from "./commons/hooks/store.hook";
import { selectAuth } from "./modules/login/reducer/state";
import BaseToaster from "@/commons/components/BaseToast/BaseToast";

function App() {
  const auth = useAppSelector(selectAuth)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoaginPage />} />
          <Route 
            path="/" 
            element={<PrivateRoute element={<AppLayout/>} isAuthenticated={auth} />}
          >
            <Route index element={<DashbordPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <BaseToaster/>
    </>
  )
}

export default App
