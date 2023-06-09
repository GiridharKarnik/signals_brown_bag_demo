import React, { useRef } from 'react';

import { Pause } from '../../../Icons';
import './Song.scss';

export type Genre = 'Hip-Hop' | 'Electronic' | 'Pop' | 'Samba';

export interface SongType {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  genre: Genre;
  image: string;
}

export interface SongProps extends SongType {
  playingSongId: string;
  onClick: (id: string) => void;
}

export const Song: React.FC<SongProps> = ({ id, title, artist, album, image, playingSongId, onClick }) => {
  const renderCounter = useRef<number>(0);

  renderCounter.current++;

  const isPlaying = playingSongId === id;

  return (
    <div
      className="song-container"
      onClick={() => {
        onClick(id);
      }}
    >
      <div className="song-image-container">
        <img className="song-image" alt="song-image" src={image} />

        {isPlaying && (
          <div className="pause-icon-container">
            <Pause size={25} color="#d5d5d5" />
          </div>
        )}
      </div>

      <div className="song-info">
        <div className="song-title">{title}</div>
        <div className="song-artist-and-album">
          <div className="song-artist">{artist}</div>
          <p>•</p>
          <div className="song-album">{album}</div>
        </div>
      </div>

      <div className="song-render-count">{renderCounter.current}</div>
    </div>
  );
};
