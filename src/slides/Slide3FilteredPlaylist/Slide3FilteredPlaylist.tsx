import React, { useState } from 'react';
import { CodePane } from 'spectacle';

import { codePaneTheme } from '../codePaneTheme';

import { ControlPanel, FilteredPlaylistWithMemoizedSongs } from '../../components';
import { Genre, SongType } from '../../components/Playlist/components';
import { songs } from '../../components/Playlist/data';

import '../Slide1/Slide1.scss';

export const Slide3FilteredPlaylist = () => {
  const [resetKey, setResetKey] = React.useState(0);

  return (
    <div className="slide2-container">
      <div className="interactive-example">
        <FilteredPlaylistWithMemoizedSongs key={resetKey} />

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
              [19, 20],
              [3, 4],
              [6, 15],
            ]}
          >
            {`
              const Playlist: React.FC = () => {
                const [playingSong, setPlayingSong] = useState();
                const [selectedGenre, setSelectedGenre] = useState<Genre | undefined>();
                const [filteredSongs, setFilteredSongs] = useState<Array<SongType>>(songs);
            
                const filter = (newSelectedGenre: Genre) => {
                  if (newSelectedGenre === selectedGenre) {
                    setSelectedGenre(undefined);
                    setFilteredSongs(songs);
                    return;
                  }
                
                  setSelectedGenre(newSelectedGenre);
                  setFilteredSongs(songs.filter(song => song.genre === newSelectedGenre));
                };
                
                return (
                  <div className="playlist">
                    <Filter selectedGenre={selectedGenre} onClick={filter} />
                        
                    {songs.map((song: SongProps) => {
                        return <Song {...song} playingSong={playingSong} 
                             setPlayingSong={setPlayingSong}/>;   
                    })}
                  </div>
                )
              }
            `}
          </CodePane>
          <p className="code-pane-title">Playlist.tsx - with unmemoized genre filter</p>
        </div>
      </div>
    </div>
  );
};
