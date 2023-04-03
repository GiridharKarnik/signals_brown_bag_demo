import React, { useMemo, useState } from 'react';
import { Song, SongType } from './components';
import { songs } from './data';

import './Playlist.scss';

const MemoizedSong = React.memo(Song, (prevProps, nextProps) => {
  return !(prevProps.playingSongId === prevProps.id || nextProps.playingSongId === nextProps.id);
});

export const MemoizedPlaylist: React.FC = React.memo(() => {
  const [playingSongId, setPlayingSongId] = useState<string>('');

  const onSongClick = (id: string) => {
    setPlayingSongId(id);
  };

  return (
    <div className="playlist">
      {songs?.map((song: SongType) => {
        return <MemoizedSong key={song.id} {...song} playingSongId={playingSongId} onClick={onSongClick} />;
      })}
    </div>
  );
});
