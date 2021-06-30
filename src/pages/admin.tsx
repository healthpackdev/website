import { Section } from '@components/section';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { encodeBase64, encodeBase64File } from '@lib/buffer';

export type AdminPostInputs = {
  title: string;
  slug: string;
  description: string;
  content: string;
  image: FileList & string; // FileList
};

const AdminComp = () => {
  const { register, handleSubmit } = useForm<AdminPostInputs>();
  const [token, setToken] = useState<string>(null);
  const [isValid, setIsValid] = useState(null);
  const [sent, setSent] = useState(false);

  const onSubmit: SubmitHandler<AdminPostInputs> = async (data) => {
    data.image = await encodeBase64File(data.image[0]);

    fetch('/api/create-post', {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + encodeBase64(token),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) setSent(true);
    });
  };
  const onTokenSubmit = () => {
    const val = (document.getElementById('token') as HTMLInputElement).value;
    if (!val) setIsValid(false);
    else {
      fetch(`/api/validate?token=${encodeURIComponent(val)}`).then((res) => {
        if (res.status === 401) setIsValid(false);
        else if (res.status === 200) {
          setToken(val);
          setIsValid(true);
        }
      });
    }
  };

  return (
    <Section header="Welcome to admin page at the now only site owner access here.">
      {!isValid ? (
        <div className="flex flex-col">
          <input type="text" id="token" className="input" placeholder="Site admin token" />
          {isValid === false && <>not valid.</>}
          <button type="submit" onClick={onTokenSubmit} className="btn">
            Validate
          </button>
        </div>
      ) : (
        <>
          {sent && (
            <motion.div
              initial={{ x: -60 }}
              animate={{ x: 0 }}
              className="w-full text-white bg-green-400 dark:bg-green-600 px-4 py-2 rounded-md shadow-md my-2">
              Successfull created post in {process.env.NODE_ENV}
            </motion.div>
          )}
          <motion.form
            initial={{ x: -60 }}
            animate={{ x: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-x-2">
            <input type="text" placeholder="Post title" className="input" {...register('title', { required: true })} />
            <input type="text" placeholder="Post slug" className="input" {...register('slug', { required: true })} />
            <input
              type="text"
              placeholder="Post Description"
              className="input col-span-2"
              {...register('description', { required: true })}
            />
            <textarea
              placeholder="Paste content of post"
              className="input resize-none col-span-2"
              rows={10}
              {...register('content', { required: true })}
            />
            <input type="file" accept="image/png, image/jpg, image/jpeg" {...register('image', { required: true })} />
            <input type="submit" className="btn col-span-2" />
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

Admin.layoutProps = {};

export default Admin;
