import Link from 'next/link';

const AboutText: React.FC = () => (
  <>
    I&apos;m a Web Developer and 7th grade student at <b>Şair Nedim</b>. I have about 1 years experience in Javascript.
    I love <b>Next.js</b> and <b>React</b> also I know <b>Typescript</b>. I currently work on <b>this website</b> and{' '}
    <b>Golang</b> -{' '}
    <Link href="/about">
      <a>Learn More About me</a>
    </Link>
  </>
);

export default AboutText;
