import Link from 'next/link';

const AboutText: React.FC = () => (
  <>
    I&apos;m a Web Developer and 7th grade student at <b>Şair Nedim</b>. I currently work on this website and Golang -
    <Link href="/about">
      <a>Learn More About me</a>
    </Link>
  </>
);

export default AboutText;
