export const getVacancyTags = vacancy => {
  return [
    {
      name: vacancy.city.name,
      type: 'city',
    },
    {
      name: vacancy.direction.name,
      type: 'direction',
    },
    {
      name: vacancy.experience.name,
      type: 'experience',
    },
    ...(vacancy.shortSkills ?? []).map(skill => ({
      ...skill,
      type: 'skill',
    })),
  ];
};
