import { Section } from '@components/section';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import css from './css/Contact.module.css';
import author from '@config/author-meta.json';

interface Inputs {
  email: string;
  name: string;
  message: string;
}

const Contact: React.FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = ({ message, email, name }) => {
    router.push(
      `mailto:${author.contactEmail}?body=${encodeURIComponent(`${name && name} (${email}):\n\n${message}`)}`
    );
  };

  return (
    <Section header="Contact Me">
      <form onSubmit={handleSubmit(onSubmit)} className={css.contact}>
        <label htmlFor="contact-email">Your e-mail address</label>
        <input
          type="email"
          id="contact-email"
          className="input"
          autoComplete="off"
          placeholder="you@mail.com"
          {...register('email', { required: true })}
        />
        <label htmlFor="contact-name">Your name</label>
        <input
          type="text"
          id="contact-name"
          className="input"
          placeholder="James Bond"
          autoComplete="off"
          {...register('name', { required: false })}
        />
        <label htmlFor="contact-message">Your message</label>
        <textarea
          rows={5}
          id="contact-message"
          className="input resize-none"
          placeholder="Hello Yasin!"
          {...register('message', { required: true })}
        />
        <input type="submit" className="btn" />
      </form>
    </Section>
  );
};

export default Contact;
