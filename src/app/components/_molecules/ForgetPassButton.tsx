import React from 'react';

interface ButtonProps {
  width: string;
  height: string;
  backgroundColor : string ;
  value : string; 
  borderRadius: string; 
  border: string;
  color : string;
}

const Button: React.FC<ButtonProps> = ({ width, height , backgroundColor, value ,  borderRadius , border, color }) => {
  return (
    <button style={{ width, height ,backgroundColor , borderRadius, border , color }}>{value}</button>
  );
};

export default Button;