import { FC, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Vacancies from "./app/vacancies/vacancies.comp";

const PublicRoute: FC<{ element: any }> = ({ element: Element }) => (
  <Suspense fallback={<div />}>
    <Element />
  </Suspense>
);

export const AppRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route
        path={"/vacancies/*"}
        element={<PublicRoute element={Vacancies} />}
      />

      {/* DEFAULT */}
      <Route path="*" element={<Navigate to="/vacancies" />} />
    </Routes>
  );
};

export default AppRoutes;
