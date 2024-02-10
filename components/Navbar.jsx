import { ArrowLeft, Lock, Logo, Question } from '@/icons';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-lightGrey">
      <div className="p-4 lg:p-0 container max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center h-9 lg:h-[72px]">
          <Link href="/" className="hidden lg:block">
            <Logo />
          </Link>
          <ArrowLeft className="lg:hidden mx-3" />
          <div className="flex gap-2 items-center font-semibold text-greySecondary">
            <Lock color="#7E808A" />
            <span>Checkout</span>
          </div>
          <div className="flex gap-2 items-center font-semibold text-greySecondary">
            <Question className="mx-3 lg:mx-0" />
            <span className="hidden lg:inline-block">Help</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
