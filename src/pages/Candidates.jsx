import React from 'react';
import Header from '../componets/header/Header';
import CandidateItem from '../componets/candidateItem/CandidateItem';


const Candidates = () => {
  return (
    <div>
      <Header />
      <div className="candidates__container container">
        <div className="candidates__title">Кандидаты</div>
        <div className="candidates">
					<CandidateItem/>
				</div>
      </div>
    </div>
  );
};
export default Candidates;
