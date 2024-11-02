import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";
import axios from "axios";
import { useAppDispatch } from "../../redux/hooks";
import { register } from "../../redux/authSlice";
import { RegisterSchema } from "../../schemas/registerSchema";
import FormGroup from "../../components/FormGroup";
import Button from "../../components/Button";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessages([]);

    const result = RegisterSchema.safeParse({
      email,
      password,
      confirmPassword,
    });

    if (!result.success) {
      const validationErrors = result.error.issues.map(
        (issue) => issue.message
      );
      setErrorMessages(validationErrors);
      return;
    }

    try {
      const actionResult = await dispatch(
        register({ email, password, confirmPassword })
      );
      unwrapResult(actionResult);
      navigate("../login");
    } catch (error: any) {
      const newErrorMessages: string[] = [];
      if (
        axios.isAxiosError(error) &&
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        newErrorMessages.push(error.response.data.message);
      } else if (error.message) {
        newErrorMessages.push(error.message);
      } else {
        newErrorMessages.push("Registration failed. Please try again.");
      }
      setErrorMessages(newErrorMessages);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="min-w-60 max-w-96 mx-auto">
      <FormGroup
        title={"Email address"}
        value={email}
        type="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        isRequired
      />
      <FormGroup
        title={"Password"}
        value={password}
        type="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        isRequired
      />
      <FormGroup
        title={"Confirm password"}
        value={confirmPassword}
        type="password"
        id="confirmPassword"
        onChange={(e) => setConfirmPassword(e.target.value)}
        isRequired
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
        Sign up
      </Button>
    </form>
  );
};

export default RegisterForm;
