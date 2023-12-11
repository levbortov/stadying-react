import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?:
    | 'primary'
    | 'primary-tonal'
    | 'primary-outline'
    | 'primary-text'
    | 'secondary'
    | 'secondary-tonal'
    | 'secondary-outline'
    | 'secondary-text';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'secondary-tonal',
  size = 'medium',
  onClick,
}) => {
  let buttonStyle = '';
  switch (variant) {
    case 'primary':
      buttonStyle = 'text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800';
      break;
    case 'primary-tonal':
      buttonStyle =
        'text-orange-600 bg-orange-600/30 hover:bg-orange-600/40 active:bg-orange-600/50';
      break;
    case 'primary-outline':
      buttonStyle =
        'text-orange-600 bg-transparent border border-orange-600 hover:bg-orange-600/10 active:bg-orange-600/20';
      break;
    case 'primary-text':
      buttonStyle = 'text-orange-600 hover:bg-orange-600/20 active:bg-orange-600/30';
      break;
    case 'secondary':
      buttonStyle = 'text-white bg-gray-800 hover:bg-gray-900 active:bg-gray-700';
      break;
    case 'secondary-tonal':
      buttonStyle =
        'text-black bg-gray-800/20 hover:bg-gray-800/30 active:bg-gray-800/40';
      break;
    case 'secondary-outline':
      buttonStyle =
        'text-gray-800 bg-transparent border border-gray-800/50 hover:bg-gray-800/10 active:bg-gray-800/20';
      break;
    case 'secondary-text':
      buttonStyle = 'text-gray-800 hover:bg-gray-800/20 active:bg-gray-800/30';
      break;
  }

  let sizeStyle = '';
  switch (size) {
    case 'small':
      sizeStyle = 'px-2 py-1 text-sm';
      break;
    case 'medium':
      sizeStyle = 'px-4 py-2 text-base';
      break;
    case 'large':
      sizeStyle = 'px-5 py-2 text-lg';
      break;
  }

  return (
    <button
      onClick={onClick}
      className={`rounded-full focus:outline-none ${buttonStyle} ${sizeStyle}`}>
      {children}
    </button>
  );
};

export default Button;
