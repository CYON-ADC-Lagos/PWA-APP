import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { errorPopUp, successPopUp } from "../../helpers/toatify";
import { loginUser } from "../Api";
import { apiErrorMessage } from "../../helpers/api";

export const userLogin = createAsyncThunk(
  "/user/login",
  async ({ payload, navigate }, { rejectWithValue }) => {
    try {
      const res = await loginUser(payload);
      // Backend envelope: { success, message, data: { token, user } }
      const body = res?.data?.data ?? res?.data ?? {};
      const { token, user } = body;
      if (!token) {
        const msg = res?.data?.message || "Login failed";
        errorPopUp({ msg });
        return rejectWithValue({ msg });
      }
      successPopUp({
        msg: `Welcome back, ${user?.firstName || "friend"}`,
        duration: 500,
      });
      if (typeof navigate === "function") navigate("/dashboard/home");
      return { token, user };
    } catch (err) {
      const msg = apiErrorMessage(err, "Could not sign in");
      errorPopUp({ msg });
      return rejectWithValue({ msg });
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    error: null,
    isError: false,
    isLoading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem("user");
      }
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        const { token, user } = action.payload || {};
        state.token = token || null;
        state.user = user || null;
        if (typeof window !== "undefined") {
          window.localStorage.setItem(
            "user",
            JSON.stringify({ ...(user || {}), token })
          );
        }
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload || { msg: "Login failed" };
      });
  },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
