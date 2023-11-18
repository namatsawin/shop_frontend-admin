import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/hooks/store.hook";
import { authenticate } from "@/store/auth/actions";
import BaseButton from "@/components/BaseButton/BaseButton";

function LoaginPage() {
  const [loading, setLoading] = useState(false)
  const appDispatch = useAppDispatch()
  const navigate = useNavigate()


  const login = async () => {
    try {
      setLoading(true)
      await appDispatch(authenticate())
      navigate('/')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full h-screen grid place-content-center">
      <div className="card w-96 bg-base-100 shadow-xl pt-20 pb-14 px-10">
        {/* Logo */}
        <div className="py-5 pb-10 mx-auto">
          Logo
        </div>

        {/* Login Form */}
        <div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="input input-bordered w-full max-w-xs" 
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>

        {/* Forgot password */}
        <div className="flex py-2"> 
          <a 
            className="link text-xs ml-auto" 
            target="_blank"
            onClick={() => alert("In progress...")}
          >
            Forgot password
          </a>
        </div>

        <div className="pt-6">
          <BaseButton className="btn btn-primary w-full" onClick={login} loading={loading}>
            Login
          </BaseButton>
        </div>
      </div>
    </div>
  );
}

export default LoaginPage;