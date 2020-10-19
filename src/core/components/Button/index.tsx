import React from 'react';
import './styles.scss';

type Props = {
  text: string
}

const Button = ({ text }: Props) => (
  <button className="button-content">
     <h5 className="button-text">{text}</h5>
  </button>
);

export default Button;