import { useRouter } from 'next/router';

export default function error() {
  const Router = useRouter();
  Router.push('/');

  return <div>Page 404 you are redirecting to home.</div>;
}
