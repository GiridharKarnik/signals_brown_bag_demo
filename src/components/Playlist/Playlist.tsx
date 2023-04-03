import React, { useState } from 'react';
import { Song, SongType } from './components';

import { songs } from './data';

import './Playlist.scss';

export const Playlist: React.FC = React.memo(() => {
  console.log('rendered playlist');

  const [playingSongId, setPlayingSongId] = useState<string>('');

  const onSongClick = (id: string) => {
    setPlayingSongId(id);
  };

  return (
    <div className="playlist">
      {songs?.map((song: SongType) => {
        return <Song key={song.id} {...song} playingSongId={playingSongId} onClick={onSongClick} />;
      })}
    </div>
  );
});
