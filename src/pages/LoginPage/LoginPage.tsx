import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/hooks/store.hook";
import { authenticate } from "@/store/auth/actions";

import LoginForm from "@/components/Forms/LoginForm/LoginForm";
import { LoginPresenter } from "@/presenters/login.presenter";

function LoaginPage() {
  const appDispatch = useAppDispatch()
  const navigate = useNavigate()
 
  const onLogin = async (data: LoginPresenter) => {
    await appDispatch(authenticate(data)), 
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