import { Section } from '@components/section';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="dark:bg-gray-700 bg-gray-100 p-4 flex flex-col rounded-md shadow-lg"
      >
        <input
          type="email"
          className="input"
          placeholder="Your email address"
          {...register('email', { required: true })}
        />

        <input
          type="text"
          className="input"
          placeholder="Your name"
          autoComplete="off"
          {...register('name', { required: false })}
        />
        <textarea
          rows={5}
          className="input resize-none !my-2"
          placeholder="Your message"
          {...register('message', { required: true })}
        />
        <input type="submit" className="button" />
      </form>
    </Section>
  );
};

export default Contact;
