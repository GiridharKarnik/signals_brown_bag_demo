import React, { useCallback, useState } from 'react';
import { CodePane } from 'spectacle';

import { codePaneTheme } from '../codePaneTheme';

import '../Slide1/Slide1.scss';
import { ControlPanel, MemoisedPlaylistWithDynamicFilters } from '../../components';
import { Genre, SongType } from '../../components/Playlist/components';
import { songs } from '../../components/Playlist/data';
import { Filter } from '../../components/Playlist/components/Filter/Filter';

export const Slide6PlaylistDynamicFilters = () => {
  const [resetKey, setResetKey] = React.useState(0);

  return (
    <div className="slide2-container">
      <div className="interactive-example">
        <MemoisedPlaylistWithDynamicFilters key={resetKey} memoizeFilter={true} showSearch={true} />

        <ControlPanel
          onReset={() => {
            setResetKey(new Date().getTime());
          }}
        />
      </div>

      <div className="code-pane">
        <div className="code-pane-container">
          <CodePane
            language="typescript"
            //@ts-ignore
            theme={codePaneTheme}
            highlightRanges={[
              [12, 13],
              [32, 32],
              [1, 4],
            ]}
          >
            {`
              const MemoizedFilter = React.memo(Filter, (prevProps, nextProps) => {
                  //? deep comparison is needed for non-primitive types
                  return deepEqual(prevProps, nextProps);
              }); 

              const Playlist: React.FC = () => {
                const [playingSong, setPlayingSong] = useState();
                const [selectedGenre, setSelectedGenre] = useState<Genre | undefined>();
                const [searchValue, setSearchValue] = useState<string>('');
                const [filteredSongs, setFilteredSongs] = useState<Array<SongType>>(songs);
            
                //? needs to be memoized as well
                const genres = getGenres(filteredSongs);
                
                const filter = useCallback(
                  (newSelectedGenre: Genre) => {
                    ...
                  },
                  [selectedGenre, setSelectedGenre, setFilteredSongs]
                );
                
                const onSearch = useCallback(
                    (searchValue: string) => {
                        ...
                    },
                    [setFilteredSongs]
                );
                
                return (
                  <div className="playlist">
                    <Search value={searchValue} onSearch={onSearch} />
                    <MemoizedFilter genres={genres} selectedGenre={selectedGenre} onClick={filter} />
                    {songs.map((song: SongProps) => {
                        return <Song {...song} playingSong={playingSong} 
                             setPlayingSong={setPlayingSong}/>;   
                    })}
                  </div>
                )
              }
            `}
          </CodePane>
          <p className="code-pane-title">Playlist.tsx - with search and dynamic genre list</p>
        </div>
      </div>
    </div>
  );
};
