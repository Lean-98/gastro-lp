import { navItemsSocials } from '../../../constants/navSocials.constant';

export const FooterSocials = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full md:w-1/2">
      <h5 className="uppercase font-bold mb-4">Follow Us</h5>
      <div className="flex space-x-4 mb-6 md:mb-0">
        {navItemsSocials.map(({ link, name, icon: Icon }) => (
          <a
            key={name}
            href={link}
            className="hover:text-gray-400"
            target="_blank"
          >
            {/* {name} */}
            <Icon size={24} />
          </a>
        ))}
      </div>
    </div>
  );
};
