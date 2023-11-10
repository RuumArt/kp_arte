import { declOfNum } from './declOfNum';

export const getMoreVacanciesTitle = vacanciesCount => {
  return declOfNum(vacanciesCount, ['вакансия', 'вакансии', 'вакансий']);
};
