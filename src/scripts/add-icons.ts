import { library } from '@fortawesome/fontawesome-svg-core';
import { faDiscord, faTwitter, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {
  faAngleDoubleRight,
  faArrowUp,
  faMoon,
  faSun,
  faStar,
  faCodeBranch,
  faBars,
  faBook,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

const icons = [
  faDiscord,
  faTwitter,
  faGithub,
  faYoutube,
  faAngleDoubleRight,
  faArrowUp,
  faArrowLeft,
  faMoon,
  faSun,
  faStar,
  faBars,
  faCodeBranch,
  faBook,
];

library.add(...icons);
