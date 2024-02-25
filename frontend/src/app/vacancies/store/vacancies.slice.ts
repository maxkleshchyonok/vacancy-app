import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getVacancies } from "./vacancies.action";
import { Vacancy, VacancyState } from "../types/types";

const initialState: VacancyState = {
  vacancies: null,
  loading: false,
  error: null,
};

export const vacanciesSlice = createSlice({
  name: "vacancies",
  initialState,
  reducers: {
    setVacancy: (state, action: PayloadAction<Vacancy>) => {
      state.vacancies = action.payload;
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
      .addCase(getVacancies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getVacancies.fulfilled, (state, action) => {
        state.vacancies = action.payload;
        state.loading = false;
      })
      .addCase(getVacancies.rejected, (state, action) => {
        state.vacancies = null;
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export const { setVacancy, setLoading, setError } = vacanciesSlice.actions;

export const vacanciesReducer = vacanciesSlice.reducer;
