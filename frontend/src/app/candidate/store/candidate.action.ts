import { createAsyncThunk } from "@reduxjs/toolkit";
import repository from "../../../repository";
import { Candidate } from "../../vacancies/types/types";

export const addCandidate = createAsyncThunk<any, Candidate>(
  "addCandidate",
  async (data, { rejectWithValue }) => {
    try {
      const response = await repository.post("/candidate", data);
      return response;
    } catch (error) {
      return rejectWithValue("Applying failed");
    }
  }
);
