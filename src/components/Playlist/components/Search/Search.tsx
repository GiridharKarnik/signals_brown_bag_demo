import React from 'react';

import './Search.scss';

interface SearchProps {
  value: string;
  onSearch: (value: string) => void;
}

export const Search: React.FC<SearchProps> = ({ value, onSearch }) => {
  return (
    <div className="search-container">
      <input value={value} onChange={e => onSearch(e.target.value)} placeholder="Search" />
    </div>
  );
};
