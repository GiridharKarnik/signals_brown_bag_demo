import React, { useCallback, useState } from 'react';
import { CodePane } from 'spectacle';

import { codePaneTheme } from '../codePaneTheme';

import '../Slide1/Slide1.scss';
import { ControlPanel, FilteredPlaylistWithMemoizedSongs } from '../../components';
import { Genre, Search, SongType } from '../../components/Playlist/components';
import { songs } from '../../components/Playlist/data';
import { Filter } from '../../components/Playlist/components/Filter/Filter';

export const Slide5PlaylistWithSearch = () => {
  const [resetKey, setResetKey] = React.useState(0);

  return (
    <div className="slide2-container">
      <div className="interactive-example">
        <FilteredPlaylistWithMemoizedSongs key={resetKey} memoizeFilter={true} showSearch={true} />

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
              [25, 25],
              [6, 6],
              [16, 21],
            ]}
          >
            {`
              const MemoizedFilter = React.memo(Filter); 

              const Playlist: React.FC = () => {
                const [playingSong, setPlayingSong] = useState();
                const [selectedGenre, setSelectedGenre] = useState<Genre | undefined>();
                const [searchValue, setSearchValue] = useState<string>('');
                const [filteredSongs, setFilteredSongs] = useState<Array<SongType>>(songs);
            
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
                    <MemoizedFilter selectedGenre={selectedGenre} onClick={filter} />
                    {songs.map((song: SongProps) => {
                        return <Song {...song} playingSong={playingSong} 
                             setPlayingSong={setPlayingSong}/>;   
                    })}
                  </div>
                )
              }
            `}
          </CodePane>
          <p className="code-pane-title">Playlist.tsx - with search</p>
        </div>
      </div>
    </div>
  );
};
