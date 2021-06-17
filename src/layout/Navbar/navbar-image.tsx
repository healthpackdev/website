import Link from 'next/link';
import { motion } from 'framer-motion';

const NavbarImage = () => (
  <div>
    <Link href="/">
      <a className="!shadow-none">
        <motion.img
          className="inline-block rounded-full mx-4 cursor-pointer"
          src="/avatar.png"
          alt="healthpack's profile"
          draggable={false}
          width={35}
          height={35}
        />
      </a>
    </Link>
  </div>
);
export default NavbarImage;
