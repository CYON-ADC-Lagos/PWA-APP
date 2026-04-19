import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { errorPopUp } from "../../helpers/toatify";
import { fetchAllParish } from "../Api";
import { extractList, apiErrorMessage } from "../../helpers/api";

export const getAllParishById = createAsyncThunk(
  "/parish/",
  async (_arg, { rejectWithValue }) => {
    try {
      const res = await fetchAllParish();
      return extractList(res);
    } catch (err) {
      const msg = apiErrorMessage(err, "Could not load parishes");
      errorPopUp({ msg });
      return rejectWithValue(msg);
    }
  }
);

const parishSlice = createSlice({
  name: "parish",
  initialState: { parishes: [], isLoading: false, isError: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllParishById.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(getAllParishById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.parishes = Array.isArray(action.payload) ? action.payload : [];
    });
    builder.addCase(getAllParishById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload || "Could not load parishes";
      state.parishes = [];
    });
  },
});

export default parishSlice.reducer;
