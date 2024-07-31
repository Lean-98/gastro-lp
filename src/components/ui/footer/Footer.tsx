import { FooterLinks } from './FooterLinks';
import { FooterSocials } from './FooterSocials';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <FooterSocials />
          <FooterLinks />
        </div>

        <div className="mt-8 border-t border-neutral-200 pt-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} GastroTop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
