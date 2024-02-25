import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CandidateState } from "../types/candidate-state.type";
import { addCandidate } from "./candidate.action";

const initialState: CandidateState = {
  email: null,
  loading: false,
  error: null,
};

export const candidateSlice = createSlice({
  name: "candidate",
  initialState,
  reducers: {
    setCandidate: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCandidate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCandidate.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addCandidate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export const { setCandidate, setLoading, setError } = candidateSlice.actions;

export const candidateReducer = candidateSlice.reducer;
