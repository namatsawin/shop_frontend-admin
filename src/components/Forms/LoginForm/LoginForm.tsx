import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import toast from "react-hot-toast";

import { LoginPresenter } from "@/presenters/login.presenter";

import BaseButton from "@/components/BaseButton/BaseButton";
import FormControl from "@/components/FormControl/FormControl";

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  submit: (data: LoginPresenter) => Promise<void>
}

const schema = yup
  .object({
    email: yup.string().email("The field must be a valid email.").required('Email is required.'),
    password: yup.string().required("Password is required."),
  })
  .required()

function LoginForm({ submit, ...rest }: Props) {
  const [loading, setLoading] = useState(false)
  const { handleSubmit, control, formState: { errors } } = useForm<LoginPresenter>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true)
      await toast.promise(
        submit(data), 
        { 
          success: 'Login successful!', 
          error: 'Login failed.', 
          loading: 'Logging in...'
        }
      )
    } finally {
      setLoading(false)
    }
  })

  return (
    <form {...rest} onSubmit={onSubmit}>
      <FormControl 
        label="Email"
        error={errors.email?.message?.toString()}
      >
        <Controller 
          name="email"
          control={control}
          render={({ field }) =>
          <input 
            {...field}
            placeholder="Enter your email" 
            className="input input-bordered w-full max-w-xs" 
          />}
        />
      </FormControl>

      <FormControl 
        label="Password"
        error={errors.password?.message?.toString()}
      >
        <Controller 
          name="password"
          control={control}
          render={({ field }) =>
          <input 
            {...field}
            type="password" 
            placeholder="Enter your password" 
            className="input input-bordered w-full max-w-xs" 
          />}
        />
      </FormControl>

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

      {/* Action */}
      <div className="pt-6">
        <BaseButton 
          type="submit" 
          className="btn btn-primary w-full" 
          loading={loading}
        >
          Login
        </BaseButton>
      </div>
    </form>
  );
}

export default LoginForm;