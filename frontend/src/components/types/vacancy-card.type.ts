import { Candidate } from "../../app/vacancies/types/types";

export interface VacancyCardProps {
  vacancyId: string;
  title: string;
  description: string;
  logo: string;
  candidates: Candidate[];
}
