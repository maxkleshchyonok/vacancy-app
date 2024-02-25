import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Vacancy } from "./types/types";
import { getVacancies } from "./store/vacancies.action";
import VacancyCard from "../../components/vacancy-card.comp";
import styled from "@emotion/styled";
import EmailModal from "../../components/email-modal.comp";

const StyledContainer = styled("div")`
  display: flex;
  padding: 2% 3%;
  gap: 3% 1%;
  height: 100vh;
  background: purple;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Vacancies = () => {
  const dispatch = useDispatch();
  const [vacancies, setVacancies] = useState([]);
  const email = sessionStorage.getItem("email");

  const [modalActive, setModalActive] = useState(!email);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const res = await dispatch<any>(getVacancies());
        setVacancies(res.payload);
      } catch (error) {
        throw new Error("Error in loading vacancies");
      }
    };
    loadItems();
  }, []);

  return (
    <StyledContainer>
      {vacancies.map((vacancy: Vacancy) => (
        <VacancyCard
          key={vacancy.id}
          vacancyId={vacancy.id}
          title={vacancy.title}
          description={vacancy.description}
          logo={vacancy.logo}
          candidates={vacancy.candidates}
        />
      ))}
      <EmailModal active={modalActive} setActive={setModalActive} />
    </StyledContainer>
  );
};

export default Vacancies;
