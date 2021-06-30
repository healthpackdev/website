import { Section } from '@components/section';
import author from '@config/author-meta.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import css from './Hero.module.css';
import Link from 'next/link';

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const Hero: React.FC = () => (
  <Section header="Hi I'm Yasin Kadir" id="hero">
    <p className="prose dark:prose-dark">
      I&apos;m a Web Developer and student. I have about 1 years experience in Javascript. I love <b>Next.js</b> and{' '}
      <b>React</b> with <b>Typescript</b>. I currently develop{' '}
      <Link href="/">
        <a>this website</a>
      </Link>{' '}
      and <b> trying to learn Golang</b> -{' '}
      <Link href="/about">
        <a>learn more about me</a>
      </Link>
    </p>

    <div className="mt-5 grid lg:block grid-cols-2">
      {author.socials.map((social, index) => (
        <a
          className={css.social}
          href={`/${social.icon[1]}`}
          key={index.toString()}
          //@ts-ignore
          style={{ '--social-color': social.color }}
          target="_blank"
          rel="noreferrer">
          <FontAwesomeIcon icon={social.icon as IconProp} /> {capitalize(social.icon[1])}
        </a>
      ))}
    </div>
  </Section>
);

export default Hero;
