import { Deck, Slide, Stepper } from 'spectacle';
import { Slide0, Slide1, Slide2, Slide3FilteredPlaylist, Slide4MemoizedFilteredPlaylist } from './slides';
import React from 'react';

const theme = {
  size: {
    width: '100%',
    height: '100%',
  },
  colors: {
    primary: '#181818',
    secondary: '#ededed',
  },
  fontSizes: {
    h1: '64px',
    h2: '48px',
    h3: '32px',
    text: '28px',
    monospace: '28px',
  },
};

const transition = {
  from: {
    opacity: 0,
    transform: 'rotate(0)',
  },
  enter: {
    opacity: 1,
    transform: 'rotate(0)',
  },
  leave: {
    opacity: 0,
    transform: 'rotate(0)',
  },
};

const code = `import React from 'react'`;

export default function App() {
  return (
    //@ts-ignore
    <Deck theme={theme} transition={transition}>
      <Slide0 />

      <Slide backgroundColor="#282828">
        <Slide1 />
      </Slide>

      <Slide backgroundColor="#282828">
        <Slide2 />
      </Slide>

      <Slide backgroundColor="#282828">
        <Slide3FilteredPlaylist />
      </Slide>

      <Slide backgroundColor="#282828">
        <Slide4MemoizedFilteredPlaylist />
      </Slide>

      {/*<Slide>*/}
      {/*  <p>Hello, world!</p>*/}
      {/*  <Stepper tagName="p" values={['foo', 'bar']}>*/}
      {/*    {(value, step, isActive) =>*/}
      {/*      isActive*/}
      {/*        ? `The first stepper is not active. Step: ${step} Value: ${value}`*/}
      {/*        : `The first stepper is active. Step: ${step} Value: ${value}`*/}
      {/*    }*/}
      {/*  </Stepper>*/}
      {/*  <Stepper tagName="p" values={['baz', 'quux']}>*/}
      {/*    {(value, step, isActive) =>*/}
      {/*      isActive*/}
      {/*        ? `The second stepper is not active. Step: ${step} Value: ${value}`*/}
      {/*        : `The second stepper is active. Step: ${step} Value: ${value}`*/}
      {/*    }*/}
      {/*  </Stepper>*/}
      {/*</Slide>*/}

      {/*<p>Hello, world!</p>*/}
      {/*<Stepper tagName="p" alwaysVisible values={['foo', 'bar']}>*/}
      {/*  {(value, step, isActive) =>*/}
      {/*    isActive*/}
      {/*      ? `The first stepper is not active. Step: ${step} Value: ${value}`*/}
      {/*      : `The first stepper is active. Step: ${step} Value: ${value}`*/}
      {/*  }*/}
      {/*</Stepper>*/}
      {/*<Stepper tagName="p" alwaysVisible values={['baz', 'quux']}>*/}
      {/*  {(value, step, isActive) =>*/}
      {/*    isActive*/}
      {/*      ? `The second stepper is not active. Step: ${step} Value: ${value}`*/}
      {/*      : `The second stepper is active. Step: ${step} Value: ${value}`*/}
      {/*  }*/}
      {/*</Stepper>*/}
    </Deck>
  );
}
