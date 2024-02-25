export interface VacancyState {
  vacancies: Vacancy | null;
  loading: boolean;
  error: string | null;
}

export interface Vacancy {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  logo: string;
  candidates: Candidate[];
}

export interface Candidate {
  email: string | null;
  vacancyId: string;
}
