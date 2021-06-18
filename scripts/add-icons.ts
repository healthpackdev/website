import { library } from '@fortawesome/fontawesome-svg-core';
import { faDiscord, faTwitter, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUp,
  faMoon,
  faSun,
  faStar,
  faCodeBranch,
  faBars,
  faSearch,
  faTimes,
  faHome,
  faPencilAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const icons = [
  faHome,
  faUser,
  faPencilAlt,
  faDiscord,
  faTwitter,
  faGithub,
  faYoutube,
  faSearch,
  faArrowUp,
  faMoon,
  faSun,
  faStar,
  faBars,
  faCodeBranch,
  faTimes,
];

library.add(...icons);
