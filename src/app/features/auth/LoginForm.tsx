// Login.tsx
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { login } from "../../redux/authSlice";
import FormGroup from "../../components/FormGroup";
import Button from "../../components/Button";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //todo zod validate

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(login({ email, password }));
      navigate("/");
      alert("Logged in successfully!");
    } catch (err) {
      console.error(err);
      alert("Login failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup
        title={"Email address"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type={"email"}
        id={"email"}
        isRequired
      />
      <FormGroup
        title={"Password"}
        value={password}
        type="password"
        id="password"
        isRequired
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" className="block mx-auto">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
