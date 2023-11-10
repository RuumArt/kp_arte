export const copyVacancyUrl = async path => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}${path}`;
    await navigator.clipboard.writeText(url);

    // eslint-disable-next-line no-alert
    window.prompt('Cсылка скопирована', url);
  } catch (err) {
    // eslint-disable-next-line no-alert
    alert('Что-то пошло не так. Ссылка не скопирована!');
  }
};
