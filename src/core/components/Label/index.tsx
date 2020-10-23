import React from 'react';
import './styles.scss'

type Props = {
  label: string;
  value?: string;
}

const Label = ({ label, value }: Props) => (
  <div className="label-container">
    <h1 className="label-text">
      {label}:
    </h1>
    <h1 className="label-user-info">
      {value}
    </h1>
  </div>
);

export default Label;