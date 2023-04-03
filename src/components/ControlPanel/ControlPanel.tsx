import React from 'react';

import './ControlPanel.scss';
import { Refresh } from '../Icons';

interface ControlPanelProps {
  onReset: () => void;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({ onReset }) => {
  return (
    <div className="control-panel-container">
      <div className="reset" onClick={onReset}>
        <Refresh color="#e1e1e1" size={18} />
      </div>
    </div>
  );
};
