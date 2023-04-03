import React, { useCallback, useRef, useState } from 'react';
import deepEqual from 'fast-deep-equal/es6';
import { Genre, Search, Song, SongType } from './components';
import { Filter } from './components/Filter/Filter';

import { songs } from './data';

import './Playlist.scss';

const MemoizedFilter = React.memo(Filter, (prevProps, nextProps) => {
  return deepEqual(prevProps, nextProps);
});

const MemoizedSong = React.memo(Song, (prevProps, nextProps) => {
  return !(prevProps.playingSongId === prevProps.id || nextProps.playingSongId === nextProps.id);
});

const getGenres = (songs: Array<SongType>): Array<Genre> => {
  return songs.reduce((acc: Genre[], song: SongType) => {
    if (acc.includes(song.genre)) {
      return acc;
    }

    return [...acc, song.genre];
  }, []);
};

interface FilteredPlaylistWithMemoizedSongsProps {
  memoizeFilter?: boolean;
  showSearch?: boolean;
}

export const MemoisedPlaylistWithDynamicFilters: React.FC<FilteredPlaylistWithMemoizedSongsProps> =
  React.memo<FilteredPlaylistWithMemoizedSongsProps>(({ memoizeFilter, showSearch }) => {
    const getGenreCalls = useRef(0);
    const [playingSongId, setPlayingSongId] = useState<string>('');

    const [searchValue, setSearchValue] = useState<string>('');

    const [selectedGenre, setSelectedGenre] = useState<Genre | undefined>();
    const [filteredSongs, setFilteredSongs] = useState<Array<SongType>>(songs);

    getGenreCalls.current++;
    const genres = getGenres(filteredSongs);

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

    const onSearch = (search: string) => {
      const searchTerm = search.trim();

      if (searchTerm === '') {
        setFilteredSongs(songs);
        setSearchValue(search);
        return;
      }

      setSearchValue(search);

      const searchFiltered = songs.filter(song => song.title.toLowerCase().includes(searchTerm.toLowerCase()));

      setFilteredSongs(searchFiltered.length > 0 ? searchFiltered : songs);
    };

    return (
      <div className="playlist">
        {showSearch && <Search value={searchValue} onSearch={onSearch} />}

        {memoizeFilter ? (
          <MemoizedFilter genres={genres} selectedGenre={selectedGenre} onClick={filter} />
        ) : (
          <Filter selectedGenre={selectedGenre} onClick={filter} />
        )}

        <div className="song-block">
          {filteredSongs.length > 0 ? (
            <div className="song-list">
              {filteredSongs?.map((song: SongType) => {
                return <MemoizedSong key={song.id} {...song} playingSongId={playingSongId} onClick={onSongClick} />;
              })}
            </div>
          ) : (
            <div className="no-songs-found">
              <p>No songs found</p>
            </div>
          )}
        </div>

        <div className="get-genre-calls">
          <p>
            getGenres called <span>{getGenreCalls.current}</span> times
          </p>
        </div>
      </div>
    );
  });
