import { createAsyncThunk } from "@reduxjs/toolkit";
import repository from "../../../repository";

export const getVacancies = createAsyncThunk(
  "getVacancies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await repository.get("/vacancy");
      return response.data;
    } catch (error) {
      return rejectWithValue("Loading vacancies failed");
    }
  }
);
