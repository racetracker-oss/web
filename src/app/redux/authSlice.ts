import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginService, registerService } from "../features/auth/authService";
import { jwtDecode } from "jwt-decode";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: unknown;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

export const register = createAsyncThunk(
  "auth/register",
  async (
    {
      email,
      password,
      confirmPassword,
    }: { email: string; password: string; confirmPassword: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await registerService(email, password, confirmPassword);
      return response.token;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      throw error;
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: { email: string; password: string }) => {
    const response = await loginService(email, password);
    const token = response.token;
    const decodedToken: { sub: number; email: string } = jwtDecode(token);
    return { token, user: decodedToken };
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload;
        localStorage.setItem("token", action.payload);
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
        localStorage.setItem("token", action.payload.token);
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
