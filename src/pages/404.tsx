import { useRouter } from 'next/router';

const Error: Page = () => {
  const router = useRouter();

  return (
    <div className="p-4 flex justify-center items-center flex-col">
      <h4 className="text-3xl mb-4">
        <span className="text-red-500">404</span> - are your lose you way?
      </h4>
      <button className="btn" onClick={() => router.push('/')}>
        Return Home.
      </button>
    </div>
  );
};

Error.layoutProps = { title: '404', description: 'Not found page' };

export default Error;
