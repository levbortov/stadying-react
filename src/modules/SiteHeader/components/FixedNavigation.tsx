import React from 'react';
import Button from '@src/ui/Button';
import NavLink from '@src/ui/NavLink';

const FixedNavigation: React.FC = () => {
  return (
    <div className="py-3 bg-white/50 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex gap-3">
            <li>
              <NavLink>placeholder</NavLink>
            </li>
            <li>
              <NavLink>placeholder</NavLink>
            </li>
            <li>
              <NavLink>placeholder</NavLink>
            </li>
            <li>
              <NavLink>placeholder</NavLink>
            </li>
            <li>
              <NavLink>placeholder</NavLink>
            </li>
          </ul>
        </nav>
        <Button variant="primary">placeholder</Button>
      </div>
    </div>
  );
};

export default FixedNavigation;
