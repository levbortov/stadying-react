import NavLink from '@src/ui/NavLink';
import React from 'react';

const Upper: React.FC = () => {
  return (
    <div className="py-3 border-b">
      <div className="container mx-auto">
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
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Upper;
