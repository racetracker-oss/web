// Login.tsx
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../redux/hooks";
import { login } from "../../redux/authSlice";
import FormGroup from "../../components/FormGroup";
import Button from "../../components/Button";
import { LoginSchema } from "../../schemas/loginSchema";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessages([]);

    const result = LoginSchema.safeParse({
      email,
      password,
    });

    if (!result.success) {
      const validationErrors = result.error.issues.map(
        (issue) => issue.message
      );
      setErrorMessages(validationErrors);
      return;
    }

    try {
      const actionResult = await dispatch(login({ email, password }));
      unwrapResult(actionResult);
      navigate("/");
    } catch (error: any) {
      const newErrorMessages: string[] = [];
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        newErrorMessages.push(error.response.data.message);
      } else if (error.message) {
        newErrorMessages.push(error.message);
      } else {
        newErrorMessages.push("Login failed. Please try again.");
      }
      setErrorMessages(newErrorMessages);
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

      {errorMessages.length > 0 && (
        <ul className="my-5 text-red-600">
          {" "}
          {errorMessages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}{" "}
        </ul>
      )}

      <Button type="submit" className="block mx-auto">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
