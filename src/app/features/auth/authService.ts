import { AxiosError } from "axios";
import api from "./api";

export const registerService = async (
  email: string,
  password: string,
  confirmPassword: string
) => {
  try {
    const response = await api.post("/auth/sign-up", {
      email,
      password,
      confirmPassword,
    });

    if (!response.data.success) {
      throw new AxiosError(response.data.message, response.status.toString());
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginService = async (email: string, password: string) => {
  const response = await api.post("/auth/sign-in", { email, password });
  return response.data;
};
