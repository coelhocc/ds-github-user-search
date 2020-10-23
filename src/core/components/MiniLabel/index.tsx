import React from 'react';
import './styles.scss'

type Props = {
  label: string;
  value?: number;
}

const MiniLabel = ({ label, value }: Props) => (
  <div className="minilabel-container">
    <h1 className="minilabel-text">
      {label}: {value}
    </h1>
  </div>
);

export default MiniLabel;