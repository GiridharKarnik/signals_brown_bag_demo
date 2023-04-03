import React from 'react';
import { CodePane, useSteps } from 'spectacle';
import { ControlPanel, Playlist } from '../../components/';

import { codePaneTheme } from '../codePaneTheme';

import './Slide2.scss';

export const Slide1: React.FC = () => {
  const { stepId, isActive, step, placeholder } = useSteps(2);
  const [resetKey, setResetKey] = React.useState(0);

  return (
    <div className="slide2-container">
      <div className="interactive-example">
        <Playlist key={resetKey} />

        <ControlPanel
          onReset={() => {
            setResetKey(new Date().getTime());
          }}
        />
      </div>

      {placeholder}

      <div className="code-pane">
        <div className="code-container">
          {step <= 0 ? (
            <div className="code-pane-container">
              <CodePane
                language="typescript"
                //@ts-ignore
                theme={codePaneTheme}
                highlightRanges={[[4, 6]]}
              >
                {`
              const Playlist: React.FC = () => {
                const [playingSong, setPlayingSong] = useState();
    
                return (
                  <div className="playlist">
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
          ) : (
            <div className="code-pane-container">
              <CodePane
                language="javascript"
                //@ts-ignore
                theme={codePaneTheme}
              >
                {` 
                const Song: React.FC = ({setPlayingSong}) => {
                  return (
                    <div className="song" onClick={setPlayingSong}>
                        ....
                    </div>
                  )
                }
              `}
              </CodePane>
              <p className="code-pane-title">Song.tsx</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
