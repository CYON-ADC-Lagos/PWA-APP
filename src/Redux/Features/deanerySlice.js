import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { errorPopUp } from "../../helpers/toatify";
import { fetchAllDeaneries } from "../Api";
import { extractList, apiErrorMessage } from "../../helpers/api";

export const getAllDeanery = createAsyncThunk(
  "/user/deanery/",
  async (_arg, { rejectWithValue }) => {
    try {
      const res = await fetchAllDeaneries();
      return extractList(res);
    } catch (err) {
      const msg = apiErrorMessage(err, "Could not load deaneries");
      errorPopUp({ msg });
      return rejectWithValue(msg);
    }
  }
);

const deanerySlice = createSlice({
  name: "deanery",
  initialState: { deaneries: [], isLoading: false, isError: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllDeanery.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(getAllDeanery.fulfilled, (state, action) => {
      state.isLoading = false;
      state.deaneries = Array.isArray(action.payload) ? action.payload : [];
    });
    builder.addCase(getAllDeanery.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload || "Could not load deaneries";
      state.deaneries = [];
    });
  },
});

export default deanerySlice.reducer;
