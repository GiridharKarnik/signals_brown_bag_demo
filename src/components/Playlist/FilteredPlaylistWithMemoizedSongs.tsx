import React, { useCallback, useState } from 'react';
import { Genre, Song, SongType } from './components';
import { Filter } from './components/Filter/Filter';

import { songs } from './data';

import './Playlist.scss';

const MemoizedFilter = React.memo(Filter);

const MemoizedSong = React.memo(Song, (prevProps, nextProps) => {
  return !(prevProps.playingSongId === prevProps.id || nextProps.playingSongId === nextProps.id);
});

interface FilteredPlaylistWithMemoizedSongsProps {
  memoizeFilter?: boolean;
}

export const FilteredPlaylistWithMemoizedSongs: React.FC<FilteredPlaylistWithMemoizedSongsProps> =
  React.memo<FilteredPlaylistWithMemoizedSongsProps>(({ memoizeFilter }) => {
    const [playingSongId, setPlayingSongId] = useState<string>('');
    const [selectedGenre, setSelectedGenre] = useState<Genre | undefined>();
    const [filteredSongs, setFilteredSongs] = useState<Array<SongType>>(songs);

    const onSongClick = (id: string) => {
      setPlayingSongId(id);
    };

    const filter = useCallback(
      (newSelectedGenre: Genre) => {
        if (newSelectedGenre === selectedGenre) {
          setSelectedGenre(undefined);
          setFilteredSongs(songs);
          return;
        }

        setSelectedGenre(newSelectedGenre);
        setFilteredSongs(songs.filter(song => song.genre === newSelectedGenre));
      },
      [selectedGenre, setSelectedGenre, setFilteredSongs]
    );

    return (
      <div className="playlist">
        {memoizeFilter ? (
          <MemoizedFilter selectedGenre={selectedGenre} onClick={filter} />
        ) : (
          <Filter selectedGenre={selectedGenre} onClick={filter} />
        )}
        {filteredSongs?.map((song: SongType) => {
          return <MemoizedSong key={song.id} {...song} playingSongId={playingSongId} onClick={onSongClick} />;
        })}
      </div>
    );
  });
