import { useForm } from "react-hook-form"
import { useEffect } from "react";
import { UserLogin, globalStore } from "../store/global.store";
import { useNavigate } from "react-router-dom";


interface LoginForm {
  email: string;
  password: string;
}

function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  const { isAuthenticated, loading } = globalStore()
  const navigate = useNavigate();

  const { singIn, checkLogin } = globalStore();

  const { userToken } = globalStore((state) => ({
    userToken: state.userToken,
  }))

  const onSignIn = handleSubmit(async (values) => {
    const userLogin: UserLogin = {
      email: values.email,
      password: values.password
    };
    singIn(userLogin);
    checkLogin();
  });


  useEffect(() => {
    if (isAuthenticated) {
      console.log(userToken);
      console.log(loading);
      navigate("/panel")
    }
    return () => { } // eslint-disable-next-line react-hooks/exhaustive-deps 
  })

  return (
    <div>
      <h1>Iniciar sesion</h1>
      <form onSubmit={onSignIn}>
        <input type="text" placeholder="Email" {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
        <input type="password" placeholder="Password" {...register("password", { required: true })} />
        {errors.password && <span>This field is required</span>}
        <input type="submit" value="Login" />
      </form>
    </div>
  );

}

export { Login }