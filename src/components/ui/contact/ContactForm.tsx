import { Form } from './ui/Form';
import style from './ui/contactForm.module.css';

export const ContactForm = () => {
  return (
    <>
      <section className={style.contact}>
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Contact Us
        </h2>
        <Form />
      </section>
    </>
  );
};
