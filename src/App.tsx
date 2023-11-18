
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from '@/layouts/AppLayout'
import NoPage from "@/pages/ErrorPages/NoPage";
import DashbordPage from "./pages/DashbordPage/DashbordPage";
import LoaginPage from "./pages/LoginPage/LoginPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useAppSelector } from "./hooks/store.hook";
import { selectAuth } from "./store/auth/state";
import BaseToaster from "@/components/BaseToast/BaseToast";

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
