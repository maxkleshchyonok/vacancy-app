import { Candidate } from "../../app/vacancies/types/types";

export interface VacancyCardProps {
  title: string;
  description: string;
  logo: string;
  candidates: Candidate[];
}
