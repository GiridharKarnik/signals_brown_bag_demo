import { CSSProperties } from 'react';

export { Pause } from './Pause';
export { Refresh } from './Refresh';

type IconCSSProps = Pick<CSSProperties, 'transform' | 'transition' | 'marginRight'>;

export interface IconProps extends IconCSSProps {
  color?: string;
  size?: string | number;
  height?: string | number;
  width?: string | number;
  margin?: string;
  marginLeft?: string;
  marginRight?: string;
  transform?: string;
}
