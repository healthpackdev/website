import type { IconName } from '@fortawesome/fontawesome-svg-core';
import { Section } from '@components/section';
import author from '@config/author-meta.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import css from './css/Hero.module.css';
import Link from 'next/link';
import { getColor, useReactiveTheme } from '@lib/theme';

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const Hero: React.FC = () => {
  const { theme } = useReactiveTheme();

  return (
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
            href={`/${social.icon}`}
            key={index.toString()}
            style={{
              //@ts-ignore
              '--social-color': getColor(social.color, theme),
              '--social-color-hover': social.icon === 'github' ? getColor(['white', 'black'], theme) : 'white',
            }}
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={['fab', social.icon as IconName]} /> {capitalize(social.icon)}
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Hero;
