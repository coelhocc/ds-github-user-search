import React from 'react';
import './styles.scss';

type Props = {
  text: string
}

const Button = ({ text }: Props) => (
  <span>
    <button 
      className="btn-content"
      type="submit"
    >
      <h5 className="btn-text">{text}</h5>
    </button>
  </span>
);

export default Button;