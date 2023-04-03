import React from 'react';
import { CodePane, useSteps } from 'spectacle';

import { codePaneTheme } from '../codePaneTheme';

import '../Slide1/Slide2.scss';
import { ControlPanel, MemoizedPlaylist } from '../../components';

export const Slide2 = () => {
  const [resetKey, setResetKey] = React.useState(0);

  return (
    <div className="slide2-container">
      <div className="interactive-example">
        <MemoizedPlaylist key={resetKey} />

        <ControlPanel
          onReset={() => {
            setResetKey(new Date().getTime());
          }}
        />
      </div>

      <div className="code-pane">
        <div className="code-container">
          <div className="code-pane-container">
            <CodePane
              language="javascript"
              //@ts-ignore
              theme={codePaneTheme}
            >
              {` 
                const Song: React.FC = React.memo(({setPlayingSong}) => {
                  return (
                    <div className="song" onClick={setPlayingSong}>
                        ....
                    </div>
                  )
                }, (prevProps, nextProps) => {
                    return !(prevProps.playingSongId === prevProps.id 
                          || nextProps.playingSongId === nextProps.id);
                })
              `}
            </CodePane>
            <p className="code-pane-title">Song.tsx</p>
          </div>
        </div>
      </div>
    </div>
  );
};
