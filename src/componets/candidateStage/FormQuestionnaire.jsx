import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './stage.module.css'

const FormQuestionnaire = ({handleFormSubmit}) => {
	const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className={styles.questionnaire}>Заполните анкету</div>
      <form onSubmit='#'>
        <div className={styles.form__input}>
          <label>ФИО</label>
          <input type="text" />
        </div>
        <div className={styles.form__input}>
          <label >Дата рождения</label>
          <input type="text" />
        </div>
        <div className={styles.form__input}>
          <label>Адрес проживания</label>
          <input type="text" />
        </div>
        <div className={styles.form__input}>
          <label>Контактная информация</label>
          <input type="text" />
        </div>
        <button onClick={handleFormSubmit}>Следующий шаг</button>
      </form>
    </>
  );
};
export default FormQuestionnaire;
