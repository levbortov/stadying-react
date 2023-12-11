type NavLinkProps = {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({ children, size = 'medium', onClick }) => {
  const NavLinkStyle = 'text-black hover:text-orange-600 active:text-orange-700';

  let sizeStyle = '';
  switch (size) {
    case 'small':
      sizeStyle = 'text-sm';
      break;
    case 'medium':
      sizeStyle = 'text-base';
      break;
    case 'large':
      sizeStyle = 'text-lg';
      break;
  }

  return (
    <a className={`${NavLinkStyle} ${sizeStyle} cursor-pointer`} onClick={onClick}>
      {children}
    </a>
  );
};

export default NavLink;
