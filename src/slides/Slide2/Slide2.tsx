import React from 'react';
import './Slide2.scss';
import { CodePane, Slide } from 'spectacle';
import { Playlist } from '../../components/';
import tomorrow from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

const theme = {
  'code[class*="language-"]': {
    color: '#ccc',
    background: 'none',
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: '18px',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
  },
  'pre[class*="language-"]': {
    color: '#ccc',
    background: '#282828',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '10px',
    borderColor: '#4f4f4f',
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: '12px',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    padding: '1em',
    margin: '.5em 0',
    overflow: 'auto',
  },
  ':not(pre) > code[class*="language-"]': {
    background: '#2d2d2d',
    padding: '.1em',
    borderRadius: '.3em',
    whiteSpace: 'normal',
  },
  comment: {
    color: '#999',
  },
  'block-comment': {
    color: '#999',
  },
  prolog: {
    color: '#999',
  },
  doctype: {
    color: '#999',
  },
  cdata: {
    color: '#999',
  },
  punctuation: {
    color: '#ccc',
  },
  tag: {
    color: '#e2777a',
  },
  'attr-name': {
    color: '#e2777a',
  },
  namespace: {
    color: '#e2777a',
  },
  deleted: {
    color: '#e2777a',
  },
  'function-name': {
    color: '#6196cc',
  },
  boolean: {
    color: '#f08d49',
  },
  number: {
    color: '#f08d49',
  },
  function: {
    color: '#f08d49',
  },
  property: {
    color: '#f8c555',
  },
  'class-name': {
    color: '#f8c555',
  },
  constant: {
    color: '#f8c555',
  },
  symbol: {
    color: '#f8c555',
  },
  selector: {
    color: '#cc99cd',
  },
  important: {
    color: '#cc99cd',
    fontWeight: 'bold',
  },
  atrule: {
    color: '#cc99cd',
  },
  keyword: {
    color: '#cc99cd',
  },
  builtin: {
    color: '#cc99cd',
  },
  string: {
    color: '#7ec699',
  },
  char: {
    color: '#7ec699',
  },
  'attr-value': {
    color: '#7ec699',
  },
  regex: {
    color: '#7ec699',
  },
  variable: {
    color: '#7ec699',
  },
  operator: {
    color: '#67cdcc',
  },
  entity: {
    color: '#67cdcc',
    cursor: 'help',
  },
  url: {
    color: '#67cdcc',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  inserted: {
    color: 'green',
  },
};

export const Slide2: React.FC = () => {
  return (
    <Slide backgroundColor="#282828">
      <div className="slide2-container">
        <div className="interactive-example">
          <Playlist />
        </div>

        <div className="code-demo-container">
          <CodePane
            language="javascript"
            //@ts-ignore
            theme={theme}
            highlightRanges={[
              [1, 3],
              [4, 8],
            ]}
          >
            {`
                const Playlist: React.FC = () => {
                    return (
                        <div className="playlist">
                            <Filter onClick={filterSongs} />
                            {songs.map((song: SongProps) => {
                                return <Song {...song} />;
                            })}
                        </div>
                    )
                }
            `}
          </CodePane>
        </div>
      </div>
    </Slide>
  );
};
