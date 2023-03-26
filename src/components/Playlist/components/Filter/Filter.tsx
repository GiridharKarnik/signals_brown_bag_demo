import React from 'react';

import './Filter.scss';

interface FilterProps {
  onClick: (filter: string) => void;
}

export const Filter: React.FC<FilterProps> = () => {
  return (
    <div className="filter-container">
      <div className="filter-item">Hip hop</div>
      <div className="filter-item">Country</div>
      <div className="filter-item">Rock</div>
    </div>
  );
};
