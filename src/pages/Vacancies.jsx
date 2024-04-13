import React, { useEffect } from 'react';
import { useState } from 'react';
import FormCreateVacancy from '../componets/forms/formCreateVacancy/FormCreateVacancy';
import Header from '../componets/header/Header';
import VacancyList from '../componets/VacancyList/VacancyList';
import VacancyInfo from './../componets/VacancyInfo/VacancyInfo';
import { getVacanciesApi } from '../api/ApiService';
import FormQuestionnaire from '../componets/candidateStage/FormQuestionnaire';
import TestTask from '../componets/candidateStage/TestTask';
import PsyhologyTest from '../componets/candidateStage/PsyhologyTest';

const CabinetHr = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenVacancyInfo, setIsOpenVacancyInfo] = useState(false);
  const [vacancies, setVacancies] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const isCandidate = false;

  const handleFormSubmit = () => {
    setCurrentStep(2);
  };

  const handleTest1Complete = () => {
    setCurrentStep(3);
  };
  const handleTest2Complete = () => {
    setCurrentStep(4);
  };

  const handleChange = () => {
    setIsOpenForm(true);
    setIsOpenVacancyInfo(false);
  };

  useEffect(() => {
  	getVacanciesApi(setVacancies)
  }, []);
  console.log(vacancies);
  return (
    <div>
      <Header />
      <div className="hr-dashboard">
        <div className="hr-container container">
          {!isCandidate ? (
            <>
              <div className="hr-create__vacancies">
                {!isOpenForm && (
                  <button onClick={handleChange}>
                    Создать <span>+</span>
                  </button>
                )}
              </div>
              {(isOpenForm || isOpenVacancyInfo) && (
                <>
                  {isOpenVacancyInfo ? (
                    <VacancyInfo
                      setIsOpenForm={setIsOpenForm}
                      setIsOpenVacancyInfo={setIsOpenVacancyInfo}
                    />
                  ) : (
                    <FormCreateVacancy
                      setIsOpenForm={setIsOpenForm}
                      setIsOpenVacancyInfo={setIsOpenVacancyInfo}
                    />
                  )}
                </>
              )}
              {!isOpenForm && !isOpenVacancyInfo && (
                <div className="hr-list__vacancies">
                  <div className="hr-list__title">Список вакансий</div>
                  <VacancyList vacancies={vacancies} setIsOpenVacancyInfo={setIsOpenVacancyInfo} />
                </div>
              )}
            </>
          ) : (
            <div>
              <div className="stages">
                {' '}
                <div
                  style={{
                    color: currentStep === 1 ? 'green' : 'blue',
                  }}>
                  Этап 1
                </div>
                <div
                  style={{
                    color: currentStep === 2 ? 'green' : 'blue',
                  }}>
                  Этап 2
                </div>
                <div
                  style={{
                    color: currentStep === 3 ? 'green' : 'blue',
                  }}>
                  Этап 3
                </div>
              </div>
              {currentStep === 1 && <FormQuestionnaire handleFormSubmit={handleFormSubmit} />}
              {currentStep === 2 && <TestTask handleTest1Complete={handleTest1Complete} />}
              {currentStep === 3 && <PsyhologyTest handleTest2Complete={handleTest2Complete} />}
              {currentStep === 4 && <div>Вы прошли все этапы <br/>Ждите результата!</div>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default CabinetHr;
