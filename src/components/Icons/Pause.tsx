import React from 'react';
import { IconProps } from './index';

export const Pause: React.FC<IconProps> = ({ color, size }) => (
  <svg viewBox="0 0 512 512" width={size} height={size}>
    <g fill={color}>
      <path d="m118.7 0c27.4 0 49.6 22.2 49.6 49.6v412.9c0 27.4-22.2 49.6-49.6 49.6-27.4 0-49.6-22.2-49.6-49.6v-412.9c0-27.4 22.2-49.6 49.6-49.6z" />
      <path d="m393.3 0c27.4 0 49.6 22.2 49.6 49.6v412.9c0 27.4-22.2 49.6-49.6 49.6-27.4 0-49.6-22.2-49.6-49.6v-412.9c.1-27.4 22.3-49.6 49.6-49.6z" />
    </g>
  </svg>
);
