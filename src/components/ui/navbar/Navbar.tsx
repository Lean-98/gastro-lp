import { Link } from 'react-router-dom';
import { LuChefHat } from 'react-icons/lu';
import { navItems } from '../../../constants/navItems.constant';

export const Navbar = () => {
  return (
    <nav className="bg-primary p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center text-white text-2xl font-normal gap-1">
          GastroTop
          <LuChefHat size={30} />
        </div>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-0">
          {navItems.map(({ text, path }) => (
            <li className="list-none" key={path}>
              <Link
                to={path}
                className="cursor-pointer text-white hover:bg-accent px-1 py-2 rounded transition-all"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
