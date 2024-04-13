import axios from 'axios';

const axiosInstanсe = axios.create({
  baseURL: 'http://new-team.space/',
});

// Отправка данных для вакансии
export const sendingDataVacancy = (data, keySkills, setIsOpenForm) => {
  try {
    data.key_skills = keySkills;
    axios.post('http://new-team.space/api/vacancies/', data).then((res) => console.log(res));
		setIsOpenForm(false)
  } catch (error) {
    console.log('Ошибка: ', error);
  }
};
// Получение всех вакансий
export const getVacanciesApi = (setVacancies) => {
  try {
    const response = axios.get('http://new-team.space/api/vacancies/');
		console.log(response.data);
		// setVacancies(response.data)
  } catch (error) {
    console.log('Ошибка: ', error);
  }
};
// Получение всех вакансий
export const closetVacancy = (setVacancies, id) => {
  try {
    axios.delete(`http://new-team.space/api/vacancies/${id}`);
		setVacancies((prevItems) => prevItems.filter((item) => item.id !== id));
  } catch (error) {
    console.log('Ошибка: ', error);
  }
};
