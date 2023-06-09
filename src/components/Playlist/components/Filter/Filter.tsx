import React, { useRef } from 'react';
import { Genre } from '../Song/Song';

import './Filter.scss';

const staticGenres: Array<Genre> = ['Hip-Hop', 'Electronic', 'Samba', 'Pop'];

interface FilterProps {
  genres?: Array<Genre>;
  selectedGenre?: Genre;
  onClick: (filter: Genre) => void;
}

export const Filter: React.FC<FilterProps> = ({ genres, selectedGenre, onClick }) => {
  const renderCounter = useRef<number>(0);

  renderCounter.current++;

  return (
    <div className="filter-container">
      <div className="genres">
        {(genres || staticGenres).map((genre: Genre) => {
          const selected = selectedGenre === genre;

          return (
            <div
              className={selected ? 'filter-item selected-genre' : 'filter-item'}
              onClick={() => {
                onClick(genre);
              }}
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="render-count">{renderCounter.current}</div>
    </div>
  );
};
