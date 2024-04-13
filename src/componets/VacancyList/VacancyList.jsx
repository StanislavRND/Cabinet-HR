import React from 'react';
import styles from './vacancylist.module.css';

const VacancyList = ({ setIsOpenVacancyInfo, vacancies }) => {
  return (
    <div className={styles.list}>
      {vacancies.map((item) => (
        <div className={styles.item}>
          <div className={styles.item__title}>{item.name}</div>
          <div className={styles.item__response} onClick={() => setIsOpenVacancyInfo(true)}>
            56 откликов
          </div>
          <button className={styles.item__button}>Закрыть</button>
        </div>
      ))}
    </div>
  );
};
export default VacancyList;
