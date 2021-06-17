import Link from 'next/link';

const AboutText: React.FC = () => (
  <>
    I&apos;m a Web Developer and 7th grade student at Şair Nedim. I have about 1 years experience in Javascript. I love{' '}
    <b>Next.js</b> and <b>React</b> with <b>Typescript</b>. I currently develop{' '}
    <Link href="/">
      <a>this website</a>
    </Link>{' '}
    and <b> trying to learn Golang</b> -{' '}
    <Link href="/about">
      <a>learn more about me</a>
    </Link>
  </>
);

export default AboutText;
