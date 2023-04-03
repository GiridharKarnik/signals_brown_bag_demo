import React, { useCallback, useState } from 'react';
import { CodePane } from 'spectacle';

import { codePaneTheme } from '../codePaneTheme';

import '../Slide1/Slide2.scss';
import { ControlPanel, FilteredPlaylistWithMemoizedSongs } from '../../components';
import { Genre, SongType } from '../../components/Playlist/components';
import { songs } from '../../components/Playlist/data';
import { Filter } from '../../components/Playlist/components/Filter/Filter';

export const Slide4MemoizedFilteredPlaylist = () => {
  // const { stepId, isActive, step, placeholder } = useSteps(1);
  const [resetKey, setResetKey] = React.useState(0);

  return (
    <div className="slide2-container">
      <div className="interactive-example">
        <FilteredPlaylistWithMemoizedSongs key={resetKey} memoizeFilter={true} />

        <ControlPanel
          onReset={() => {
            setResetKey(new Date().getTime());
          }}
        />
      </div>

      {/*{placeholder}*/}

      <div className="code-pane">
        <div className="code-pane-container">
          <CodePane
            language="typescript"
            //@ts-ignore
            theme={codePaneTheme}
            highlightRanges={[
              [1, 1],
              [24, 24],
              [8, 8],
              [19, 19],
            ]}
          >
            {`
              const MemoizedFilter = React.memo(Filter); 

              const Playlist: React.FC = () => {
                const [playingSong, setPlayingSong] = useState();
                const [selectedGenre, setSelectedGenre] = useState<Genre | undefined>();
                const [filteredSongs, setFilteredSongs] = useState<Array<SongType>>(songs);
            
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
          <p className="code-pane-title">Playlist.tsx</p>
        </div>
      </div>
    </div>
  );
};
