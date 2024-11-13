import { Link } from "react-router-dom";
import LoginForm from "../features/auth/LoginForm";

const Login = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen max-h-[70vh]">
      <h2 className="text-3xl text-lead font-bold pb-16">Sign in</h2>
      <LoginForm />
      <h4 className="text-md text-lead font-normal mt-10">
        Didn't sign up yet? Create your account{" "}
        <Link
          to="../register"
          className="font-medium hover:font-extrabold hover:px-1 underline underline-offset-2 transition-all duration-100"
        >
          here
        </Link>
        .
      </h4>
    </section>
  );
};

export default Login;
