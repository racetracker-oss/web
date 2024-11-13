import RegisterForm from "../features/auth/RegisterForm";

const Register = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen max-h-[70vh]">
      <h2 className="text-3xl text-lead font-bold pb-16">Sign up here</h2>
      <RegisterForm />
    </section>
  );
};

export default Register;
