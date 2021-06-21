import { Section } from '@components/section';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

type Inputs = {
  title: string;
  slug: string;
  description: string;
  content: string;
};

const AdminComp = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const [token, setToken] = useState<string>(null);
  const [isValid, setIsValid] = useState(null);
  const [sent, setSent] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    axios
      .post('/api/create-post', data, {
        headers: {
          Authorization: 'Basic ' + Buffer.from(token).toString('base64'),
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        setSent(true);
      });
  };
  const onTokenSubmit = () => {
    const val = (document.getElementById('token') as HTMLInputElement).value;
    if (!val) setIsValid(false);
    else {
      axios
        .get(`/api/validate?token=${encodeURIComponent(val)}`)
        .then(() => {
          setToken(val);
          setIsValid(true);
        })
        .catch(() => setIsValid(false));
    }
  };

  return (
    <Section header="Welcome to admin page at the now only site owner access here.">
      {!isValid ? (
        <div className="flex flex-col">
          <input type="text" id="token" className="input" placeholder="Site admin token" />
          {isValid === false && <>not valid.</>}
          <button
            type="submit"
            onClick={onTokenSubmit}
            className="bg-blue-500 text-white rounded-md hover:bg-blue-600 active:bg-blue-700 p-2"
          >
            Validate
          </button>
        </div>
      ) : (
        <>
          {sent && (
            <motion.div
              initial={{ x: -60 }}
              animate={{ x: 0 }}
              className="w-full text-white bg-green-400 dark:bg-green-600 px-4 py-2 rounded-md shadow-md my-2"
            >
              Successfull created post in {process.env.NODE_ENV}
            </motion.div>
          )}
          <motion.form
            initial={{ x: -60 }}
            animate={{ x: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-x-2"
          >
            <input type="text" placeholder="Post title" className="input" {...register('title', { required: true })} />
            <input type="text" placeholder="Post slug" className="input" {...register('slug', { required: true })} />
            <input
              type="text"
              placeholder="Post Description"
              className="input col-span-2"
              {...register('description', { required: true })}
            />
            <textarea
              placeholder="Post content mdx"
              className="input col-span-2"
              rows={10}
              {...register('content', { required: true })}
            />
            <input type="submit" className="bg-blue-500 cursor-pointer p-2 rounded-md col-span-1 text-white" />
          </motion.form>
        </>
      )}
    </Section>
  );
};
const CsrAdmin = dynamic(() => new Promise((resolve) => resolve(AdminComp)), {
  ssr: false,
  loading: () => <>Loading...</>,
});
const Admin: Page = () => <CsrAdmin />;

Admin.PageProps = {};

export default Admin;
