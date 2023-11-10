export const getShortSkillsFromVacancies = vacancies => {
  const shortSkills = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const vacancy of vacancies) {
    const skills = vacancy?.shortSkills ?? [];
    skills.forEach(skill => {
      shortSkills[skill.id] = {
        name: skill.name,
        code: skill.id,
      };
    });
  }
  return Object.values(shortSkills);
};
