import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/commons/hooks/store.hook";
import { login } from "@/modules/login/reducer/thunk-actions";

import LoginForm, { ILoginFormBody } from "@/modules/login/forms/LoginForm/LoginForm";

function LoaginPage() {
  const appDispatch = useAppDispatch()
  const navigate = useNavigate()
 
  const onLogin = async (data: ILoginFormBody) => {
    await appDispatch(login(data)), 
    navigate('/')
  }

  return (
    <div className="w-full h-screen grid place-content-center">
      <div className="card w-96 bg-base-100 shadow-xl pt-20 pb-14 px-10">
        <div className="py-5 pb-10 mx-auto">
          Login
        </div>
        <LoginForm submit={onLogin}/>
      </div>
    </div>
  );
}

export default LoaginPage;