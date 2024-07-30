import { Link } from 'react-router-dom';
import { navItems } from '../../../constants/navItems.constant';

export const FooterLinks = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full md:w-1/2 mb-6 md:mb-0">
      <h5 className="uppercase font-bold mb-4">GastroTop</h5>
      {navItems.map(({ path, text }) => (
        <ul key={path}>
          <li className="mb-2">
            <Link to={path} className="hover:underline">
              {text}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};
