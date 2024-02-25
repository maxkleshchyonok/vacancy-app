import { configureStore } from "@reduxjs/toolkit";
import { vacanciesSlice } from "./app/vacancies/store/vacancies.slice";
import { candidateSlice } from "./app/candidate/store/candidate.slice";

const store = configureStore({
  reducer: {
    vacancies: vacanciesSlice.reducer,
    candidate: candidateSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
